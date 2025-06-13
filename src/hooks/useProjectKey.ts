////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useEffect, useState } from "react";
import { OverlayHook } from "./useOverlay";
import { ProjectKeys } from "@/data/PROJECT_MAP";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type ProjectKeyHook = {
  projectKey: ProjectKeys | null;
  setProjectKey: React.Dispatch<React.SetStateAction<ProjectKeys | null>>;
}

export function useProjectKey(overlayHook: OverlayHook, transitionDurationValueMS: number): ProjectKeyHook {

  // Overlay State
  const [projectKey, setProjectKey] = useState<ProjectKeys | null>(null);

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
