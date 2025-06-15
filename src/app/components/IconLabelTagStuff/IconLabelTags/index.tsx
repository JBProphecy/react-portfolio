////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { IconLabelKeys } from "@/data/ICON_LABEL_MAP";
import { IconLabelTag } from "../IconLabelTag";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type IconLabelTagsProps = {
  iconLabelKeys: IconLabelKeys[]
}

/**
 * @param props - Component Props
 * @see {@link IconLabelTagsProps}
 * @returns JSX
 */
export function IconLabelTags({
  iconLabelKeys
}: IconLabelTagsProps): JSX.Element {

  // Return Content
  return (
    <ul className={styles.list}>
      {iconLabelKeys.map((key) => (
        <li className={styles.item} key={key}>
          <IconLabelTag key={key} iconLabelKey={key} />
        </li>
      ))}
    </ul>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
