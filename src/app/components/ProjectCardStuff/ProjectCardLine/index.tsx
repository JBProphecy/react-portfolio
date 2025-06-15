////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { ProjectKey } from "@/data/PROJECT_MAP";
import { ProjectCard } from "../ProjectCard";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type ProjectCardLineProps = {
  projectKeyArray: ProjectKey[];
}

/**
 * @param props - Component Props
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
        {projectKeyArray.map((key, index) => (
          <li className={styles.item} key={index}>
            <ProjectCard projectKey={key} />
          </li>
        ))}
      </ul>
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
