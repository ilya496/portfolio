import React from "react";

export interface RouteConfig {
  path: string;
  element: React.FC;
  type: "public" | "private" | "admin";
}
