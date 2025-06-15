////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type ContentCardProps = {
  handleClick: () => void;
  imgAlt: string;
  imgSrc: string;
  title: string;
  description: string;
}

/**
 * @param props - Component Props
 * @see {@link ContentCardProps}
 * @returns JSX
 */
export function ContentCard({
  handleClick, imgAlt, imgSrc, title, description
}: ContentCardProps): JSX.Element {

  return (
    <div className={styles.component}>
      <div className={styles.card} onClick={handleClick}>
        <div className={styles.content}>
          <img className={styles.image} src={imgSrc} alt={imgAlt} loading="lazy" />
          <div className={styles.details}>
            <div className={styles.titleContainer}>
              <span className={styles.title}>{title}</span>
            </div>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
