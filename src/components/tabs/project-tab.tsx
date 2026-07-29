import { PROJECTS } from "@/data/data";
import { SectionBody } from "../windows/ui/section-body";
import { SectionTitle } from "../windows/ui/section-title";
import { ProjectCard } from "../project-card";

export function ProjectsTab() {
  return (
    <div>
      <SectionTitle>My Projects</SectionTitle>
      <SectionBody>
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} image={p.image} />
        ))}
      </SectionBody>
    </div>
  );
}