////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { ProjectKey } from "@/app/data/enums/ProjectKey";
import { ProjectCard } from "../ProjectCard";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type ProjectCardLineProps = {
  projectKeyArray: ProjectKey[];
}

/**
 * @param props
 * @see {@link ProjectCardLineProps}
 * @returns JSX
 */
export function ProjectCardLine({
  projectKeyArray
}: ProjectCardLineProps): JSX.Element {

  // Return Content
  return (
    <div className={styles.component}>
      <ul className={styles.list}>
        {projectKeyArray.map((projectKey) => (
          <li className={styles.item} key={projectKey}>
            <ProjectCard projectKey={projectKey} />
          </li>
        ))}
      </ul>
    </div>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
