////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { joinClasses } from "@/utils/joinClasses";
import { CustomProperties } from "@/types/css/CustomProperties";
import { SpaceBarPX } from "@/components/functional/SpaceBarPX";
import { HeroSection } from "@/app/AboutMeContent/sections/HeroSection";
import { toStringPX } from "@/utils/strings/toStringPX";
import { MyStory } from "@/app/AboutMeContent/sections/MyStory";
import { BusinessLinks } from "./sections/BusinessLinks";
import { SkillCards } from "./sections/SkillCards";
import { useEffect, useState } from "react";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type AboutMeContentProps = {
  headerHeight: number
  heroHeight: number
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
  headerHeight,
  heroHeight,
  heroRef,
  myStoryRef,
  businessLinksRef,
  skillCardsRef
}: AboutMeContentProps): JSX.Element {

  // Custom Properties
  const style: CustomProperties = {
    "--headerHeight": toStringPX(headerHeight),
    "--heroHeight": toStringPX(heroHeight)
  }

  // Visibility
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => { setTimeout(() => setIsVisible(true), 300) }, [])

  // Return Content
  return (
    <div className={styles.component} style={style}>
      <section ref={heroRef} className={styles.hero}>
        <div className={joinClasses(styles.layer, styles.background)}>
          <video className={isVisible ? styles.visible : ""} autoPlay loop muted>
            <source src="smoke-saber.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={joinClasses(styles.layer, styles.content)}>
          <HeroSection />
        </div>
      </section>
      <SpaceBarPX height={2 * headerHeight} />
      <section ref={myStoryRef} className={styles.section}>
        <div className={styles.wrapper}>
          <MyStory />
        </div>
      </section>
      <SpaceBarPX height={2 * headerHeight} />
      <section ref={businessLinksRef} className={styles.section}>
        <div className={styles.wrapper}>
          <BusinessLinks />
        </div>
      </section>
      <SpaceBarPX height={2 * headerHeight} />
      <section ref={skillCardsRef} className={styles.section}>
        <div className={styles.wrapper}>
          <SkillCards />
        </div>
      </section>
      <SpaceBarPX height={2 * headerHeight} />
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
