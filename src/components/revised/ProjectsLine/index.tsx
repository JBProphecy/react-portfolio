////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { toStringPX } from "@/utils/strings/toStringPX";
import { CustomProperties } from "@/types/css/CustomProperties";
import { ProjectCard } from "@/components/revised/ProjectCard";
import { ProjectKeys } from "@/data/PROJECT_MAP";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type ProjectsLineProps = {
  padding: number;
  projectKeys: ProjectKeys[];
  toggleProjectModalOverlay: () => void;
  setProjectKey: React.Dispatch<React.SetStateAction<ProjectKeys | null>>;
}

/**
 * @param props - Component Props
 * @see {@link ProjectsLineProps}
 * @returns JSX
 */
export function ProjectsLine({
  padding,
  projectKeys,
  toggleProjectModalOverlay,
  setProjectKey
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
            toggleProjectModalOverlay={toggleProjectModalOverlay}
            setProjectKey={setProjectKey}
          />
        ))}
      </div>
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
