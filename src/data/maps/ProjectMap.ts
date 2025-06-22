////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { FORM_VALIDATION_LOGO_KEY_ARRAY, MOVIE_WEBSITE_LOGO_KEY_ARRAY, MUSIC_VISUALIZER_LOGO_KEY_ARRAY, MY_PORTFOLIO_LOGO_KEY_ARRAY, SPRING_BOOT_DEMO_LOGO_KEY_ARRAY } from "../arrays/LogoKeyArrays";
import { ProjectKey } from "../keys/ProjectKey";
import { ProjectData } from "../types/ProjectData";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function buildImagePath(file: string) {
  return `/project-images/${file}`;
}

function buildYouTubeEmbeddedLink(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}?loop=1`;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const PROJECT_MAP: Record<ProjectKey, ProjectData> = {
  [ProjectKey.MovieWebsite]: {
    title: "Movie Website",
    summary: "a movie review website that allows you to interact with movies and share your thoughts with the community",
    description: "For a group project during my last semester at UNCW, my team and I made a single-page application centered around movies. Users can browse through or search for movies, save them, leave reviews, and read reviews from other users. This is the first software project I've worked on following the Scrum methodology and the first application that I've deployed (for our presentation). It's not a fully polished product, but the essentials are there.",
    imageAlt: "thumbnail for movie website project",
    imageSrc: buildImagePath("movie-review-website-thumbnail.png"),
    videoSrc: buildYouTubeEmbeddedLink("tykQTSRXOns"),
    repositoryLinkText: "Open Repository in a New Tab",
    repositoryLinkHref: "https://github.com/JBProphecy/movie-review",
    logoKeyArray: MOVIE_WEBSITE_LOGO_KEY_ARRAY
  },
  [ProjectKey.MusicVisualizer]: {
    title: "Music Visualizer",
    summary: "a cool music visualizer that utilizes the Spotify API to connect to your account and display the currently playing track",
    description: "I used the Spotify API to allow users to log into their Spotify account and pull information about the currently playing song. I used Three.js to make a 3D visualizer to display that information and I wrote the logic for the random animations that occur using trigonometry. There is also an authentication system in this project that allows users to not only create accounts and profiles, but add profiles to their device for easy access. To keep track of which profiles are associated with each device, I used a device token and associated that ID with any profile ID added to the device in my database. Users must be signed into an account to create a profile, but once a profile is created, they can sign in with the username and password for the profile without needing the account information.",
    imageAlt: "thumbnail for music visualizer project",
    imageSrc: buildImagePath("music-visualizer-thumbnail.png"),
    videoSrc: buildYouTubeEmbeddedLink("lCE-6f3GhtQ"),
    repositoryLinkText: "Open Repository in a New Tab",
    repositoryLinkHref: "https://github.com/JBProphecy/hot-box",
    logoKeyArray: MUSIC_VISUALIZER_LOGO_KEY_ARRAY
  },
  [ProjectKey.FormValidation]: {
    title: "Form Validation",
    summary: "a project that showcases an improved form validation system",
    description: "This project demonstrates some user-friendly form validation, which takes place in both the client-side and then server-side code. While I have used Zod for form validation, this project uses my own customized system. I designed it to check all the fields as far as necessary so I could display any warning messages for each field, reducing the number of requests that users would need to make in order to successfully complete a form. In addtion to the form validation, the authentication is done with JSON web tokens (access and refresh) stored in httpOnly cookies given valid credentials.",
    imageAlt: "thumbnail for form validation project",
    imageSrc: buildImagePath("form-validation-thumbnail.png"),
    videoSrc: buildYouTubeEmbeddedLink("V3Bbap_LxvM"),
    repositoryLinkText: "Open Repository in a New Tab",
    repositoryLinkHref: "https://github.com/JBProphecy/hot-box-2",
    logoKeyArray: FORM_VALIDATION_LOGO_KEY_ARRAY
  },
  [ProjectKey.MyPortfolio]: {
    title: "This Portfolio",
    summary: "my very own portfolio website... click and scroll for the repository link",
    description: "This project is my portfolio. It's a purely front-end, single-page application built with React. I've designed it to be responsive and transition seamlessly between various screen sizes using custom scaling units and media queries. I've also made every interaction interact with the URL so that way the section, modal, and sidebar can all be navigated back and forth with the browser controls. There are several sections with information about me, my resume, my skills, and my projects, all with links to their repositories, so feel free to check them out.",
    imageAlt: "",
    imageSrc: "",
    videoSrc: "",
    repositoryLinkText: "Open Repository in a New Tab",
    repositoryLinkHref: "https://github.com/JBProphecy/react-portfolio",
    logoKeyArray: MY_PORTFOLIO_LOGO_KEY_ARRAY
  },
  [ProjectKey.SpringBootDemo]: {
    title: "Spring Boot Demo",
    summary: "a project to experiment with Java and Spring Boot",
    description: "This project is a place for me to experiment primarily with Java and Spring Boot. The goal is to write code and become familiar with the Spring ecosystem.",
    imageAlt: "",
    imageSrc: "",
    videoSrc: "",
    repositoryLinkText: "Open Repository in a New Tab",
    repositoryLinkHref: "https://github.com/JBProphecy/SpringBootDemo",
    logoKeyArray: SPRING_BOOT_DEMO_LOGO_KEY_ARRAY
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
