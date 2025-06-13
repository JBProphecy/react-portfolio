////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { CustomProperties } from "@/types/css/CustomProperties";
import { SpaceBarPX } from "@/components/functional/SpaceBarPX";
import { useEffect, useState } from "react";
import { joinClasses } from "@/utils/joinClasses";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @property key - a multiplier for relative scale
 */
export type HeroSectionProps = {
  fontSizeKey?: number
}

/**
 * @param props - Component Props
 * @see {@link HeroSectionProps}
 * @returns JSX
 */
export function HeroSection({ fontSizeKey = 1 }: HeroSectionProps): JSX.Element {

  // Custom Properties
  const style: CustomProperties = {
    "--fontSizeKey": fontSizeKey
  }

  // Visibility
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => { setTimeout(() => setIsVisible(true), 300) }, [])

  // Return Content
  return (
    <div className={joinClasses(styles.component, isVisible ? styles.visible : "")} style={style}>
      <div className={styles.grid}>
        <section className={styles.introduction}>
          <div className={styles.titleRow}>
            <span className={styles.title}>Jack Piatt</span>
          </div>
          <p className={styles.description}>As an aspiring software developer, I strive to write clean code with a great purpose. Welcome to my portfolio!</p>
          <SpaceBarPX height={72} />
          <p className={styles.tip}>Click the icon in the top-left corner to open the side-menu!</p>
        </section>
        <section className={styles.imageContainer}>
          <img className={styles.image} src="me.jpg" alt="a picture of Jack" />
        </section>
      </div>
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
