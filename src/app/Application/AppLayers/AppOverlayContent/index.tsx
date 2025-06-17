////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { ProjectModal } from "./ProjectModal";

import { SectionKey } from "@/app/data/enums/SectionKey"
import { AppStateHook } from "@/app/hooks/useAppState"

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

  switch (appStateHook.sectionKey) {
    case SectionKey.AboutMe: return <></>;
    case SectionKey.Projects: return <ProjectModal isOverlayActive={isOverlayActive} projectKey={appStateHook.projectKey} />;
    case SectionKey.Settings: return <></>;
    default: return <></>;
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
