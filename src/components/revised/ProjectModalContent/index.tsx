////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { useEffect, useState } from "react";

import { IconLabelTags } from "@/components/revised/IconLabelTags";
import { LinkButton } from "@/components/functional/LinkButton";
import { SpaceBarPX } from "@/components/functional/SpaceBarPX";

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
      <SpaceBarPX height={32} />
      <div className={styles.primaryHeaderContainer}>
        <span className={styles.primaryHeader}>{projectData.title}</span>
      </div>
      <SpaceBarPX height={48} />
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
      <SpaceBarPX height={64} />
      <div className={joinClasses(styles.secondaryHeaderContainer, styles.descriptionHeaderContainer)}>
        <span className={styles.secondaryHeader}>Description</span>
      </div>
      <SpaceBarPX height={8} />
      <p className={styles.paragraph}>{projectData.description}</p>
      <SpaceBarPX height={48} />
      <div className={joinClasses(styles.secondaryHeaderContainer, styles.linksHeaderContainer)}>
        <span className={styles.secondaryHeader}>Repository</span>
      </div>
      <SpaceBarPX height={16} />
      <div className={styles.linksContainer}>
        <LinkButton fontSize={1.5} linkText={projectData.repositoryLinkText} href={projectData.repositoryLinkHref} target="_blank" />
      </div>
      <SpaceBarPX height={64} />
      <div className={styles.tagsSection}>
        <IconLabelTags iconLabelKeys={projectData.iconLabelKeys} />
      </div>
      <SpaceBarPX height={48} />
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
