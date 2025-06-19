////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { IconLabelTag } from "../IconLabelTag";

import { IconLabelData } from "@/common/types/IconLabelData";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type IconLabelTagsProps = {
  iconLabelDataArray: IconLabelData[]
}

/**
 * @param props
 * @see {@link IconLabelTagsProps}
 * @returns JSX
 */
export function IconLabelTags({
  iconLabelDataArray
}: IconLabelTagsProps): JSX.Element {

  // Return Content
  return (
    <ul className={styles.list}>
      {iconLabelDataArray.map((iconLabelData, index) => (
        <li className={styles.item} key={index}>
          <IconLabelTag iconLabelData={iconLabelData} />
        </li>
      ))}
    </ul>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
