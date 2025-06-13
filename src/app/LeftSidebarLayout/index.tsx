////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { useContext, useRef, useState } from "react";

import { AppContext, AppContextType } from "@/context/AppContext";

import { SECTION_MAP, SectionKey } from "@/data/SECTION_MAP";

import { useDimensions } from "@/hooks/useDimensions";
import { type OverlayHook, useOverlay } from "@/hooks/useOverlay";

import { type CustomProperties } from "@/types/css/CustomProperties";
import { type Dimensions } from "@/types/Dimensions";
import { type TransitionTimingFunction } from "@/types/css/TransitionTimingFunction";

import { joinClasses } from "@/utils/joinClasses";
// import { processComponentDimensions } from "@/utils/processComponentDimensions";
import { toStringMS } from "@/utils/strings/toStringMS";
import { toStringPX } from "@/utils/strings/toStringPX";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param props - Component Props
 * @see {@link LeftSidebarLayoutProps}
 * @returns JSX
 */
export function LeftSidebarLayout(): JSX.Element {

  // App Context
  const appContext: AppContextType | undefined = useContext(AppContext);
  if (typeof appContext === "undefined") { throw new Error("Missing App Context Provider"); }

  // Component Dimensions
  const componentRef = useRef<HTMLDivElement>(null);
  const componentDimensions: Dimensions = useDimensions(componentRef);

  // Component Constants
  const transitionDurationValueMS: number = 250;
  const transitionFunction: TransitionTimingFunction = "ease-out";
  const headerHeightValuePX = 56;

  // Custom Properties
  const style: CustomProperties = {
    // ...processComponentDimensions(componentDimensions), I'm using 100dvw and 100dvh now.
    "--transitionDuration": toStringMS(transitionDurationValueMS),
    "--transitionFunction": transitionFunction,
    "--headerHeight": toStringPX(headerHeightValuePX)
  }

  // Main Overlay Hook
  const mainOverlayHook: OverlayHook = useOverlay();

  // Sidebar State
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // Sidebar Functions
  const toggleOpenClosed = () => {
    setIsSidebarOpen(isSidebarOpen ? false : true);
    mainOverlayHook.toggle();
  }

  const handleClickAboutMeLink = (ref: React.RefObject<HTMLElement>) => {
    toggleOpenClosed();
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, transitionDurationValueMS)
  }

  // About Me Section Refs
  const heroRef = useRef<HTMLElement>(null);
  const myStoryRef = useRef<HTMLElement>(null);
  const businessLinksRef = useRef<HTMLElement>(null);
  const skillCardsRef = useRef<HTMLElement>(null);

  // Header Functions
  const handleClickHeaderLink = (sectionKey: SectionKey) => {
    appContext.setActiveSectionKey(sectionKey);
    if (scrollRef.current) { scrollRef.current.scrollTop = 0; }
  }

  // Scroll Container
  const scrollRef = useRef<HTMLDivElement>(null);

  // Return Content
  return (
    <div
      ref={componentRef}
      className={styles.component}
      style={style}
    >
      <div className={joinClasses(styles.layer, styles.background)} />
      <div className={joinClasses(styles.layer, styles.content)}>
        <header className={styles.header}>
          <div className={styles.leftContainer}>
            <img className={joinClasses(styles.image, isSidebarOpen ? styles.open : styles.closed)}
              src="logo.png"
              alt="corner icon"
              onClick={toggleOpenClosed}
            />
          </div>
          <div className={styles.middleContainer}>
            <nav className={styles.links}>
              {Object.entries(SECTION_MAP).map(([key, { headerLabel }]) => (
                <a
                  key={key}
                  className={joinClasses(styles.link, key === appContext.activeSectionKey ? styles.active : "")}
                  onClick={() => handleClickHeaderLink(key as SectionKey)}
                >
                  {headerLabel}
                </a>
              ))}
            </nav>
          </div>
          <div className={styles.rightContainer}></div>
        </header>
        <main className={styles.main}>
          <div className={joinClasses(styles.layer, styles.overlay, mainOverlayHook.isActive ? styles.front : styles.back)}>
            <div className={joinClasses(styles.layer, styles.background)} />
            <div className={joinClasses(styles.layer, styles.content)}>
              <aside className={joinClasses(styles.sidebar, isSidebarOpen ? styles.open : styles.closed)}>
                <div className={styles.inner}>
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
            </div>
          </div>
          <div ref={scrollRef} className={joinClasses(styles.layer, styles.content, isSidebarOpen ? styles.open : styles.closed)}>
            {(() => {
              switch (appContext.activeSectionKey) {
                case SectionKey.AboutMe:
                  return SECTION_MAP[SectionKey.AboutMe].mainContent({
                    headerHeight: headerHeightValuePX,
                    heroHeight: componentDimensions.height - 2 * headerHeightValuePX,
                    businessLinksRef: businessLinksRef,
                    heroRef: heroRef,
                    myStoryRef: myStoryRef,
                    skillCardsRef: skillCardsRef,
                  });
                case SectionKey.Projects:
                  return SECTION_MAP[SectionKey.Projects].mainContent({
                    headerHeight: headerHeightValuePX
                  })
              }
            })()}
          </div>
        </main>
      </div>
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
