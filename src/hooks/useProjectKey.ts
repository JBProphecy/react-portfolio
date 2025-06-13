////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useEffect, useState } from "react";
import { OverlayHook } from "./useOverlay";
import { ProjectKey } from "@/data/PROJECT_MAP";
import { isProjectKey } from "@/utils/isProjectKey";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type ProjectKeyHook = {
  projectKey: ProjectKey | null;
  setProjectKey: React.Dispatch<React.SetStateAction<ProjectKey | null>>;
}

export function useProjectKey(overlayHook: OverlayHook, transitionDurationValueMS: number): ProjectKeyHook {

  // Overlay State
  const [projectKey, setProjectKey] = useState<ProjectKey | null>(() => {
    const searchParams: URLSearchParams = new URLSearchParams(window.location.search);
    const projectKey: string | null = searchParams.get("projectKey");
    if (projectKey && isProjectKey(projectKey)) { return projectKey; }
    else { return null; }
  });

  // Overlay Effects
  useEffect(() => {

    let isListening: boolean = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") { overlayHook.deactivate(); } }
    const clearContent = () => { setProjectKey(null); }

    if (overlayHook.isActive) {
      window.addEventListener("keydown", handleKeyDown);
      isListening = true;
    }
    else {
      timer = setTimeout(clearContent, transitionDurationValueMS) // matches CSS transition duration
    }

    return () => {
      if (isListening) { window.removeEventListener("keydown", handleKeyDown); }
      if (timer) { clearTimeout(timer); }
    }

  }, [overlayHook.isActive]);

  return { projectKey, setProjectKey }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
