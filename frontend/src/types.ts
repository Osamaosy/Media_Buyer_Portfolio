export interface LocalizedString {
  ar: string;
  en: string;
}

export interface Project {
  _id: string;
  title: LocalizedString;
  description: LocalizedString;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}
