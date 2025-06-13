////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { ProjectKeys } from "@/data/PROJECT_MAP";

import { ProjectModalContent } from "@/components/revised/ProjectModalContent";
import { toProjectModalContentProps } from "@/utils/maps/fromProjectKey";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type ProjectModalProps = {
  toggleProjectModalOverlay: () => void;
  projectKey: ProjectKeys | null;
}

/**
 * @param props - Component Props
 * @see {@link ProjectModalProps}
 * @returns JSX
 */
export function ProjectModal({ toggleProjectModalOverlay, projectKey }: ProjectModalProps): JSX.Element {

  // Return Content
  return (
    <div className={styles.component}>
      <div className={styles.exitContainer}>
        <svg
          className={styles.icon}
          onClick={toggleProjectModalOverlay}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
      { projectKey !== null ? <ProjectModalContent projectKey={projectKey} /> : <></> }
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
