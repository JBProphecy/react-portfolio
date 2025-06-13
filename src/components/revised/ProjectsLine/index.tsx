////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { ProjectCard } from "@/components/revised/ProjectCard";

import { ProjectKey } from "@/data/PROJECT_MAP";

import { CustomProperties } from "@/types/css/CustomProperties";

import { toStringPX } from "@/utils/strings/toStringPX";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type ProjectsLineProps = {
  padding: number;
  projectKeys: ProjectKey[];
}

/**
 * @param props - Component Props
 * @see {@link ProjectsLineProps}
 * @returns JSX
 */
export function ProjectsLine({
  padding,
  projectKeys,
}: ProjectsLineProps): JSX.Element {

  // Custom Properties
  const style: CustomProperties = {
    "--padding": toStringPX(padding)
  }

  // Return Content
  return (
    <div className={styles.component} style={style}>
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
