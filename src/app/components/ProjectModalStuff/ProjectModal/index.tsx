////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { useContext } from "react";

import { ProjectModalContent } from "@/app/components/ProjectModalStuff/ProjectModalContent";

import { AppContext, AppContextType } from "@/context/AppContext";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param props - Component Props
 * @see {@link ProjectModalProps}
 * @returns JSX
 */
export function ProjectModal(): JSX.Element {

  // App Context
  const appContext: AppContextType | undefined = useContext(AppContext);
  if (typeof appContext === "undefined") { throw new Error("Missing App Context Provider"); }

  // Return Content
  return (
    <div className={styles.component}>
      { appContext.currentProjectKey !== null ? <ProjectModalContent projectKey={appContext.currentProjectKey} /> : <></> }
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
