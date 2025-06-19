////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { useEffect } from "react";

import { type TransitionTimingFunction } from "@/common/types/css/TransitionTimingFunction";
import { type CustomProperties } from "@/common/types/CustomProperties";
import { joinClasses } from "@/common/utils/joinClasses";
import { toStringMS } from "@/common/utils/strings/toStringMS";

import { AppSectionKey } from "@/data/keys/AppSectionKey";

import { AppNavigationHook, useAppNavigation } from "@/hooks/useAppNavigation";
import { AppStateHook, useAppState } from "@/hooks/useAppState";
import { AppOverlayContent } from "./AppOverlayContent";
import { AppPrimaryContentLayout } from "./AppPrimaryContentLayout";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type AppContainerProps = {}

/**
 * @param props
 * @see {@link AppContainerProps}
 * @returns JSX
 */
export function AppContainer({}: AppContainerProps): JSX.Element {

  const appStateHook: AppStateHook = useAppState();
  const appNavigationHook: AppNavigationHook = useAppNavigation();

  const isOverlayActive: boolean = appStateHook.appSectionKey === AppSectionKey.Projects && appStateHook.projectKey !== null;

  const overlayTransitionDurationMS: number = 300;
  const overlayTransitionFunction: TransitionTimingFunction = "ease-in-out"
  const overlayCustomProperties: CustomProperties = {
    "--overlay-transition-duration": toStringMS(overlayTransitionDurationMS),
    "--overlay-transition-function": overlayTransitionFunction
  }

  // Escape Modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (appStateHook.appSectionKey === AppSectionKey.Projects) {
          appNavigationHook.navigateToProjectsSection();
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
        <AppPrimaryContentLayout />
      </div>
      <div
        className={joinClasses(styles.layer, styles.overlay, isOverlayActive ? styles.front : styles.back)}
        style={overlayCustomProperties}
      >
        <AppOverlayContent isOverlayActive={isOverlayActive} appStateHook={appStateHook} />
      </div>
    </>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
