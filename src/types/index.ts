export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
  externalLink: string;
  status: "active" | "maintenance" | "beta";
}
