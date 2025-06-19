////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { AboutMeContent } from "./AboutMeContent";
import { ProjectsContent } from "./ProjectsContent";

import { useMemo, useRef } from "react";

import { type AppStateHook, useAppState } from "@/hooks/useAppState";

import { HeaderLinks } from "@/common/components/HeaderLinks";
import { AboutMeSideContentLinks } from "@/components/SideContentLinks/AboutMeSideContentLinks";
import { ProjectsSideContentLinks } from "@/components/SideContentLinks/ProjectsSideContentLinks";

import { type BooleanQueryParamHook, useBooleanQueryParam } from "@/common/hooks/useBooleanQueryParam";

import { type CustomProperties } from "@/common/types/CustomProperties";

import { joinClasses } from "@/common/utils/joinClasses";
import { toStringMS } from "@/common/utils/strings/toStringMS";

import { APP_SECTION_KEY_ARRAY } from "@/data/arrays/AppHeaderLinkArray";
import { AboutMeSectionKey } from "@/data/keys/AboutMeSectionKey";
import { AppSectionKey } from "@/data/keys/AppSectionKey";
import { AppSectionData } from "@/data/types/AppSectionData";
import { toAppSectionData } from "@/data/utils/fromAppSectionMap";

import { useAppNavigation } from "@/hooks/useAppNavigation";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function AppPrimaryContentLayout(): JSX.Element {

  const { navigateToAppSection } = useAppNavigation();
  const appStateHook: AppStateHook = useAppState();
  const sidebarHook: BooleanQueryParamHook = useBooleanQueryParam("sidebar", "open");

  const transitionDurationValueMS: number = 300;
  const componentCustomProperties: CustomProperties = {
    "--app-primary-content-layout-transition-duration": toStringMS(transitionDurationValueMS)
  }

  const sidebarContentScrollRef = useRef<HTMLDivElement>(null);
  const mainContentScrollRef = useRef<HTMLDivElement>(null);

  // About Me Section Refs
  const heroRef = useRef<HTMLElement>(null);
  const myStoryRef = useRef<HTMLElement>(null);
  const businessLinksRef = useRef<HTMLElement>(null);
  const skillCardsRef = useRef<HTMLElement>(null);

  // About Me Section Ref Map
  const ABOUT_ME_SECTION_REF_MAP = useMemo<Record<AboutMeSectionKey, React.RefObject<HTMLElement>>>(() => ({
    [AboutMeSectionKey.Home]: heroRef,
    [AboutMeSectionKey.MyStory]: myStoryRef,
    [AboutMeSectionKey.BusinessLinks]: businessLinksRef,
    [AboutMeSectionKey.SkillCards]: skillCardsRef
  }), [heroRef, myStoryRef, businessLinksRef, skillCardsRef]);

  // Return Component
  return (
    <div className={styles.appPrimaryContentLayout} style={componentCustomProperties}>
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
          <HeaderLinks headerLinkDataArray={APP_SECTION_KEY_ARRAY.map((appSectionKey) => {
            const appSectionData: AppSectionData = toAppSectionData(appSectionKey);
            return {
              linkText: appSectionData.label,
              isActive: appSectionKey === appStateHook.appSectionKey,
              handleClick: () => {
                if (sidebarContentScrollRef.current) { sidebarContentScrollRef.current.scrollTo({ top: 0, behavior: "smooth" }); }
                if (mainContentScrollRef.current) { mainContentScrollRef.current.scrollTo({ top: 0, behavior: "smooth" }); }
                navigateToAppSection(appSectionKey);
              },
            }
          })} />
        </div>
        <div className={styles.right}></div>
      </header>
      <main className={styles.main}>
        <aside className={joinClasses(styles.sideContainer, sidebarHook.value ? styles.open : styles.closed)}>
          <div ref={sidebarContentScrollRef} className={styles.sidebar}>
            {(() => {
              switch (appStateHook.appSectionKey) {
                case AppSectionKey.AboutMe:
                  return <AboutMeSideContentLinks
                    sidebarHook={sidebarHook}
                    sidebarTransitionDurationValueMS={transitionDurationValueMS}
                    aboutMeSectionRefMap={ABOUT_ME_SECTION_REF_MAP}
                  />;
                case AppSectionKey.Projects:
                  return <ProjectsSideContentLinks />;
                case AppSectionKey.Settings:
                  return <></>;
                default: return <></>;
              }
            })()}
          </div>
        </aside>
        <div className={styles.mainContainer}>
          <div className={joinClasses(styles.layer, styles.overlay, sidebarHook.value ? styles.front : styles.back)} />
          <div ref={mainContentScrollRef} className={joinClasses(styles.layer, styles.content)}>
            {(() => {
              switch (appStateHook.appSectionKey) {
                case AppSectionKey.AboutMe:
                  return <AboutMeContent aboutMeSectionRefMap={ABOUT_ME_SECTION_REF_MAP} />
                case AppSectionKey.Projects:
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
