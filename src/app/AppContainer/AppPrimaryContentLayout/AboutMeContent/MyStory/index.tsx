////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { forwardRef } from "react";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type MyStoryProps = {}

/**
 * @returns JSX
 */
export const MyStory = forwardRef<HTMLDivElement>((_, ref) => {

  // Return Content
  return (
    <div ref={ref} className={styles.component}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>About Me</span>
      </div>
      <p className={styles.paragraph}>Hello, my name is Jack. I am a graduate from the University of North Carolina at Wilmington with a bachelor's degree in computer science. I have a strong foundation of skills and practical experience working on projects. My goal is to become an amazing full stack developer, so I continue to learn and improve my skills by coding every day. I want to make software that brings real value to the people who use it and I want to work with a team who shares that vision. I encourage you to reach out to me; I could be a valuable member the team and yield great results towards our work.</p>
    </div>
  )
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
