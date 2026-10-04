import type { Project, Skill, NavItem, StatItem, Tools } from "@/types/types";
import {
  SiBun,
  SiDocker,
  SiGit,
  SiLaravel,
  SiLinear,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiSvelte,
  SiTailwindcss,
  SiThreedotjs,
  SiVuedotjs,
} from "@icons-pack/react-simple-icons";

export const PROJECTS: Project[] = [
  {
    id: "9",
    title: "BEM UPNVJ Company Profile",
    image: "/projects/bemupnvj.webp",
    description:
      "Official company profile website of BEM UPNVJ, the student executive board of UPN \"Veteran\" Jakarta, serving as its public hub for organizational profile, programs, documents, press releases, and volunteer opportunities.",
    tags: [
      { label: "Astro", color: "green" },
      { label: "UI/UX Design", color: "aqua" },
    ],
    links: [{ label: "Live Demo", variant: "blue", href: "https://bemupnvj.id" }],
  },
  {
    id: "7",
    title: "SIERA",
    image: "/projects/siera.png",
    description:
      "A comprehensive platform built for PATRIBERA that centralizes information management, simplifies participant tracking, and optimizes user registration and certification workflows.",
    tags: [
      { label: "React Vite+", color: "blue" },
      { label: "Tailwindcss", color: "blue" },
      { label: "TypeScript", color: "blue" },
      { label: "Hono", color: "blue" },
    ],
    links: [{ label: "View Platform", variant: "blue", href: "https://siera.veterantech.id" }],
  },
  {
    id: "1",
    title: "Inditech Company Profile",
    image: "/projects/inditech.webp",
    description:
      "A unique and interactive 3D-based company profile website for PT. Indi Technology, integrated with a day and night cycle system.",
    tags: [
      { label: "React", color: "green" },
      { label: "Tailwindcss", color: "blue" },
      { label: "ThreeJS", color: "green" },
      { label: "UI/UX Design", color: "aqua" },
    ],
    links: [{ label: "Live Demo", variant: "blue", href: "https://web.indi.tech" }],
  },
  {
    id: "4",
    title: "Lombakan",
    image: "/projects/lombakan.webp",
    description:
      "Lombakan is a mentoring program from KSM VeteranTech UPN Veteran Jakarta to help students prepare for GEMASTIK, technology competitions, and business competitions with experienced mentors.",
    tags: [
      { label: "Next.js", color: "green" },
      { label: "Tailwindcss", color: "blue" },
    ],
    links: [{ label: "Live Demo", variant: "blue", href: "https://lombakan.id" }],
  },
  {
    id: "2",
    title: "Geoportal Laut Berkah",
    image: "/projects/geoportal.webp",
    description:
      "Platform related to permits for marine space utilization letters for the province of Central Kalimantan based on 3D.",
    tags: [
      { label: "React", color: "green" },
      { label: "Tailwindcss", color: "blue" },
      { label: "ThreeJS", color: "green" },
      { label: "UI/UX Design", color: "aqua" },
    ],
    links: [
      { label: "Live Demo", variant: "blue", href: "https://geoportal-lautberkah.kalteng.go.id" },
    ],
  },
  {
    id: "8",
    title: "Papualoka",
    image: "/projects/papualoka.png",
    description:
      "A dedicated website built to introduce and promote the rich cultural heritage of Papua to a wider audience.",
    tags: [
      { label: "React", color: "green" },
      { label: "Tailwindcss", color: "blue" },
      { label: "UI/UX Design", color: "aqua" },
    ],
    links: [{ label: "View Website", variant: "blue", href: "https://papualoka.id" }],
  },
  {
    id: "3",
    title: "Pesta Warna Nada",
    image: "/projects/pwn.webp",
    description:
      "Landing page for a music festival event called Pesta Warna Nada, which is held annually in Jakarta.",
    tags: [
      { label: "React", color: "green" },
      { label: "Tailwindcss", color: "blue" },
      { label: "ThreeJS", color: "green" },
      { label: "UI/UX Design", color: "aqua" },
    ],
    links: [{ label: "Live Demo", variant: "blue", href: "https://pestawarnanada.com" }],
  },
  {
    id: "5",
    title: "Rebellum",
    image: "/projects/rebellum.webp",
    description:
      "Rebellum is a platform that provides information and solutions related to juvenile delinquency in Indonesia.",
    tags: [
      { label: "React", color: "green" },
      { label: "Tailwindcss", color: "blue" },
      { label: "ThreeJS", color: "green" },
      { label: "UI/UX Design", color: "aqua" },
    ],
    links: [{ label: "Live Demo", variant: "blue", href: "https://rebellum.vercel.app" }],
  },
  {
    id: "6",
    title: "HealthySelf",
    image: "/projects/healthyself.webp",
    description:
      "Platform that provides information related to maintaining a healthy lifestyle for various groups, from babies to the elderly.",
    tags: [
      { label: "React", color: "green" },
      { label: "Tailwindcss", color: "blue" },
      { label: "ThreeJS", color: "green" },
      { label: "UI/UX Design", color: "aqua" },
    ],
    links: [{ label: "Live Demo", variant: "blue", href: "https://healthyself.vercel.app" }],
  },
];

