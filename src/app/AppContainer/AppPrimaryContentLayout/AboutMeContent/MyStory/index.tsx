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
        <span className={styles.title}>My Story</span>
      </div>
      <p className={styles.paragraph}>I'll start from the beginning; I was born on... too far. All jokes aside, I didn't choose computer science until I was a sophomore in college. Growing up, I wanted to be a veterinarian, but once I realized how long I would be in school for, I changed my mind. Eventually, I decided to pursue a degree in marine biology, which is one of the main reasons why I went to UNCW. As it turns out, I graduated in December of 2024 with a bachelor's degree in computer science.</p>
      <p className={styles.paragraph}>The idea of working out on the ocean was appealing, but the more I thought about it, the less potential I saw. I wanted to do something more creative and I wanted it to be something that I could get really good at. With that in mind, I switched my major from marine biology to computer science.</p>
      <p className={styles.paragraph}>In relation to programming and creating software... I say if you can think of it, you can make it. In addition, most of the tools you can use to facilitate that process are free, but what makes that process difficult is choosing between them, which requires a vast understanding of the selection pool in order to make the best decision. There's a lot that goes into it, so I've put a lot into it... I want to become a master of my craft.</p>
      <p className={styles.paragraph}>I'm eager to start my career. My goal is to learn as much as possible and become an amazing full-stack developer. This line of work requires a lot of time, effort, and collaboration. It's not feasible for me to try to do everything on my own, so I would love to work with a team who shares my vision of what we can accomplish.</p>
      <p className={styles.paragraph}>Feel free to explore the rest of my portfolio, and if you're interested in working with me, feel free to reach out.</p>
    </div>
  )
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
