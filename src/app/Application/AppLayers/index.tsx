////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { AppOverlayContent } from "./AppOverlayContent";
import { AppPrimaryContent } from "./AppPrimaryContent";

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { SectionKey } from "@/app/data/enums/SectionKey";
import { AppStateHook, useAppState } from "@/app/hooks/useAppState";

import { joinClasses } from "@/utils/joinClasses";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type AppLayersProps = {}

/**
 * @param props
 * @see {@link AppLayersProps}
 * @returns JSX
 */
export function AppLayers({}: AppLayersProps): JSX.Element {

  // URL Functionality
  const location = useLocation();
  const navigate = useNavigate();

  // App State From URL
  const appStateHook: AppStateHook = useAppState();
  const isOverlayActive: boolean = appStateHook.sectionKey === SectionKey.Projects && appStateHook.projectKey !== null;

  // Exit Modal Keys
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (appStateHook.sectionKey === SectionKey.Projects) {
          navigate({ pathname: "/projects", search: location.search })
        }
      }
    }
    if (isOverlayActive) { window.addEventListener("keydown", handleEscape); }
    return () => { window.removeEventListener("keydown", handleEscape); }
  }, [appStateHook]);
  
  // Return Component
  return (
    <>
      <div className={joinClasses(styles.layer, styles.primary)}>
        <AppPrimaryContent appStateHook={appStateHook} />
      </div>
      <div className={joinClasses(styles.layer, styles.overlay, isOverlayActive ? styles.front : styles.back)}>
        <AppOverlayContent isOverlayActive={isOverlayActive} appStateHook={appStateHook} />
      </div>
    </>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
