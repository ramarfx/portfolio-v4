export interface Repo {
  name: string;
  type: string;
  updated: string;
  url: string;
  isPrivate: boolean;
  description: string;
  size: string;
}

export const SIDEBAR_FAVORITES = [
  { icon: "⭐", label: "My Repositories" },
  { icon: "📁", label: "Starred Repos" },
];

export const SIDEBAR_FOLDERS = [
  { icon: "💻", label: "My Computer" },
  { icon: "📄", label: "Documents" },
  { icon: "🖼️", label: "Pictures" },
  { icon: "🎵", label: "Music" },
];
