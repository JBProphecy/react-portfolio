////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { useContext, useEffect, useState } from "react";

import { IconLabelTags } from "@/app/components/IconLabelTagStuff/IconLabelTags";
import { LinkButton } from "@/components/LinkButton";

import { ProjectKey } from "@/data/PROJECT_MAP";

import { joinClasses } from "@/utils/joinClasses";
import { toProjectData } from "@/utils/maps/fromProjectKey";
import { AppContext, AppContextType } from "@/context/AppContext";

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

  // App Context
  const appContext: AppContextType | undefined = useContext(AppContext);
  if (typeof appContext === "undefined") { throw new Error("Missing App Context Provider"); }

  // Project Data
  const projectData = toProjectData(projectKey);

  // Return Content
  return (
    <div className={joinClasses(styles.component, isVisible ? styles.visible : "")}>
      <header className={styles.header}>
        <div className={styles.exitContainer}>
          <svg
            className={styles.icon}
            onClick={appContext.toggleProjectModal}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </header>
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
      <div className={styles.headerSpace} />
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
