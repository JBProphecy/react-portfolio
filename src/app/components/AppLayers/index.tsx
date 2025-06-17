////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { joinClasses } from "@/utils/joinClasses";

import { AppOverlayContent } from "@/app/components/AppOverlayContent";
import { AppPrimaryContent } from "@/app/components/AppPrimaryContent";

import { AppStateHook, useAppState } from "@/app/hooks/useAppState";
import { SectionKey } from "@/app/data/enums/SectionKey";
import { ModalKey } from "@/app/data/enums/ModalKey";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type AppLayersProps = {}

/**
 * @param props
 * @see {@link AppLayersProps}
 * @returns JSX
 */
export function AppLayers({}: AppLayersProps): JSX.Element {

  // Navigate
  const location = useLocation();
  const navigate = useNavigate();

  // App State From URL
  const appStateHook: AppStateHook = useAppState();

  const isOverlayActive: boolean =
    appStateHook.sectionKey === SectionKey.Projects
    && appStateHook.modalKey === ModalKey.Projects
    && appStateHook.projectKey !== null;
  
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        navigate({
          pathname: "/projects",
          search: location.search
        })
      }
    }
    if (appStateHook.sectionKey === SectionKey.Projects && appStateHook.projectKey) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
    }
  }, [appStateHook])
  
  // Return Content
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
