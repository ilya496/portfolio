export interface User {
  id: string;
  username: string;
  createdAt: Date;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  url?: string;
  repoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ServiceStatus = "ACTIVE" | "INACTIVE" | "BETA";

export interface Service {
  id: string;
  title: string;
  description: string;
  url: string;
  iconUrl?: string;
  status: ServiceStatus;
  createdAt: Date;
}
