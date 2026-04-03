import type { Project, Skill, NavItem, StatItem } from "@/types/types";

export const PROJECTS: Project[] = [
  {
    id: "aquashop",
    title: "AquaShop — E-Commerce Platform",
    description:
      "A full-featured online store with product filtering, cart system, and payment integration. Designed with a clean, water-inspired UI theme.",
    emoji: "🌐",
    thumbClass: "bg-gradient-to-br from-sky-300 via-blue-500 to-blue-700",
    tags: [
      { label: "HTML/CSS", color: "blue" },
      { label: "JavaScript", color: "blue" },
      { label: "React", color: "green" },
      { label: "UX Design", color: "aqua" },
    ],
    links: [
      { label: "🔗 Live Demo", variant: "blue" },
      { label: "⌥ GitHub", variant: "silver" },
    ],
  },
  {
    id: "aquashop",
    title: "AquaShop — E-Commerce Platform",
    description:
      "A full-featured online store with product filtering, cart system, and payment integration. Designed with a clean, water-inspired UI theme.",
    emoji: "🌐",
    thumbClass: "bg-gradient-to-br from-sky-300 via-blue-500 to-blue-700",
    tags: [
      { label: "HTML/CSS", color: "blue" },
      { label: "JavaScript", color: "blue" },
      { label: "React", color: "green" },
      { label: "UX Design", color: "aqua" },
    ],
    links: [
      { label: "🔗 Live Demo", variant: "blue" },
      { label: "⌥ GitHub", variant: "silver" },
    ],
  },
  {
    id: "greenlife",
    title: "GreenLife — Mobile App UI Kit",
    description:
      "A comprehensive UI kit for eco/sustainability apps. Includes 80+ components, nature-inspired color palette, and full Figma source files.",
    emoji: "📱",
    thumbClass: "bg-gradient-to-br from-green-300 via-green-500 to-green-700",
    tags: [
      { label: "Figma", color: "green" },
      { label: "UI Kit", color: "green" },
      { label: "Mobile", color: "blue" },
      { label: "Design System", color: "aqua" },
    ],
    links: [
      { label: "🎨 View Design", variant: "green" },
      { label: "📥 Download", variant: "silver" },
    ],
  },
  {
    id: "dataflow",
    title: "DataFlow — Analytics Dashboard",
    description:
      "Real-time analytics dashboard with interactive charts, data tables, and custom reporting. Built for a B2B SaaS startup.",
    emoji: "📊",
    thumbClass: "bg-gradient-to-br from-cyan-300 via-teal-500 to-teal-700",
    tags: [
      { label: "Vue.js", color: "blue" },
      { label: "Chart.js", color: "aqua" },
      { label: "REST API", color: "blue" },
      { label: "Node.js", color: "green" },
    ],
    links: [
      { label: "🔗 Case Study", variant: "aqua" },
      { label: "⌥ GitHub", variant: "silver" },
    ],
  },
  {
    id: "skybrand",
    title: "SkyBrand — Corporate Identity",
    description:
      "Complete branding for an aviation company. Logo, style guide, stationery, and social media asset pack across all touchpoints.",
    emoji: "✏️",
    thumbClass: "bg-gradient-to-br from-amber-300 via-orange-400 to-orange-700",
    tags: [
      { label: "Branding", color: "blue" },
      { label: "Illustrator", color: "blue" },
      { label: "Print Design", color: "green" },
    ],
    links: [
      { label: "🖼 View Work", variant: "blue" },
      { label: "📋 Details", variant: "silver" },
    ],
  },
];

export const DESIGN_SKILLS: Skill[] = [
  { label: "UI/UX Design", percent: 92, fillColor: "blue" },
  { label: "Figma", percent: 95, fillColor: "aqua" },
  { label: "Photoshop", percent: 80, fillColor: "blue" },
  { label: "Illustrator", percent: 75, fillColor: "purple" },
  { label: "Motion Design", percent: 65, fillColor: "aqua" },
];

export const DEV_SKILLS: Skill[] = [
  { label: "HTML / CSS", percent: 98, fillColor: "green" },
  { label: "JavaScript", percent: 85, fillColor: "blue" },
  { label: "React / Vue", percent: 78, fillColor: "aqua" },
  { label: "Node.js", percent: 60, fillColor: "green" },
  { label: "PHP / MySQL", percent: 55, fillColor: "purple" },
];

export const TOOLS: string[] = [
  "🎨 Figma", "📷 Photoshop", "⚛️ React", "🟩 Vue.js",
  "📦 Node.js", "🗃 MySQL", "☁️ AWS", "🐙 Git",
  "🐳 Docker", "📱 React Native",
];

export const STATS: StatItem[] = [
  { value: "12", label: "Projects" },
  { value: "3yr", label: "Experience" },
];

export const NAV_ITEMS: NavItem[] = [
  { icon: "🏠", label: "Home", tabId: "home" },
  { icon: "💼", label: "My Projects", tabId: "projects" },
  { icon: "⭐", label: "Skills", tabId: "skills" },
  { icon: "✉", label: "Contact Me", tabId: "contact" },
  { icon: "📄", label: "Download CV", href: "#" },
  { icon: "🔗", label: "Links", href: "#" },
];

export const TABS = [
  { id: "home" as const, label: "🏠 Home", file: "index.html" },
  { id: "projects" as const, label: "💼 Projects", file: "projects.html" },
  { id: "skills" as const, label: "⭐ Skills", file: "skills.html" },
  { id: "contact" as const, label: "✉ Contact", file: "contact.html" },
];
