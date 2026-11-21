export type ProjectCategory = "Front-End" | "Full-Stack" | "Back-End" | "VideoGame";

export interface ProjectImage {
  src: string;
  fit?: "cover" | "contain";
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  overview?: string[];
  category: ProjectCategory;
  featured: boolean;
  thumbnail: string;
  images: ProjectImage[];
  slot?: number;
  mobileOrder?: number; 
  tech: string[];
  dates: { start: string; end?: string };
  links: {
    live?: string;
    repo?: string;
    video?: string;
    itch?: string;
  };
  highlights: string[];
  media?: string[];
}