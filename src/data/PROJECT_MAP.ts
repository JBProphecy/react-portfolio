////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { IconLabelKeys } from "./ICON_LABEL_MAP";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export enum ProjectKeys {
  MovieWebsite = "Movie Webiste",
  MusicVisualizer = "Music Visualizer",
  UserAuthentication = "User Authentication"
}

export type ProjectData = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  videoSrc: string;
  summary: string;
  description: string;
  repositoryLinkText: string;
  repositoryLinkHref: string;
  iconLabelKeys: IconLabelKeys[];
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const MOVIE_WEBSITE_ICON_LABEL_KEYS: IconLabelKeys[] = [
  IconLabelKeys.HTML, IconLabelKeys.CSS, IconLabelKeys.JavaScript,
  IconLabelKeys.NodeJS, IconLabelKeys.ExpressJS, IconLabelKeys.SQLite,
  IconLabelKeys.Git, IconLabelKeys.GitHub
]

const MUSIC_VISUALIZER_ICON_LABEL_KEYS: IconLabelKeys[] = [
  IconLabelKeys.CSS, IconLabelKeys.TypeScript,
  IconLabelKeys.Vite, IconLabelKeys.ReactJS,
  IconLabelKeys.NodeJS, IconLabelKeys.ExpressJS,
  IconLabelKeys.MySQL, IconLabelKeys.Prisma,
  IconLabelKeys.Git, IconLabelKeys.GitHub
]

const USER_AUTHENTICATION_ICON_LABEL_KEYS: IconLabelKeys[] = [
  IconLabelKeys.CSS, IconLabelKeys.TypeScript,
  IconLabelKeys.Vite, IconLabelKeys.ReactJS,
  IconLabelKeys.NodeJS, IconLabelKeys.ExpressJS,
  IconLabelKeys.MySQL, IconLabelKeys.Prisma,
  IconLabelKeys.Git, IconLabelKeys.GitHub
]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const buildImagePath = (file: string) => {
  return `project-images/${file}`;
}

const buildVideoPath = (file: string) => {
  return `project-videos/${file}`;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const PROJECT_MAP: Record<ProjectKeys, ProjectData> = {
  [ProjectKeys.MovieWebsite]: {
    title: "Movie Website",
    imageSrc: buildImagePath("movie-review-website-thumbnail.png"),
    imageAlt: "thumbnail for movie website project",
    videoSrc: buildVideoPath("movie-website-demo.mp4"),
    summary: "a movie review website that allows you to interact with movies and share your thoughts with the community",
    description: "For a group project during my last semester at UNCW, my team and I made a single-page application centered around movies. Users can browse through or search for movies, save them, leave reviews, and read reviews from other users. This is the first software project I've worked on following the Scrum methodology and the first application that I've deployed (for our presentation). It's not a fully polished product, but the essentials are there.",
    repositoryLinkText: "Open Repository in a New Tab",
    repositoryLinkHref: "https://github.com/JBProphecy/movie-review",
    iconLabelKeys: MOVIE_WEBSITE_ICON_LABEL_KEYS
  },
  [ProjectKeys.MusicVisualizer]: {
    title: "Music Visualizer",
    imageSrc: buildImagePath("music-visualizer-thumbnail.png"),
    imageAlt: "thumbnail for music visualizer project",
    videoSrc: buildVideoPath("music-visualizer-demo.mp4"),
    summary: "a cool music visualizer that utilizes the Spotify API to connect to your account and display the currently playing track",
    description: "I used the Spotify API to allow users to log into their Spotify account and pull information about the currently playing song. I used Three.js to make a 3D visualizer to display that information and I wrote the logic for the random animations that occur using trigonometry to make them smooth. I have an authentication system in place as well using JWT, allowing users to make accounts and profiles and access them, which was my attempt at making something similar to Xbox where you can sign into any profiles that you've added to your console. I used a device token to keep track of which profiles were associated with each device as well as a set of access and refresh tokens for the current account and current profile. I never ended up doing anything with this project, but I learned a lot through the process of experimentation.",
    repositoryLinkText: "Open Repository in a New Tab",
    repositoryLinkHref: "https://github.com/JBProphecy/hot-box",
    iconLabelKeys: MUSIC_VISUALIZER_ICON_LABEL_KEYS
  },
  [ProjectKeys.UserAuthentication]: {
    title: "User Authentication",
    imageSrc: buildImagePath("user-authentication-thumbnail.png"),
    imageAlt: "thumbnail for user authentication project",
    videoSrc: buildVideoPath("user-authentication-demo.mp4"),
    summary: "a project that showcases an improved authentication system plus an improved validation system",
    description: "This project demonstrates the most user-friendly authentication system I've made so far. I'm still using JSON Web Tokens (access and refresh), but compared to my other projects, the form validation is much better. This validation takes place in both the client-side and then server-side code. I've implemented a system to display all the form information needed in the application (successes, warnings, failures), so I'm no longer relying on the console for that information. In addition to the authentication stuff, I've introduced some middleware and my project organization has improved from previous projects.",
    repositoryLinkText: "Open Repository in a New Tab",
    repositoryLinkHref: "https://github.com/JBProphecy/hot-box-2",
    iconLabelKeys: USER_AUTHENTICATION_ICON_LABEL_KEYS
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
