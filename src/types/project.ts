export interface ProjectData {

  title: string;

  description: string;

  shortDescription: string;

  publishDate: Date;

  featured: boolean;

  status:
    | "completed"
    | "in-progress"
    | "research"
    | "prototype";

  category:
    | "machine-learning"
    | "embedded"
    | "iot"
    | "research"
    | "electronics"
    | "computer-vision";

  technologies: string[];

  tags: string[];

  cover: string;

  gallery?: string[];

  github?: string;

  gitlab?: string;

  documentation?: string;

  metrics?: {
    accuracy?: number;
    latency?: number;
    datasets?: number;
  };
}