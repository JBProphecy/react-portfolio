////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { useContext, useEffect, useState } from "react";
import { AppContext, AppContextType } from "@/context/AppContext";
import { ProjectsLine } from "@/components/revised/ProjectsLine";
import { ProjectKey } from "@/data/PROJECT_MAP";
import { joinClasses } from "@/utils/joinClasses";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param props - Component Props
 * @see {@link ProjectsContentProps}
 * @returns JSX
 */
export function ProjectsContent(): JSX.Element {

  // App Context
  const appContext: AppContextType | undefined = useContext(AppContext);
  if (typeof appContext === "undefined") { throw new Error("Missing App Context Provider"); }

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
    <div className={joinClasses(styles.component, isVisible ? styles.visible : "")}>
      <div className={styles.space} />
      <section className={styles.section}>
        <ProjectsLine projectKeys={ALL_PROJECTS_LINE_PROJECT_KEYS} />
      </section>
      <div className={styles.space} />
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
