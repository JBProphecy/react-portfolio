////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type AboutMeLinksProps = {
  handleClick: (ref: React.RefObject<HTMLElement>) => void
  heroRef: React.RefObject<HTMLElement>,
  myStoryRef: React.RefObject<HTMLElement>,
  businessLinksRef: React.RefObject<HTMLElement>,
  skillCardsRef: React.RefObject<HTMLElement>
}

/**
 * @param props - Component Props
 * @see {@link AboutMeLinksProps}
 * @returns JSX
 */
export function AboutMeLinks({
    handleClick,
    heroRef,
    myStoryRef,
    businessLinksRef,
    skillCardsRef
}: AboutMeLinksProps): JSX.Element {

  // Return Content
  return (
    <nav className={styles.list}>
      <a className={styles.item} onClick={() => { handleClick(heroRef) }}>
        <span className={styles.label}>Hero</span>
      </a>
      <a className={styles.item} onClick={() => { handleClick(myStoryRef) }}>
        <span className={styles.label}>My Story</span>
      </a>
      <a className={styles.item} onClick={() => { handleClick(businessLinksRef) }}>
        <span className={styles.label}>Business Links</span>
      </a>
      <a className={styles.item} onClick={() => { handleClick(skillCardsRef) }}>
        <span className={styles.label}>Skill Cards</span>
      </a>
    </nav>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
