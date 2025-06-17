////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useLocation } from "react-router-dom";
import { SectionKey } from "@/app/data/enums/SectionKey";
import { ProjectKey } from "@/app/data/enums/ProjectKey";
import { AppState } from "../types/AppState";
import { isUnknownValueProjectKey } from "../data/utils/isProjectKey";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getProjectKeyFromURL(value: string | undefined): ProjectKey | null {
  return isUnknownValueProjectKey(value) ? value : null;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type AppStateHook = AppState;

export function useAppState(): AppStateHook {

  const location = useLocation();
  const [_, section, key]: string[] = location.pathname.split("/");

  switch (section) {
    case SectionKey.AboutMe:
      return {
        sectionKey: SectionKey.AboutMe,
      }
    case SectionKey.Projects:
      return {
        sectionKey: SectionKey.Projects,
        projectKey: getProjectKeyFromURL(key)
      }
    case SectionKey.Settings:
      return {
        sectionKey: SectionKey.Settings,
      }
    default:
      return {
        sectionKey: null,
      }
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
