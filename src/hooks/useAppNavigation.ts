////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useLocation, useNavigate } from "react-router-dom";

import { RouteKey } from "@/data/keys/RouteKey";
import { ProjectKey } from "@/data/keys/ProjectKey";
import { AppSectionKey } from "@/data/keys/AppSectionKey";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type AppNavigationHook = {
  navigateToAboutMeSection: () => void;
  navigateToProjectsSection: () => void;
  navigateToSettingsSection: () => void;
  navigateToAppSection: (appSectionKey: AppSectionKey) => void;
  navigateToProject: (projectKey: ProjectKey) => void;
}

export function useAppNavigation(): AppNavigationHook {

  const location = useLocation();
  const navigate = useNavigate();

  const navigateToAboutMeSection = () => {
    navigate({ pathname: RouteKey.AboutMe, search: location.search })
  }

  const navigateToProjectsSection = () => {
    navigate({ pathname: RouteKey.Projects, search: location.search })
  }

  const navigateToSettingsSection = () => {
    navigate({ pathname: RouteKey.Settings, search: location.search })
  }

  const navigateToProject = (projectKey: ProjectKey) => {
    navigate({ pathname: `${RouteKey.Projects}/${projectKey}`, search: location.search })
  }

  const navigateToAppSection = (appSectionKey: AppSectionKey) => {
    switch (appSectionKey) {
      case AppSectionKey.AboutMe:
        navigateToAboutMeSection();
        break;
      case AppSectionKey.Projects:
        navigateToProjectsSection();
        break;
      case AppSectionKey.Settings:
        navigateToSettingsSection();
        break;
      default:
        throw new Error("Invalid Value for App Section Key in App Navigation Hook");
    }
  }

  return {
    navigateToAboutMeSection,
    navigateToProjectsSection,
    navigateToProject,
    navigateToSettingsSection,
    navigateToAppSection
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
