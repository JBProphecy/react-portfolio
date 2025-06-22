////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { useEffect, useState } from "react";

import { joinClasses } from "@/common/utils/joinClasses";

import { ProjectCardLine } from "@/__archives/components/ProjectCardStuff/ProjectCardLine";
import { DEVELOPING_PROJECTS_PROJECT_CARD_KEY_ARRAY, FEATURED_PROJECTS_PROJECT_CARD_KEY_ARRAY } from "@/data/arrays/ProjectKeyArray";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param props - Component Props
 * @see {@link ProjectsContentProps}
 * @returns JSX
 */
export function ProjectsContent(): JSX.Element {

  // Visibility
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => { requestAnimationFrame(() => { setIsVisible(true); }) }, []);

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
      <section className={styles.section}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>Developing Projects</span>
        </div>
        <ProjectCardLine projectKeyArray={DEVELOPING_PROJECTS_PROJECT_CARD_KEY_ARRAY} />
      </section>
      <div className={styles.space} />
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
