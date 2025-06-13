////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { useContext } from "react";

import { AppContext, AppContextType } from "@/context/AppContext";

import { ProjectKey } from "@/data/PROJECT_MAP";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param props - Component Props
 * @see {@link ProjectsLinksProps}
 * @returns JSX
 */
export function ProjectsLinks(): JSX.Element {

  // App Context
  const appContext: AppContextType | undefined = useContext(AppContext);
  if (typeof appContext === "undefined") { throw new Error("Missing App Context Provider"); }

  const handleClickProjectLink = (projectKey: ProjectKey) => {
    appContext.setCurrentProjectKey(projectKey);
    appContext.toggleProjectModal();
  }

  // Return Content
  return (
    <nav className={styles.list}>
      <a className={styles.item} onClick={() => { handleClickProjectLink(ProjectKey.MovieWebsite) }}>
        <span className={styles.label}>Movie Website</span>
      </a>
      <a className={styles.item} onClick={() => { handleClickProjectLink(ProjectKey.MusicVisualizer) }}>
        <span className={styles.label}>Music Visualizer</span>
      </a>
      <a className={styles.item} onClick={() => { handleClickProjectLink(ProjectKey.UserAuthentication) }}>
        <span className={styles.label}>User Authentication</span>
      </a>
    </nav>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
