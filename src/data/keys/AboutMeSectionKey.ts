////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export enum AboutMeSectionKey {
  Home = "home",
  MyStory = "my-story",
  BusinessLinks = "business-links",
  SkillCards = "skill-cards"
}

export function isAboutMeSectionKeyCheckString(value: string): value is AboutMeSectionKey {
  return Object.values(AboutMeSectionKey).includes(value as AboutMeSectionKey);
}

export function isAboutMeSectionKeyCheckUnknown(value: unknown): value is AboutMeSectionKey {
  return typeof value === "string" && isAboutMeSectionKeyCheckString(value);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
