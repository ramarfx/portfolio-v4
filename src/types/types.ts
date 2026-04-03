export type TabId = "home" | "projects" | "skills" | "contact";

export interface Project {
  id: string;
  title: string;
  description: string;
  emoji: string;
  thumbClass: string;
  tags: { label: string; color: "blue" | "green" | "aqua" }[];
  links: { label: string; variant: "blue" | "green" | "aqua" | "silver" }[];
}

export interface Skill {
  label: string;
  percent: number;
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
