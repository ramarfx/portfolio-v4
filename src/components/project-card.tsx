"use client";

import { Project } from "@/types/types";
import { Tag } from "./ui/tag";
import { GlossyButton } from "./ui/button";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  image: string;
  size?: "sm" | "md";
}

export function ProjectCard({ project, size = 'md' }: ProjectCardProps) {
  return (
    <div
      className="mb-2.5 flex flex-col md:flex-row overflow-hidden rounded-lg border border-blue-200/50 transition-all duration-150 hover:-translate-y-px"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.80) 0%, rgba(230,245,255,0.70) 50%, rgba(210,235,255,0.65) 100%)",
        boxShadow:
          "0 2px 6px rgba(0,80,200,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
      }}>
      {/* Thumbnail */}
      <div
        className={`relative overflow-hidden text-4xl ${size === "sm" ? "md:w-1/5" : "md:w-75"} w-full h-auto`}>
        <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/50 to-transparent" />
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-sky-300/40 to-transparent" />
        <Image
          alt="project image"
          src={`${project.image}`}
          width={200}
          height={200}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="flex-1 p-2.5">
        <p className="mb-0.5 text-[12px] font-bold text-blue-900">
          {project.title}
        </p>
        <p className="mb-2 text-[11px] leading-relaxed text-blue-700">
          {project.description}
        </p>
        <div className="mb-2 flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <Tag key={tag.label} color={tag.color}>
              {tag.label}
            </Tag>
          ))}
        </div>
        <div className="flex gap-1.5">
          {project.links.map((link) => (
            <GlossyButton key={link.label} variant={link.variant} size="sm" className="px-5">
              {link.label}
            </GlossyButton>
          ))}
        </div>
      </div>
    </div>
  );
}
