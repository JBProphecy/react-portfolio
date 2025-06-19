////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export enum RouteKey {
  AboutMe = "/about-me",
  Projects = "/projects",
  Project = "/projects/:projectKey",
  Settings = "/settings"
}

export function isRouteKeyCheckString(value: string): value is RouteKey {
  return Object.values(RouteKey).includes(value as RouteKey);
}

export function isRouteKeyCheckUnknown(value: unknown): value is RouteKey {
  return typeof value === "string" && isRouteKeyCheckString(value);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
