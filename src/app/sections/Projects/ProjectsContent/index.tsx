////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { useEffect, useState } from "react";
import { joinClasses } from "@/utils/joinClasses";
import { ProjectCardLine } from "@/app/components/ProjectCardStuff/ProjectCardLine";
import { ProjectKey } from "@/data/PROJECT_MAP";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param props - Component Props
 * @see {@link ProjectsContentProps}
 * @returns JSX
 */
export function ProjectsContent(): JSX.Element {

  // Visibility
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => { setTimeout(() => setIsVisible(true), 0) }, [])

  const ALL_PROJECTS_PROJECT_CARD_KEY_ARRAY: ProjectKey[] = [
    ProjectKey.MovieWebsite,
    ProjectKey.MusicVisualizer,
    ProjectKey.UserAuthentication
  ]

  // Return Content
  return (
    <div className={joinClasses(styles.component, isVisible ? styles.visible : "")}>
      <div className={styles.space} />
      <section className={styles.section}>
        <ProjectCardLine projectKeyArray={ALL_PROJECTS_PROJECT_CARD_KEY_ARRAY} />
      </section>
      <div className={styles.space} />
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
