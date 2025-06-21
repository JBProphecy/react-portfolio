////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { IconLabelTags } from "@/common/components/IconLabelStuff/IconLabelTags";

import { LogoKey } from "@/data/keys/LogoKey";
import { toIconLabelDataArray } from "@/data/utils/fromLogoTagMap";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @returns JSX
 */
export const SkillCards = () => {

  const LOGO_KEY_ARRAY: LogoKey[] = [
    LogoKey.HTML,
    LogoKey.CSS, LogoKey.SCSS,
    LogoKey.JavaScript, LogoKey.TypeScript,
    LogoKey.Vite, LogoKey.ReactJS, LogoKey.NodeJS, LogoKey.ExpressJS,
    LogoKey.Java, LogoKey.Maven, LogoKey.Spring,
    LogoKey.SQL,
    LogoKey.Git, LogoKey.GitHub
  ]

  return (
    <div className={styles.component}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>Skill Cards</span>
      </div>
      <IconLabelTags iconLabelDataArray={toIconLabelDataArray(LOGO_KEY_ARRAY)} />
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
