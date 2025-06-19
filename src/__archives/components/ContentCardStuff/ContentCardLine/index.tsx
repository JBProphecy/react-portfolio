////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { ContentCard, ContentCardProps } from "@/__archives/components/ContentCardStuff/ContentCard";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// NOT BEING USED --> SERVING AS A TEMPLATE IN A WAY

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type ContentCardLineProps = {
  contentCardPropsArray: ContentCardProps[]
}

/**
 * @param props
 * @see {@link ContentCardLineProps}
 * @returns JSX
 */
export function ContentCardLine({
  contentCardPropsArray
}: ContentCardLineProps): JSX.Element {

  // Return Content
  return (
    <div className={styles.component}>
      <ul className={styles.list}>
        {contentCardPropsArray.map((props, index) => (
          <li className={styles.item} key={index}>
            <ContentCard
              handleClick={props.handleClick}
              imgAlt={props.imgAlt}
              imgSrc={props.imgSrc}
              title={props.title}
              description={props.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
