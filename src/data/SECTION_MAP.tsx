////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { AboutMeContent, AboutMeContentProps } from "@/app/sections/AboutMe/AboutMeContent";
import { AboutMeLinks, AboutMeLinksProps } from "@/app/sections/AboutMe/AboutMeLinks";
import { ProjectsContent } from "@/app/sections/Projects/ProjectsContent";
import { ProjectsLinks } from "@/app/sections/Projects/ProjectsLinks";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export enum SectionKey {
  AboutMe = "about-me",
  Projects = "projects"
}

export function isSectionKey(value: string): value is SectionKey {
  return Object.values(SectionKey).includes(value as SectionKey);
}

type SectionData<SideContentProps, MainContentProps> = {
  headerLabel: string
  sideContent: (props: SideContentProps) => JSX.Element
  mainContent: (props: MainContentProps) => JSX.Element
}

type SectionMap = {
  [SectionKey.AboutMe]: SectionData<AboutMeLinksProps, AboutMeContentProps>,
  [SectionKey.Projects]: SectionData<{}, {}>
}

export const SECTION_MAP: SectionMap = {
  [SectionKey.AboutMe]: {
    headerLabel: "About Me",
    sideContent: (props: AboutMeLinksProps) => <AboutMeLinks {...props} />,
    mainContent: (props: AboutMeContentProps) => <AboutMeContent {...props} />
  },
  [SectionKey.Projects]: {
    headerLabel: "Projects",
    sideContent: (props: {}) => <ProjectsLinks {...props} />,
    mainContent: (props: {}) => <ProjectsContent {...props} />
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
