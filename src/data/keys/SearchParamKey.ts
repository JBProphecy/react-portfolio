////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export enum SearchParamKey {
  Sidebar = "sidebar"
}

export function isSearchParamKeyCheckString(value: string): value is SearchParamKey {
  return Object.values(SearchParamKey).includes(value as SearchParamKey);
}

export function isSearchParamKeyCheckUnknown(value: unknown): value is SearchParamKey {
  return typeof value === "string" && isSearchParamKeyCheckString(value);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
