////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { useEffect, useState } from "react";

import { IconLabelTags } from "@/app/components/IconLabelTagStuff/IconLabelTags";
import { LinkButton } from "@/components/LinkButton";

import { ProjectKey } from "@/data/PROJECT_MAP";

import { joinClasses } from "@/utils/joinClasses";
import { toProjectData } from "@/utils/maps/fromProjectKey";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type ProjectModalContentProps = {
  projectKey: ProjectKey;
}
/**
 * @param props - Component Props
 * @see {@link ProjectModalContentProps}
 * @returns JSX
 */
export function ProjectModalContent({ projectKey }: ProjectModalContentProps): JSX.Element {

  // Visibility
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => { setTimeout(() => setIsVisible(true), 150) }, []);

  // Project Data
  const projectData = toProjectData(projectKey);

  // Return Content
  return (
    <div className={joinClasses(styles.component, isVisible ? styles.visible : "")}>
      <div className={styles.primaryHeaderContainer}>
        <span className={styles.primaryHeader}>{projectData.title}</span>
      </div>
      <div className={styles.spacebar01} />
      <div className={styles.videoContainer}>
        <div className={styles.videoWrapper}>
          {/* <video autoPlay loop controls>
            <source src={projectData.videoSrc} />
          </video> */}
          <iframe
            src={projectData.iframeSrc}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          />
        </div>
      </div>
      <div className={styles.spacebar02} />
      <div className={joinClasses(styles.secondaryHeaderContainer, styles.descriptionHeaderContainer)}>
        <span className={styles.secondaryHeader}>Description</span>
      </div>
      <div className={styles.spacebar03} />
      <p className={styles.paragraph}>{projectData.description}</p>
      <div className={styles.spacebar04} />
      <div className={joinClasses(styles.secondaryHeaderContainer, styles.linksHeaderContainer)}>
        <span className={styles.secondaryHeader}>Repository</span>
      </div>
      <div className={styles.spacebar05} />
      <div className={styles.linksContainer}>
        <LinkButton
          fontSize="var(--paragraph-font-size)" fontColor="var(--paragraph-font-color)"
          linkText={projectData.repositoryLinkText} href={projectData.repositoryLinkHref} target="_blank" />
      </div>
      <div className={styles.spacebar06} />
      <div className={styles.tagsSection}>
        <IconLabelTags iconLabelKeys={projectData.iconLabelKeys} />
      </div>
      <div className={styles.spacebar07} />
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
