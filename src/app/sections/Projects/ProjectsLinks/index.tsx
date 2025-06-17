////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { ProjectKey } from "@/app/data/enums/ProjectKey";
import { NavigateFunction, useNavigate } from "react-router-dom";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param props - Component Props
 * @see {@link ProjectsLinksProps}
 * @returns JSX
 */
export function ProjectsLinks(): JSX.Element {

  // Navigate
  const navigate: NavigateFunction = useNavigate();

  const handleClickProjectLink = (projectKey: ProjectKey) => {
    navigate({
      pathname: `/projects/${projectKey}`,
      search: location.search
    })
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
      <a className={styles.item} onClick={() => { handleClickProjectLink(ProjectKey.FormValidation) }}>
        <span className={styles.label}>User Authentication</span>
      </a>
    </nav>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
