////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { ProjectKeys } from "@/data/PROJECT_MAP";
import { toProjectCardData } from "@/utils/maps/fromProjectKey";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type ProjectCardProps = {
  projectKey: ProjectKeys;
  toggleProjectModalOverlay: () => void;
  setProjectKey: React.Dispatch<React.SetStateAction<ProjectKeys | null>>;
}

export type ProjectCardData = {
  title: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
}

/**
 * @param props - Component Props
 * @see {@link ProjectCardProps}
 * @returns JSX
 */
export function ProjectCard({
  projectKey,
  toggleProjectModalOverlay,
  setProjectKey
}: ProjectCardProps): JSX.Element {

  const projectCardData: ProjectCardData = toProjectCardData(projectKey)
  const { imageSrc, imageAlt, title, summary} = projectCardData

  const handleClickProjectCard = () => {
    setProjectKey(projectKey);
    toggleProjectModalOverlay();
  }

  // Return Content
  return (
    <div className={styles.component}>
      <div className={styles.card} onClick={handleClickProjectCard}>
        <div className={styles.content}>
          <img className={styles.image} src={imageSrc} alt={imageAlt} loading="lazy" />
          <div className={styles.details}>
            <div className={styles.titleContainer}>
              <span className={styles.title}>{title}</span>
            </div>
            <p className={styles.summary}>{summary}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
