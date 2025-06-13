////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { useContext } from "react";

import { ProjectModalContent } from "@/components/revised/ProjectModalContent";

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
      <div className={styles.exitContainer}>
        <svg
          className={styles.icon}
          onClick={appContext.toggleProjectModal}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
      { appContext.currentProjectKey !== null ? <ProjectModalContent projectKey={appContext.currentProjectKey} /> : <></> }
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
