////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export enum SectionKey {
  AboutMe = "about-me",
  Projects = "projects"
}

export function isSectionKey(value: string): value is SectionKey {
  return Object.values(SectionKey).includes(value as SectionKey);
}

export type SectionData = {
  headerLabel: string
}

export const SECTION_MAP: Record<SectionKey, SectionData> = {
  [SectionKey.AboutMe]: {
    headerLabel: "About Me"
  },
  [SectionKey.Projects]: {
    headerLabel: "Projects"
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
