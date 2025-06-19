////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { IconLabelData } from "@/common/types/IconLabelData";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type IconLabelTagProps = {
  iconLabelData: IconLabelData;
}

/**
 * @param props
 * @see {@link IconLabelTagProps}
 * @returns JSX
 */
export function IconLabelTag({
  iconLabelData
} : IconLabelTagProps): JSX.Element {

  const { iconAlt, iconSrc, labelText } = iconLabelData

  return (
    <div className={styles.tag}>
      <div className={styles.iconContainer}>
        <img className={styles.icon} src={iconSrc} alt={iconAlt} />
      </div>
      <div className={styles.textContainer}>
        <span className={styles.text}>{labelText}</span>
      </div>
    </div>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
