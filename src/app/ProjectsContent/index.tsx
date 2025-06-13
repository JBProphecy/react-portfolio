////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { useContext, useEffect, useState } from "react";

import { ProjectsLine } from "@/components/revised/ProjectsLine";
import { SpaceBarPX } from "@/components/functional/SpaceBarPX";

import { AppContext, AppContextType } from "@/context/AppContext";

import { ProjectKey } from "@/data/PROJECT_MAP";

import { CustomProperties } from "@/types/css/CustomProperties";

import { joinClasses } from "@/utils/joinClasses";
import { toStringPX } from "@/utils/strings/toStringPX";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type ProjectsContentProps = {
  headerHeight: number;
}

/**
 * @param props - Component Props
 * @see {@link ProjectsContentProps}
 * @returns JSX
 */
export function ProjectsContent({
  headerHeight
}: ProjectsContentProps): JSX.Element {

  // App Context
  const appContext: AppContextType | undefined = useContext(AppContext);
  if (typeof appContext === "undefined") { throw new Error("Missing App Context Provider"); }

  // Custom Properties
  const style: CustomProperties = {
    "--headerHeight": toStringPX(headerHeight),
  }

  // Visibility
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => { setTimeout(() => setIsVisible(true), 0) }, [])

  const ALL_PROJECTS_LINE_PROJECT_KEYS: ProjectKey[] = [
    ProjectKey.MovieWebsite,
    ProjectKey.MusicVisualizer,
    ProjectKey.UserAuthentication
  ]

  // Return Content
  return (
    <div className={joinClasses(styles.component, isVisible ? styles.visible : "")} style={style}>
      <SpaceBarPX height={headerHeight} />
      <section className={styles.section}>
        <ProjectsLine
          padding={headerHeight}
          projectKeys={ALL_PROJECTS_LINE_PROJECT_KEYS}
        />
      </section>
      <SpaceBarPX height={headerHeight} />
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
