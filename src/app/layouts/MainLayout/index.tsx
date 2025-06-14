////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { useContext, useRef, useState } from "react";
import { AppContext, AppContextType } from "@/context/AppContext";
import { SECTION_MAP, SectionKey } from "@/data/SECTION_MAP";
import { joinClasses } from "@/utils/joinClasses";
import { CustomProperties } from "@/types/css/CustomProperties";
import { toStringMS } from "@/utils/strings/toStringMS";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param props - Component Props
 * @see {@link MainLayoutProps}
 * @returns JSX
 */
export function MainLayout(): JSX.Element {

  // App Context
  const appContext: AppContextType | undefined = useContext(AppContext);
  if (typeof appContext === "undefined") { throw new Error("Missing App Context Provider"); }

  // Component Constants
  const transitionDurationValueMS: number = 250;

  // Component Style
  const style: CustomProperties = {
    "--transitionDuration": toStringMS(250)
  }

  // Scroll Container
  const scrollRef = useRef<HTMLDivElement>(null);

  // Sidebar State + Toggle
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  function toggleSidebar() { setIsSidebarOpen(isSidebarOpen ? false : true); }

  // Click Header Link
  const handleClickHeaderLink = (sectionKey: SectionKey) => {
    appContext.setActiveSectionKey(sectionKey);
    if (scrollRef.current) { scrollRef.current.scrollTop = 0; }
  }

  // Click Sidebar Link (About Me Section)
  const handleClickAboutMeLink = (ref: React.RefObject<HTMLElement>) => {
    toggleSidebar();
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, transitionDurationValueMS)
  }

  // About Me Section Refs (for scrolling)
  const heroRef = useRef<HTMLElement>(null);
  const myStoryRef = useRef<HTMLElement>(null);
  const businessLinksRef = useRef<HTMLElement>(null);
  const skillCardsRef = useRef<HTMLElement>(null);

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
          <nav className={styles.headers}>
            {Object.entries(SECTION_MAP).map(([key, { headerLabel }]) => (
              <a
                key={key}
                className={joinClasses(styles.header, key === appContext.activeSectionKey ? styles.active : "")}
                onClick={() => handleClickHeaderLink(key as SectionKey)}
              >
                {headerLabel}
              </a>
            ))}
          </nav>
        </div>
        <div className={styles.right}></div>
      </header>
      <main className={styles.main}>
        <aside className={joinClasses(styles.sideContainer, isSidebarOpen ? styles.open : styles.closed)}>
          <div className={styles.sidebar}>
            {(() => {
              switch (appContext.activeSectionKey) {
                case SectionKey.AboutMe:
                  return SECTION_MAP[SectionKey.AboutMe].sideContent({
                    businessLinksRef: businessLinksRef,
                    heroRef: heroRef,
                    myStoryRef: myStoryRef,
                    skillCardsRef: skillCardsRef,
                    handleClick: handleClickAboutMeLink,
                  });
                case SectionKey.Projects:
                  return SECTION_MAP[SectionKey.Projects].sideContent({});
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
                  return SECTION_MAP[SectionKey.AboutMe].mainContent({
                    businessLinksRef: businessLinksRef,
                    heroRef: heroRef,
                    myStoryRef: myStoryRef,
                    skillCardsRef: skillCardsRef,
                  });
                case SectionKey.Projects:
                  return SECTION_MAP[SectionKey.Projects].mainContent({})
              }
            })()}
          </div>
        </div>
      </main>
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
