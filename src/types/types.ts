import { JSX } from "react";

export type TabId = "home" | "projects" | "skills" | "contact";

export interface Project {
  id: string;
  image: string;
  title: string;
  description: string;
  tags: { label: string; color: "blue" | "green" | "aqua" | "yellow" }[];
  links: { label: string; variant: "blue" | "green" | "aqua" | "silver" }[];
}

export interface Skill {
  label: string;
  level: "Beginner" | "Intermediate" | "Advanced"
  fillColor: "blue" | "green" | "aqua" | "purple";
}

export interface NavItem {
  icon: string;
  label: string;
  tabId?: TabId;
  href?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Tools {
  icon: JSX.Element | string;
  name: string;
}