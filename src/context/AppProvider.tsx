////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useState } from "react";
import { isSectionKey, SectionKey } from "@/data/SECTION_MAP";
import { AppContext, AppContextType } from "./AppContext";
import { OverlayHook, useOverlay } from "@/hooks/useOverlay";
import { ProjectKeyHook, useProjectKey } from "@/hooks/useProjectKey";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function AppProvider({ children }: { children: React.ReactNode }) {

  // Active Section State
  const [activeSectionKey, setActiveSectionKey] = useState<SectionKey>(() => {
    const searchParams: URLSearchParams = new URLSearchParams(window.location.search);
    const sectionKey: string | null = searchParams.get("sectionKey");
    if (sectionKey && isSectionKey(sectionKey)) { return sectionKey; }
    else { return SectionKey.AboutMe; }
  });

  // Project Modal Overlay Stuff
  const projectModalOverlayTransitionDurationValueMS: number = 300;
  const projectModalOverlayHook: OverlayHook = useOverlay();
  const projectKeyHook: ProjectKeyHook = useProjectKey(projectModalOverlayHook, projectModalOverlayTransitionDurationValueMS);

  // Prepare Value
  const contextValue: AppContextType = {
    activeSectionKey: activeSectionKey,
    setActiveSectionKey: setActiveSectionKey,
    currentProjectKey: projectKeyHook.projectKey,
    setCurrentProjectKey: projectKeyHook.setProjectKey,
    isProjectModalOpen: projectModalOverlayHook.isActive,
    openProjectModal: projectModalOverlayHook.activate,
    closeProjectModal: projectModalOverlayHook.deactivate,
    toggleProjectModal: projectModalOverlayHook.toggle
  }

  // Return Context
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
