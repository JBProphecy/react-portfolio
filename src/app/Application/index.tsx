////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { LeftSidebarLayout } from "@/app/LeftSidebarLayout";
import { toStringMS } from "@/utils/strings/toStringMS";
import { type TransitionTimingFunction } from "@/types/css/TransitionTimingFunction";

import { Overlay } from "@/components/revised/Overlay";
import { type OverlayHook, useOverlay } from "@/hooks/useOverlay";

import { ProjectModalOverlayComponent } from "@/components/revised/ProjectModalOverlayComponent";
import { type ProjectKeyHook, useProjectKey } from "@/hooks/useProjectKey";
import { useEffect, useState } from "react";
import { joinClasses } from "@/utils/joinClasses";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param props - Component Props
 * @see {@link ApplicationProps}
 * @returns JSX
 */
export function Application(): JSX.Element {

  // Visibility
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => { setTimeout(() => setIsVisible(true), 300) }, [])

  // Project Modal Overlay Stuff
  const projectModalOverlayTransitionDurationValueMS: number = 300;
  const projectModalOverlaytransitionFunction: TransitionTimingFunction = "ease-out";
  const projectModalOverlayHook: OverlayHook = useOverlay();
  const projectKeyHook: ProjectKeyHook = useProjectKey(projectModalOverlayHook, projectModalOverlayTransitionDurationValueMS);

  // Return Content
  return (
    <div className={joinClasses(styles.component, isVisible ? styles.visible : "")}>
      <div className={styles.layer} />
      <div className={styles.layer}>
        <LeftSidebarLayout toggleProjectModalOverlay={projectModalOverlayHook.toggle} setProjectKey={projectKeyHook.setProjectKey} />
      </div>
      <Overlay
        isActive={projectModalOverlayHook.isActive}
        transitionDuration={toStringMS(projectModalOverlayTransitionDurationValueMS)}
        transitionFunction={projectModalOverlaytransitionFunction}
      >
        <ProjectModalOverlayComponent
          isOverlayActive={projectModalOverlayHook.isActive}
          toggleProjectModalOverlay={projectModalOverlayHook.toggle}
          transitionDuration={toStringMS(projectModalOverlayTransitionDurationValueMS)}
          transitionFunction={projectModalOverlaytransitionFunction}
          projectKey={projectKeyHook.projectKey}
        />
      </Overlay>
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
