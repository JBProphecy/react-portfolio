////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { ProjectCard } from "@/components/revised/ProjectCard";
import { ProjectKey } from "@/data/PROJECT_MAP";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type ProjectsLineProps = {
  projectKeys: ProjectKey[];
}

/**
 * @param props - Component Props
 * @see {@link ProjectsLineProps}
 * @returns JSX
 */
export function ProjectsLine({
  projectKeys
}: ProjectsLineProps): JSX.Element {

  // Return Content
  return (
    <div className={styles.component}>
      <div className={styles.wrapper}>
        {projectKeys.map((key) => (
          <ProjectCard
            key={key}
            projectKey={key}
          />
        ))}
      </div>
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
