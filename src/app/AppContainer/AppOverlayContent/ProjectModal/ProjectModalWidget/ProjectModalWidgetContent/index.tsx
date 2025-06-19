////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { useEffect, useState } from "react";

import { joinClasses } from "@/common/utils/joinClasses";

import { AnchorButton } from "@/common/components/AnchorButton";
import { IconLabelTags } from "@/common/components/IconLabelStuff/IconLabelTags";

import { ProjectKey } from "@/data/keys/ProjectKey";
import { ProjectData } from "@/data/types/ProjectData";
import { toIconLabelDataArray } from "@/data/utils/fromLogoTagMap";
import { toProjectData } from "@/data/utils/fromProjectMap";

import { useAppNavigation } from "@/hooks/useAppNavigation";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type ValidProjectKeyContentProps = {
  projectKey: ProjectKey;
}

function ValidProjectKeyContent({
  projectKey
}: ValidProjectKeyContentProps): JSX.Element {

  // Visibility
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => { requestAnimationFrame(() => { setIsVisible(true); }) }, []);

  // Project Data
  const projectData: ProjectData = toProjectData(projectKey);

  return (
    <main className={joinClasses(styles.main, isVisible ? styles.visible : styles.hidden)}>
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
            src={projectData.videoSrc}
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
        <AnchorButton href={projectData.repositoryLinkHref} target="_blank">{projectData.repositoryLinkText}</AnchorButton>
      </div>
      <div className={styles.spacebar06} />
      <div className={styles.tagsSection}>
        <IconLabelTags iconLabelDataArray={toIconLabelDataArray(projectData.logoKeyArray)} />
      </div>
    </main>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type ProjectModalWidgetContentProps = {
  projectKey: ProjectKey | null;
}

/**
 * @param props
 * @see {@link ProjectModalWidgetContentProps}
 * @returns JSX
 */
export function ProjectModalWidgetContent({
  projectKey
}: ProjectModalWidgetContentProps): JSX.Element {

  const { navigateToProjectsSection} = useAppNavigation();

  // Return Content
  return (
    <div className={styles.projectModalWidgetContent}>
      <header className={styles.header}>
        <div className={styles.exitContainer}>
          <svg
            className={styles.icon}
            onClick={navigateToProjectsSection}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </header>
      {projectKey !== null ? <ValidProjectKeyContent projectKey={projectKey} /> : <></>}
      <div className={styles.headerSpace} />
    </div>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
