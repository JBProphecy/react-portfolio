////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useLocation } from "react-router-dom";

import { AppSectionKey } from "../data/keys/AppSectionKey";
import { isProjectKeyCheckUnknown, ProjectKey } from "../data/keys/ProjectKey";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type UnknownSectionState = {
  appSectionKey: null;
}

type AboutMeSectionState = {
  appSectionKey: AppSectionKey.AboutMe;
}

type ProjectsSectionState = {
  appSectionKey: AppSectionKey.Projects;
  projectKey: ProjectKey | null;
}

type SettingsSectionState = {
  appSectionKey: AppSectionKey.Settings;
}

export type AppStateHook =
| UnknownSectionState
| AboutMeSectionState
| ProjectsSectionState
| SettingsSectionState;

export function useAppState(): AppStateHook {

  const location = useLocation();
  const [_, section, key]: string[] = location.pathname.split("/");

  switch (section) {
    case AppSectionKey.AboutMe:
      return {
        appSectionKey: AppSectionKey.AboutMe,
      }
    case AppSectionKey.Projects:
      return {
        appSectionKey: AppSectionKey.Projects,
        projectKey: isProjectKeyCheckUnknown(key) ? key : null
      }
    case AppSectionKey.Settings:
      return {
        appSectionKey: AppSectionKey.Settings,
      }
    default:
      return {
        appSectionKey: null,
      }
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
