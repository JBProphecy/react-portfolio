////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { ProjectKeys } from "@/data/PROJECT_MAP";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type ProjectsLinksProps = {
  toggleProjectModalOverlay: () => void;
  setProjectKey: React.Dispatch<React.SetStateAction<ProjectKeys | null>>;
}

/**
 * @param props - Component Props
 * @see {@link ProjectsLinksProps}
 * @returns JSX
 */
export function ProjectsLinks({
    toggleProjectModalOverlay,
    setProjectKey
}: ProjectsLinksProps): JSX.Element {

  const handleClickHeaderLink = (projectKey: ProjectKeys) => {
    setProjectKey(projectKey);
    toggleProjectModalOverlay();
  }

  // Return Content
  return (
    <nav className={styles.list}>
      <a className={styles.item} onClick={() => { handleClickHeaderLink(ProjectKeys.MovieWebsite) }}>
        <span className={styles.label}>Movie Website</span>
      </a>
      <a className={styles.item} onClick={() => { handleClickHeaderLink(ProjectKeys.MusicVisualizer) }}>
        <span className={styles.label}>Music Visualizer</span>
      </a>
      <a className={styles.item} onClick={() => { handleClickHeaderLink(ProjectKeys.UserAuthentication) }}>
        <span className={styles.label}>User Authentication</span>
      </a>
    </nav>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
