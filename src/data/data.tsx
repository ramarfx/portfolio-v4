import type { Project, Skill, NavItem, StatItem, Tools } from "@/types/types";
import { SiBun, SiDocker, SiGit, SiLaravel, SiLinear, SiMysql, SiNestjs, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiSvelte, SiTailwindcss, SiThreedotjs, SiVuedotjs } from "@icons-pack/react-simple-icons";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Inditech Company Profile",
    image: "/projects/inditech.png",
    description:
      "A unique and interactive 3D-based company profile website for PT. Indi Technology, integrated with a day and night cycle system.",
    tags: [
      { label: "React", color: "green" },
      { label: "Tailwindcss", color: "blue" },
      { label: "ThreeJS", color: "green" },
      { label: "UI/UX Design", color: "aqua" },
    ],
    links: [{ label: "Live Demo", variant: "blue" }],
  },
  {
    id: "2",
    title: "Geoportal Laut Berkah",
    image: "/projects/geoportal.png",
    description:
      "Platform related to permits for marine space utilization letters for the province of Central Kalimantan based on 3D.",
    tags: [
      { label: "React", color: "green" },
      { label: "Tailwindcss", color: "blue" },
      { label: "ThreeJS", color: "green" },
      { label: "UI/UX Design", color: "aqua" },
    ],
    links: [{ label: "Live Demo", variant: "blue" }],
  },
  {
    id: "3",
    title: "Pesta Warna Nada",
    image: "/projects/pwn.png",
    description:
      "Landing page for a music festival event called Pesta Warna Nada, which is held annually in Jakarta.",
    tags: [
      { label: "React", color: "green" },
      { label: "Tailwindcss", color: "blue" },
      { label: "ThreeJS", color: "green" },
      { label: "UI/UX Design", color: "aqua" },
    ],
    links: [{ label: "Live Demo", variant: "blue" }],
  },
  {
    id: "4",
    title: "Rebellum",
    image: "/projects/rebellum.png",
    description:
      "Rebellum is a platform that provides information and solutions related to juvenile delinquency in Indonesia.",
    tags: [
      { label: "React", color: "green" },
      { label: "Tailwindcss", color: "blue" },
      { label: "ThreeJS", color: "green" },
      { label: "UI/UX Design", color: "aqua" },
    ],
    links: [{ label: "Live Demo", variant: "blue" }],
  },
  {
    id: "5",
    title: "HealthySelf",
    image: "/projects/healthyself.jpeg",
    description:
      "Platform that provides information related to maintaining a healthy lifestyle for various groups, from babies to the elderly.",
    tags: [
      { label: "React", color: "green" },
      { label: "Tailwindcss", color: "blue" },
      { label: "ThreeJS", color: "green" },
      { label: "UI/UX Design", color: "aqua" },
    ],
    links: [{ label: "Live Demo", variant: "blue" }],
  },
  {
    id: "6",
    title: "E-Mading",
    image: "/projects/emading.png",
    description:
      "Digital wall magazine platform where school residents, including teachers and students, can post various activities such as posters and school announcements.",
    tags: [
      { label: "React", color: "green" },
      { label: "Tailwindcss", color: "blue" },
      { label: "ThreeJS", color: "green" },
      { label: "UI/UX Design", color: "aqua" },
    ],
    links: [{ label: "Live Demo", variant: "blue" }],
  },
];

export const DEV_SKILLS: Skill[] = [
  { label: "HTML / CSS", level: "Advanced", fillColor: "green" },
  { label: "JavaScript / TypeScript", level: "Advanced", fillColor: "blue" },
  { label: "C#/C++", level: "Intermediate", fillColor: "purple" },
  { label: "Python", level: "Intermediate", fillColor: "green" },
  { label: "Golang", level: "Beginner", fillColor: "aqua" },
];

export const FRAMEWORK_SKILLS: Skill[] = [
  { label: "Laravel", level: "Advanced", fillColor: "aqua" },
  { label: "NextJS", level: "Intermediate", fillColor: "blue" },
  { label: "Svelte", level: "Intermediate", fillColor: "green" },
  { label: "ThreeJS", level: "Intermediate", fillColor: "purple" },
  { label: "Vue", level: "Intermediate", fillColor: "blue" },
];

export const TOOLS: Tools[] = [
  { icon: <SiLaravel size={16} />, name: "Laravel" },
  { icon: <SiReact size={16} />, name: "React" },
  { icon: <SiNextdotjs size={16} />, name: "Next.js" },
  { icon: <SiSvelte size={16} />, name: "Svelte" },
  { icon: <SiThreedotjs size={16} />, name: "Three.js" },
  { icon: <SiBun size={16} />, name: "Bun" },
  { icon: <SiVuedotjs size={16} />, name: "Vue.js" },
  { icon: <SiDocker size={16} />, name: "Docker" },
  { icon: <SiLinear size={16} />, name: "Linear" },
  { icon: <SiTailwindcss size={16} />, name: "TailwindCSS" },
  { icon: <SiPostgresql size={16} />, name: "PostgreSQL" },
  { icon: <SiGit size={16} />, name: "Git " },
];

export const STATS: StatItem[] = [
  { value: "12", label: "Projects" },
  { value: "3yr", label: "Experience" },
];

export const NAV_ITEMS: NavItem[] = [
  { icon: "/img/icons/home.png", label: "Home", tabId: "home" },
  { icon: "/img/icons/folder.png", label: "My Projects", tabId: "projects" },
  { icon: "/img/icons/gear.png", label: "Skills", tabId: "skills" },
  { icon: "/img/icons/mail.png", label: "Contact Me", tabId: "contact" },
];

export const TABS = [
  {
    id: "home" as const,
    icon: "/img/icons/home.png",
    label: "Home",
    file: "index.html",
  },
  {
    id: "projects" as const,
    icon: "/img/icons/folder.png",
    label: "Projects",
    file: "projects.html",
  },
  {
    id: "skills" as const,
    icon: "/img/icons/gear.png",
    label: "Skills",
    file: "skills.html",
  },
  {
    id: "contact" as const,
    icon: "/img/icons/mail.png",
    label: "Contact",
    file: "contact.html",
  },
];

export const COMPETITION = [
  {
    icon: "🎓",
    title: 'UPN "Veteran" Jakarta',
    sub: "Computer Science, 2025 - Present",
  },
  {
    icon: "🏆",
    title: "2st Place - LKS Web Technologies Regional DKI Jakarta",
    sub: "Puspresnas · 2024",
  },
  {
    icon: "🏆",
    title: "2st Place - AWS C4 Web Design Regional DKI Jakarta",
    sub: "Sagasitas · 2024",
  },
  {
    icon: "🏆",
    title: "Best Design - AWS C4 Web Design Regional DKI Jakarta",
    sub: "Sagasitas · 2024",
  },
  {
    icon: "🏆",
    title:
      "1st Runner Up - Micro Influencer Gerakan Sekolah Sehat National Competition",
    sub: "Sagasitas · 2024",
  },
];
