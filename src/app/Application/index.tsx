////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useContext, useEffect, useState } from "react";

import { Overlay } from "@/components/Overlay";
import { ProjectModalOverlayComponent } from "@/app/components/ProjectModalStuff/ProjectModalOverlayComponent";

import { AppContext, AppContextType } from "@/context/AppContext";

import { isProjectKey } from "@/utils/isProjectKey";
import { joinClasses } from "@/utils/joinClasses";
import { toStringMS } from "@/utils/strings/toStringMS";

import { type TransitionTimingFunction } from "@/types/css/TransitionTimingFunction";
import { isSectionKey } from "@/data/SECTION_MAP";
import { AppLayout } from "../layouts/AppLayout";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param props - Component Props
 * @see {@link ApplicationProps}
 * @returns JSX
 */
export function Application(): JSX.Element {

  // Application Visibility
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => { setTimeout(() => setIsVisible(true), 0) }, []);

  // App Context
  const appContext: AppContextType | undefined = useContext(AppContext);
  if (typeof appContext === "undefined") { throw new Error("Missing App Context Provider"); }

  // Project Modal Overlay Stuff
  const projectModalOverlayTransitionDurationValueMS: number = 300;
  const projectModalOverlaytransitionFunction: TransitionTimingFunction = "ease-out";

  // APPLICATION EFFECTS

  useEffect(() => {
    const searchParams: URLSearchParams = new URLSearchParams(window.location.search);
    const projectKey: string | null = searchParams.get("projectKey");
    if (projectKey && isProjectKey(projectKey)) {
      appContext.setCurrentProjectKey(projectKey);
      appContext.toggleProjectModal();
    }

    const handlePopState = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const querySectionKey = searchParams.get("sectionKey");
      const queryProjectKey = searchParams.get("projectKey");
      if (querySectionKey && isSectionKey(querySectionKey)) {
        appContext.setActiveSectionKey(querySectionKey);
      }
      if (queryProjectKey && isProjectKey(queryProjectKey)) {
        appContext.setCurrentProjectKey(queryProjectKey);
        appContext.openProjectModal();
      } else {
        appContext.setCurrentProjectKey(null);
        appContext.closeProjectModal();
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    }
  }, []);

  useEffect(() => {
    const url: URL = new URL(window.location.href);
    const queryParameterName: string = "sectionKey";
    const queryParameterValue: string | null = url.searchParams.get(queryParameterName);
    if (appContext.activeSectionKey === queryParameterValue) { return }
    else {
      url.searchParams.set(queryParameterName, appContext.activeSectionKey);
      window.history.pushState({}, "", url.toString());
    }
  }, [appContext.activeSectionKey]);

  useEffect(() => {
    const url: URL = new URL(window.location.href);
    const queryParameterName: string = "projectKey";
    const queryParameterValue: string | null = url.searchParams.get(queryParameterName);
    if (appContext.currentProjectKey === queryParameterValue) { return }
    else if (appContext.currentProjectKey === null) {
      url.searchParams.delete(queryParameterName);
    }
    else {
      url.searchParams.set(queryParameterName, appContext.currentProjectKey);
    }
    window.history.pushState({}, "", url.toString());
  }, [appContext.currentProjectKey]);

  // Return Content
  return (
    <div className={joinClasses(styles.component, isVisible ? styles.visible : "")}>
      <div className={styles.layer} />
      <div className={styles.layer}>
        <AppLayout />
      </div>
      <Overlay
        isActive={appContext.isProjectModalOpen}
        transitionDuration={toStringMS(projectModalOverlayTransitionDurationValueMS)}
        transitionFunction={projectModalOverlaytransitionFunction}
      >
        <ProjectModalOverlayComponent
          transitionDuration={toStringMS(projectModalOverlayTransitionDurationValueMS)}
          transitionFunction={projectModalOverlaytransitionFunction}
        />
      </Overlay>
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
