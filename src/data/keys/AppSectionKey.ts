////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export enum AppSectionKey {
  AboutMe = "about-me",
  Projects = "projects",
  Settings = "settings"
}

export function isAppSectionKeyCheckString(value: string): value is AppSectionKey {
  return Object.values(AppSectionKey).includes(value as AppSectionKey);
}

export function isAppSectionKeyCheckUnknown(value: unknown): value is AppSectionKey {
  return typeof value === "string" && isAppSectionKeyCheckString(value);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