export const EXPERIENCES = [
  {
    icon: "/img/icons/system-information.webp",
    title: "PT. GRAVIX",
    sub: "Fullstack Developer | Aug 2024 - May 2025",
  },
  {
    icon: "/img/icons/system-information.webp",
    title: "PT. Hexagon",
    sub: "Backend Developer Intern | Sep 2024 - Nov 2024",
  },
  {
    icon: "/img/icons/system-information.webp",
    title: "Indi Technology",
    sub: "Fullstack Developer Intern | Mar 2024 - Nov 2024",
  },
  {
    icon: "/img/icons/system-information.webp",
    title: "Freelance",
    sub: "Software Developer | Present",
  },
];

export const PERSONAL_SKILLS: Skill[] = [
  { label: "Indonesian Language", level: "Native", fillColor: "green" },
  { label: "English Language", level: "Intermediate", fillColor: "blue" },
  { label: "Problem Solving", level: "Advanced", fillColor: "purple" },
  { label: "Team Collaboration", level: "Advanced", fillColor: "aqua" },
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
  { icon: "/img/icons/home.webp", label: "Home", tabId: "home" },
  { icon: "/img/icons/folder.webp", label: "My Projects", tabId: "projects" },
  { icon: "/img/icons/gear.webp", label: "Skills", tabId: "skills" },
  { icon: "/img/icons/mail.webp", label: "Contact Me", tabId: "contact" },
];

export const TABS = [
  {
    id: "home" as const,
    icon: "/img/icons/home.webp",
    label: "Home",
    file: "index.html",
  },
  {
    id: "projects" as const,
    icon: "/img/icons/folder.webp",
    label: "Projects",
    file: "projects.html",
  },
  {
    id: "skills" as const,
    icon: "/img/icons/gear.webp",
    label: "Skills",
    file: "skills.html",
  },
  {
    id: "contact" as const,
    icon: "/img/icons/mail.webp",
    label: "Contact",
    file: "contact.html",
  },
];

export const EDUCATION = [
  {
    icon: "/img/icons/home.webp",
    title: 'Universitas Pembangunan Nasional "Veteran" Jakarta',
    sub: "Bachelor's Degree of Computer Science, Informatics | 2025 - Present",
  },
];

export const COMPETITION = [
  {
    icon: "/img/icons/gear.webp",
    title: "2nd Place | LKS Web Technologies, Regional DKI Jakarta",
    sub: "Puspresnas - 2024",
  },
  {
    icon: "/img/icons/gear.webp",
    title: "2nd Place | AWS C4 Web Design, Regional DKI Jakarta",
    sub: "Sagasitas - 2024",
  },
  {
    icon: "/img/icons/system-information.webp",
    title: "Best Design | AWS C4 Web Design, Regional DKI Jakarta",
    sub: "Sagasitas - 2024",
  },
  {
    icon: "/img/icons/gear.webp",
    title: "1st Runner Up | Micro Influencer Gerakan Sekolah Sehat, National",
    sub: "Sagasitas - 2024",
  },
];
