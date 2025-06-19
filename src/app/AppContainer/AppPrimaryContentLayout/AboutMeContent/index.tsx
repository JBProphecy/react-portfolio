////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { BusinessLinks } from "./BusinessLinks";
import { HeroSection } from "./HeroSection";
import { MyStory } from "./MyStory";
import { SkillCards } from "./SkillCards";

import { useEffect, useState } from "react";

import { joinClasses } from "@/common/utils/joinClasses";
import { AboutMeSectionKey } from "@/data/keys/AboutMeSectionKey";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type AboutMeContentProps = {
  aboutMeSectionRefMap: Record<AboutMeSectionKey, React.RefObject<HTMLElement>>;
}

/**
 * @param props - Component Props
 * @see {@link AboutMeContentProps}
 * @returns JSX
 */
export function AboutMeContent({
  aboutMeSectionRefMap
}: AboutMeContentProps): JSX.Element {

  // Visibility
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => { requestAnimationFrame(() => { setIsVisible(true); }) }, []);

  // Return Content
  return (
    <div className={joinClasses(styles.wrapper, isVisible ? styles.visible : "")}>
      <section ref={aboutMeSectionRefMap[AboutMeSectionKey.Home]} className={styles.hero}>
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
      <section ref={aboutMeSectionRefMap[AboutMeSectionKey.MyStory]} className={styles.section}>
        <MyStory />
      </section>
      <div className={styles.space} />
      <section ref={aboutMeSectionRefMap[AboutMeSectionKey.BusinessLinks]} className={styles.section}>
        <BusinessLinks />
      </section>
      <div className={styles.space} />
      <section ref={aboutMeSectionRefMap[AboutMeSectionKey.SkillCards]} className={styles.section}>
        <SkillCards />
      </section>
      <div className={styles.space} />
      <div className={styles.headerSpace} />
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
