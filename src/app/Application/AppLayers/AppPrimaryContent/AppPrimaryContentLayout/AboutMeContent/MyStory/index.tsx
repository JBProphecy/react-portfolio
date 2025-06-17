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
      <p className={styles.paragraph}>I'll start from the beginning. I was born on... sorry, that was too far. All jokes aside, I didn't choose computer science until I was a sophomore in college. I always planned on going to college, but growing up, I wanted to be a veterinarian. That was mostly because I like dogs, but I grew up and once I realized how long I would be in school for, I changed my mind. Eventually, I decided to pursue a degree in marine biology, which is one of the main reasons why I went to UNCW. As it turns out, I graduated in December of 2024 with a bachelor's degree in computer science.</p>
      <p className={styles.paragraph}>The idea of working out on the ocean was appealing. I've always loved nature and I still think I would be awesome to do something like that, but the more I thought about it, the less potential I saw. Even now, I don't know what I would actually do as a marine biologist and I don't see it as something you can work hard to become the best at. What does it mean to be the best marine biologist? Anyways, I could be wrong, but after that revelation of mine, I knew I needed to pursue something else. I wanted to do something more creative and I wanted it to be something that I could become really good at. With that in mind, I switched my major from marine biology to computer science. Looking back and knowing where I am now, I have no regrets; I believe it was a great decision.</p>
      <p className={styles.paragraph}>The way I see it, it's possible to make anything you can envision on a screen and most of the tools you can use to do so are free. The hard part is becoming familiar with each of the seemingly infinite number of tools out there and then being able to use them in harmony while staying organized. There's a lot that goes into it, but that's where I get to work hard and then see the results of my hard work when I pick up a new skill and increase my capabilities. That's what I strive to do; I want to become a master of my craft.</p>
      <p className={styles.paragraph}>Now that I'm out of school, I'm eager to start my career. My goal is to learn as much as possible and become an amazing full-stack developer. However, if I had to choose one, I would choose the backend over the frontend. I'll always strive to be the best I can be, but that's not what I care about the most. This line of work requires a lot of time, effort, and collaboration. It's not feasible for me to try to do everything on my own. I would love to work with a team who shares my vision of what's possible; that would be the best outcome and that's what I care about the most.</p>
      <p className={styles.paragraph}>Besides the fact that I'm currently in the market for a job, that just about sums up where I am and where I'm coming from. Feel free to explore the rest of my website and don't hesitate to contact me if you're interested in working with me; I look forward to it!</p>
    </div>
  )
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
