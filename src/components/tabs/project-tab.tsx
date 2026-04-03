import { PROJECTS } from "@/data/data";
import { SectionBody } from "../ui/section-body";
import { SectionTitle } from "../ui/section-title";
import { ProjectCard } from "../project-card";

export function ProjectsTab() {
  return (
    <div>
      <SectionTitle>💼 My Projects</SectionTitle>
      <SectionBody>
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </SectionBody>
    </div>
  );
}