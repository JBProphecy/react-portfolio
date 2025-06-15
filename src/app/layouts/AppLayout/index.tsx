////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { useContext, useRef, useState } from "react";
import { AppContext, AppContextType } from "@/context/AppContext";
import { SECTION_MAP, SectionKey } from "@/data/SECTION_MAP";
import { joinClasses } from "@/utils/joinClasses";
import { CustomProperties } from "@/types/css/CustomProperties";
import { toStringMS } from "@/utils/strings/toStringMS";
import { HeaderLinks } from "../../components/HeaderLinkStuff/HeaderLinks";
import { AboutMeLinks } from "@/app/sections/AboutMe/AboutMeLinks";
import { ProjectsLinks } from "@/app/sections/Projects/ProjectsLinks";
import { AboutMeContent } from "@/app/sections/AboutMe/AboutMeContent";
import { ProjectsContent } from "@/app/sections/Projects/ProjectsContent";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param props - Component Props
 * @see {@link AppLayoutProps}
 * @returns JSX
 */
export function AppLayout(): JSX.Element {

  // App Context
  const appContext: AppContextType | undefined = useContext(AppContext);
  if (typeof appContext === "undefined") { throw new Error("Missing App Context Provider"); }

  // Component Constants
  const transitionDurationValueMS: number = 250;

  // Component Style
  const style: CustomProperties = {
    "--component-transition-duration": toStringMS(250)
  }

  // Sidebar State
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // Sidebar Toggle
  function toggleSidebar() { setIsSidebarOpen(isSidebarOpen ? false : true); }

  // Header Link Order
  const HEADER_LINK_SECTION_KEY_ARRAY: SectionKey[] = [
    SectionKey.AboutMe,
    SectionKey.Projects
  ]

  // Scroll Container Ref
  const scrollRef = useRef<HTMLDivElement>(null);

  // Header Link Click
  const handleClickHeaderLink = (sectionKey: SectionKey) => {
    appContext.setActiveSectionKey(sectionKey);
    if (scrollRef.current) { scrollRef.current.scrollTop = 0; }
  }

  // About Me Section Refs
  const heroRef = useRef<HTMLElement>(null);
  const myStoryRef = useRef<HTMLElement>(null);
  const businessLinksRef = useRef<HTMLElement>(null);
  const skillCardsRef = useRef<HTMLElement>(null);

  // Click Sidebar Link (About Me Section)
  const handleClickAboutMeLink = (ref: React.RefObject<HTMLElement>) => {
    toggleSidebar();
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, transitionDurationValueMS)
  }

  // Return Content
  return (
    <div className={styles.component} style={style}>
      <header className={styles.header}>
        <div className={styles.left}>
          <img
            className={joinClasses(styles.icon, isSidebarOpen ? styles.active : styles.normal)}
            onClick={toggleSidebar}
            src="/logo.png"
            alt="left corner icon button"
          />
        </div>
        <div className={styles.middle}>
          <HeaderLinks
            headerLinkKeyAndPropsArray={HEADER_LINK_SECTION_KEY_ARRAY.map((sectionKey) => ({
              headerLinkKey: sectionKey,
              headerLinkProps: {
                linkText: SECTION_MAP[sectionKey].headerLabel,
                isActive: sectionKey === appContext.activeSectionKey,
                handleClick: () => handleClickHeaderLink(sectionKey)
              }
            }))}
          />
        </div>
        <div className={styles.right}></div>
      </header>
      <main className={styles.main}>
        <aside className={joinClasses(styles.sideContainer, isSidebarOpen ? styles.open : styles.closed)}>
          <div className={styles.sidebar}>
            {(() => {
              switch (appContext.activeSectionKey) {
                case SectionKey.AboutMe:
                  return <AboutMeLinks
                    handleClick={handleClickAboutMeLink}
                    heroRef={heroRef}
                    myStoryRef={myStoryRef}
                    businessLinksRef={businessLinksRef}
                    skillCardsRef={skillCardsRef}
                  />
                case SectionKey.Projects:
                  return <ProjectsLinks />
              }
            })()}
          </div>
        </aside>
        <div className={styles.mainContainer}>
          <div className={joinClasses(styles.layer, styles.overlay, isSidebarOpen ? styles.front : styles.back)} />
          <div ref={scrollRef} className={joinClasses(styles.layer, styles.content)}>
            {(() => {
              switch (appContext.activeSectionKey) {
                case SectionKey.AboutMe:
                  return <AboutMeContent
                    heroRef={heroRef}
                    myStoryRef={myStoryRef}
                    businessLinksRef={businessLinksRef}
                    skillCardsRef={skillCardsRef}
                  />
                case SectionKey.Projects:
                  return <ProjectsContent />
              }
            })()}
          </div>
        </div>
      </main>
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
