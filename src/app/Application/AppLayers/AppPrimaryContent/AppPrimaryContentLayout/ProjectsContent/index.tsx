////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { useEffect, useState } from "react";
import { joinClasses } from "@/utils/joinClasses";
import { ProjectCardLine } from "@/components/ProjectCardStuff/ProjectCardLine";
import { ProjectKey } from "@/app/data/enums/ProjectKey";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param props - Component Props
 * @see {@link ProjectsContentProps}
 * @returns JSX
 */
export function ProjectsContent(): JSX.Element {

  // Visibility
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    requestAnimationFrame(() => {
      setTimeout(() => setIsVisible(true), 0)
    })
  }, []);

  const FEATURED_PROJECTS_PROJECT_CARD_KEY_ARRAY: ProjectKey[] = [
    ProjectKey.MovieWebsite,
    ProjectKey.MusicVisualizer,
    ProjectKey.FormValidation,
    ProjectKey.MyPortfolio
  ]

  // Return Content
  return (
    <div className={joinClasses(styles.component, isVisible ? styles.visible : "")}>
      <div className={styles.space} />
      <section className={styles.section}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>Featured Projects</span>
        </div>
        <ProjectCardLine projectKeyArray={FEATURED_PROJECTS_PROJECT_CARD_KEY_ARRAY} />
      </section>
      <div className={styles.space} />
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
