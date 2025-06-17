////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { BusinessLinks } from "./BusinessLinks";
import { HeroSection } from "./HeroSection";
import { MyStory } from "./MyStory";
import { SkillCards } from "./SkillCards";

import { useEffect, useState } from "react";

import { joinClasses } from "@/utils/joinClasses";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type AboutMeContentProps = {
  heroRef: React.RefObject<HTMLElement>,
  myStoryRef: React.RefObject<HTMLElement>,
  businessLinksRef: React.RefObject<HTMLElement>,
  skillCardsRef: React.RefObject<HTMLElement>
}

/**
 * @param props - Component Props
 * @see {@link AboutMeContentProps}
 * @returns JSX
 */
export function AboutMeContent({
  heroRef,
  myStoryRef,
  businessLinksRef,
  skillCardsRef
}: AboutMeContentProps): JSX.Element {

  // Visibility
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    requestAnimationFrame(() => {
      setTimeout(() => setIsVisible(true), 0)
    })
  }, []);

  // Return Content
  return (
    <div className={joinClasses(styles.wrapper, isVisible ? styles.visible : "")}>
      <section ref={heroRef} className={styles.hero}>
        <div className={joinClasses(styles.layer, styles.background)}>
          <video autoPlay loop muted>
            <source src="smoke-saber.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={joinClasses(styles.layer, styles.content)}>
          <HeroSection />
        </div>
      </section>
      <div className={styles.headerSpace} />
      <div className={styles.space} />
      <section ref={myStoryRef} className={styles.section}>
        <MyStory />
      </section>
      <div className={styles.space} />
      <section ref={businessLinksRef} className={styles.section}>
        <BusinessLinks />
      </section>
      <div className={styles.space} />
      <section ref={skillCardsRef} className={styles.section}>
        <SkillCards />
      </section>
      <div className={styles.space} />
      <div className={styles.headerSpace} />
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
