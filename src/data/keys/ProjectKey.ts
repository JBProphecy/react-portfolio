////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export enum ProjectKey {
  MyPortfolio = "my-portfolio",
  MovieWebsite = "movie-website",
  MusicVisualizer = "music-visualizer",
  FormValidation = "form-validation"
}

export function isProjectKeyCheckString(value: string): value is ProjectKey {
  return Object.values(ProjectKey).includes(value as ProjectKey);
}

export function isProjectKeyCheckUnknown(value: unknown): value is ProjectKey {
  return typeof value === "string" && isProjectKeyCheckString(value);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
