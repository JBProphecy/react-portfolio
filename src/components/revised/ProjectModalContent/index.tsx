////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { joinClasses } from "@/utils/joinClasses";

import { LinkButton } from "@/components/functional/LinkButton";
import { SpaceBarPX } from "@/components/functional/SpaceBarPX";

import { IconLabelTags } from "@/components/revised/IconLabelTags";
import { IconLabelKeys } from "@/data/ICON_LABEL_MAP";
import { useEffect, useState } from "react";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type ProjectModalContentProps = {
  title: string;
  videoSrc: string;
  description: string;
  repositoryLinkText: string;
  repositoryLinkHref: string;
  iconLabelKeys: IconLabelKeys[];
}

/**
 * @param props - Component Props
 * @see {@link ProjectModalContentProps}
 * @returns JSX
 */
export function ProjectModalContent({
  title,
  videoSrc,
  description,
  repositoryLinkText,
  repositoryLinkHref,
  iconLabelKeys
}: ProjectModalContentProps): JSX.Element {

  // Visibility
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => { setTimeout(() => setIsVisible(true), 150) }, [])

  // Return Content
  return (
    <div className={joinClasses(styles.component, isVisible ? styles.visible : "")}>
      <SpaceBarPX height={32} />
      <div className={styles.primaryHeaderContainer}>
        <span className={styles.primaryHeader}>{title}</span>
      </div>
      <SpaceBarPX height={48} />
      <div className={styles.videoContainer}>
        <div className={styles.videoWrapper}>
          <video autoPlay loop controls>
            <source src={videoSrc} />
          </video>
        </div>
      </div>
      <SpaceBarPX height={64} />
      <div className={joinClasses(styles.secondaryHeaderContainer, styles.descriptionHeaderContainer)}>
        <span className={styles.secondaryHeader}>Description</span>
      </div>
      <SpaceBarPX height={8} />
      <p className={styles.paragraph}>{description}</p>
      <SpaceBarPX height={48} />
      <div className={joinClasses(styles.secondaryHeaderContainer, styles.linksHeaderContainer)}>
        <span className={styles.secondaryHeader}>Repository</span>
      </div>
      <SpaceBarPX height={16} />
      <div className={styles.linksContainer}>
        <LinkButton fontSize={1.5} linkText={repositoryLinkText} href={repositoryLinkHref} target="_blank" />
      </div>
      <SpaceBarPX height={64} />
      <div className={styles.tagsSection}>
        <IconLabelTags iconLabelKeys={iconLabelKeys} />
      </div>
      <SpaceBarPX height={48} />
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
