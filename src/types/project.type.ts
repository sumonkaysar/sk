export interface IProject {
  _id: string;
  title: string;
  shortDescription: string;
  description: string;
  category: "Frontend" | "Backend" | "Fullstack" | "Mobile" | "Other";
  techStack: string[];
  image?: string;
  video?: string;
  liveDemo?: string;
  githubFrontend?: string;
  githubBackend?: string;
  features: string[];
  myContribution?: string[];
  createdAt: string;
  updatedAt: string;
}
