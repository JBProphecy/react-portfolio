////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { ProjectModal } from "./ProjectModal";

import { AppSectionKey } from "@/data/keys/AppSectionKey";

import { AppStateHook } from "@/hooks/useAppState";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type AppOverlayContentProps = {
  isOverlayActive: boolean;
  appStateHook: AppStateHook
}

/**
 * @param props
 * @see {@link AppOverlayContentProps}
 * @returns JSX
 */
export function AppOverlayContent({
  isOverlayActive,
  appStateHook
}: AppOverlayContentProps): JSX.Element {

  switch (appStateHook.appSectionKey) {
    case AppSectionKey.AboutMe: return <></>;
    case AppSectionKey.Projects: return <ProjectModal isOverlayActive={isOverlayActive} projectKey={appStateHook.projectKey} />;
    case AppSectionKey.Settings: return <></>;
    default: return <></>;
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
