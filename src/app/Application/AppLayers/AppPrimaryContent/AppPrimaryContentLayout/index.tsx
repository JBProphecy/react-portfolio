////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { AboutMeContent } from "./AboutMeContent";
import { AboutMeLinks } from "./AboutMeLinks";
import { ProjectsContent } from "./ProjectsContent";
import { ProjectsLinks } from "./ProjectsLinks";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { SectionKey } from "@/app/data/enums/SectionKey";
import { SECTION_MAP } from "@/app/data/maps/SECTION_MAP";
import { AppStateHook } from "@/app/hooks/useAppState";

import { HeaderLinks } from "@/components/HeaderLinkStuff/HeaderLinks";

import { BooleanQueryParamHook, useBooleanQueryParam } from "@/hooks/useBooleanQueryParam";

import { CustomProperties } from "@/types/css/CustomProperties";

import { joinClasses } from "@/utils/joinClasses";
import { toStringMS } from "@/utils/strings/toStringMS";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type AppPrimaryContentLayoutProps = {
  appStateHook: AppStateHook
}

/**
 * @param props
 * @see {@link AppPrimaryContentLayoutProps}
 * @returns JSX
 */
export function AppPrimaryContentLayout({
  appStateHook
}: AppPrimaryContentLayoutProps): JSX.Element {

  // Navigate
  const navigate = useNavigate();

  // Sidebar Hook
  const sidebarHook: BooleanQueryParamHook = useBooleanQueryParam("sidebar", "open");

  // Component Constants
  const transitionDurationValueMS: number = 300;

  // Component Style
  const style: CustomProperties = {
    "--app-primary-content-layout-transition-duration": toStringMS(transitionDurationValueMS)
  }

  // Header Link Order
  const HEADER_LINK_SECTION_KEY_ARRAY: SectionKey[] = [
    SectionKey.AboutMe,
    SectionKey.Projects,
    // SectionKey.Settings
  ]

  // Scroll Container Ref
  const scrollRef = useRef<HTMLDivElement>(null);

  // Header Link Click
  const handleClickHeaderLink = (sectionKey: SectionKey) => {
    navigate({
      pathname: `/${sectionKey}`,
      search: location.search
    });
    if (scrollRef.current) { scrollRef.current.scrollTop = 0; }
  }

  // About Me Section Refs
  const heroRef = useRef<HTMLElement>(null);
  const myStoryRef = useRef<HTMLElement>(null);
  const businessLinksRef = useRef<HTMLElement>(null);
  const skillCardsRef = useRef<HTMLElement>(null);

  // Click Sidebar Link (About Me Section)
  const handleClickAboutMeLink = (ref: React.RefObject<HTMLElement>) => {
    sidebarHook.toggle();
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, transitionDurationValueMS)
  }

  // Return Content
  return (
    <div className={styles.appPrimaryContentLayout} style={style}>
      <header className={styles.header}>
        <div className={styles.left}>
          <img
            className={joinClasses(styles.icon, sidebarHook.value ? styles.active : styles.normal)}
            onClick={sidebarHook.toggle}
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
                isActive: sectionKey === appStateHook.sectionKey,
                handleClick: () => handleClickHeaderLink(sectionKey)
              }
            }))}
          />
        </div>
        <div className={styles.right}></div>
      </header>
      <main className={styles.main}>
        <aside className={joinClasses(styles.sideContainer, sidebarHook.value ? styles.open : styles.closed)}>
          <div className={styles.sidebar}>
            {(() => {
              switch (appStateHook.sectionKey) {
                case SectionKey.AboutMe:
                  return <AboutMeLinks
                    handleClick={handleClickAboutMeLink}
                    heroRef={heroRef}
                    myStoryRef={myStoryRef}
                    businessLinksRef={businessLinksRef}
                    skillCardsRef={skillCardsRef}
                  />;
                case SectionKey.Projects:
                  return <ProjectsLinks />;
                case SectionKey.Settings:
                  return <></>;
                default: return <></>;
              }
            })()}
          </div>
        </aside>
        <div className={styles.mainContainer}>
          <div className={joinClasses(styles.layer, styles.overlay, sidebarHook.value ? styles.front : styles.back)} />
          <div ref={scrollRef} className={joinClasses(styles.layer, styles.content)}>
            {(() => {
              switch (appStateHook.sectionKey) {
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
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
