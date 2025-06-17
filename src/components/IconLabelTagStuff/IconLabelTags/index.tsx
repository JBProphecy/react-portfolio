////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { IconLabelKey } from "@/app/data/enums/IconLabelKey";
import { IconLabelTag } from "../IconLabelTag";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type IconLabelTagsProps = {
  iconLabelKeyArray: IconLabelKey[]
}

/**
 * @param props
 * @see {@link IconLabelTagsProps}
 * @returns JSX
 */
export function IconLabelTags({
  iconLabelKeyArray
}: IconLabelTagsProps): JSX.Element {

  // Return Content
  return (
    <ul className={styles.list}>
      {iconLabelKeyArray.map((key) => (
        <li className={styles.item} key={key}>
          <IconLabelTag key={key} iconLabelKey={key} />
        </li>
      ))}
    </ul>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
