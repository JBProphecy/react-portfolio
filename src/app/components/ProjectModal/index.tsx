////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { joinClasses } from "@/utils/joinClasses";
import { ProjectModalWidget } from "@/app/components/ProjectModalWidget";
import { ProjectKey } from "@/app/data/enums/ProjectKey";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type ProjectModalProps = {
  isOverlayActive: boolean;
  projectKey: ProjectKey | null;
}

/**
 * @param props
 * @see {@link ProjectModalProps}
 * @returns JSX
 */
export function ProjectModal({
  isOverlayActive,
  projectKey
}: ProjectModalProps): JSX.Element {

  // Return Content
  return (
    <div className={joinClasses(styles.projectModal, isOverlayActive ? styles.visible : styles.hidden)}>
      <div className={joinClasses(styles.layer, styles.background)}></div>
      <div className={joinClasses(styles.layer, styles.primary)}>
        <div className={styles.container}>
          <ProjectModalWidget projectKey={projectKey} />
        </div>
      </div>
    </div>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
