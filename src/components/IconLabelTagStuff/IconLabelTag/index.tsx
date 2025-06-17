////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { IconLabelKey } from "@/app/data/enums/IconLabelKey";
import { IconLabelData } from "@/app/data/types/IconLabelData";
import { toIconLabelData } from "@/app/data/utils/fromIconLabelKey";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type IconLabelTagProps = {
  iconLabelKey: IconLabelKey;
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
