////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { HERO_DATA, HeroData } from "@/app/data/HERO_DATA";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type HeroSectionProps = {}

/**
 * @param props
 * @see {@link HeroSectionProps}
 * @returns JSX
 */
export function HeroSection({}: HeroSectionProps): JSX.Element {

  // Get Data
  const heroData: HeroData = HERO_DATA;

  // Component Content
  return (
    <div className={styles.component}>
      <section className={styles.left}>
        <div className={styles.nameRow}>
          <span className={styles.name}>{heroData.name}</span>
        </div>
        <div className={styles.spacebar01} />
        <p className={styles.motto}>{heroData.motto}</p>
        <div className={styles.spacebar02} />
        <p className={styles.tip}>{heroData.tip}</p>
      </section>
      <section className={styles.right}>
        <img className={styles.image} alt={heroData.imgAlt} src={heroData.imgSrc} />
      </section>
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
