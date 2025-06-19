////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function HeroSection(): JSX.Element {
  return (
    <div className={styles.component}>
      <section className={styles.left}>
        <div className={styles.nameRow}>
          <span className={styles.name}>Jack Piatt</span>
        </div>
        <div className={styles.spacebar01} />
        <p className={styles.motto}>As an aspiring software developoer, I strive to write clean code for a great purpose. Welcome to my portfolio!</p>
        <div className={styles.spacebar02} />
        <p className={styles.tip}>Click the icon in the top-left corner to open the side-menu!</p>
      </section>
      <section className={styles.right}>
        <img className={styles.image} alt="a picture of Jack" src="/me.jpg" />
      </section>
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
