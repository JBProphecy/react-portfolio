////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { CustomProperties } from "@/types/css/CustomProperties";
import { ProjectsLine } from "../../components/revised/ProjectsLine";
import { toStringPX } from "@/utils/strings/toStringPX";
import { SpaceBarPX } from "@/components/functional/SpaceBarPX";
import { ProjectKeys } from "@/data/PROJECT_MAP";
import { useEffect, useState } from "react";
import { joinClasses } from "@/utils/joinClasses";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type ProjectsContentProps = {
  headerHeight: number;
  toggleProjectModalOverlay: () => void;
  setProjectKey: React.Dispatch<React.SetStateAction<ProjectKeys | null>>;
}

/**
 * @param props - Component Props
 * @see {@link ProjectsContentProps}
 * @returns JSX
 */
export function ProjectsContent({
  headerHeight,
  toggleProjectModalOverlay,
  setProjectKey
}: ProjectsContentProps): JSX.Element {

  // Custom Properties
  const style: CustomProperties = {
    "--headerHeight": toStringPX(headerHeight),
  }

  // Visibility
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => { setTimeout(() => setIsVisible(true), 150) }, [])

  const ALL_PROJECTS_LINE_PROJECT_KEYS: ProjectKeys[] = [
    ProjectKeys.MovieWebsite,
    ProjectKeys.MusicVisualizer,
    ProjectKeys.UserAuthentication
  ]

  // Return Content
  return (
    <div className={joinClasses(styles.component, isVisible ? styles.visible : "")} style={style}>
      <SpaceBarPX height={headerHeight} />
      <section className={styles.section}>
        <ProjectsLine
          padding={headerHeight}
          projectKeys={ALL_PROJECTS_LINE_PROJECT_KEYS}
          toggleProjectModalOverlay={toggleProjectModalOverlay}
          setProjectKey={setProjectKey}
        />
      </section>
      <SpaceBarPX height={headerHeight} />
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
