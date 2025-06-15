////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { IconLabelData, IconLabelKeys } from "@/data/ICON_LABEL_MAP";
import { toIconLabelData } from "@/utils/maps/fromIconLabelKey";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type IconLabelTagProps = {
  iconLabelKey: IconLabelKeys;
}

/**
 * @param props
 * @see {@link IconLabelTagProps}
 * @returns JSX
 */
export function IconLabelTag({
  iconLabelKey
} : IconLabelTagProps): JSX.Element {

  const { iconSrc, iconAlt, text }: IconLabelData = toIconLabelData(iconLabelKey);

  return (
    <div className={styles.tag}>
      <div className={styles.iconContainer}>
        <img className={styles.icon} src={iconSrc} alt={iconAlt} />
      </div>
      <div className={styles.textContainer}>
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
