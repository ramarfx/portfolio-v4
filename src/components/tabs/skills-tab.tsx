import {
  COMPETITION,
  DEV_SKILLS,
  FRAMEWORK_SKILLS,
  TOOLS,
} from "@/data/data";
import { SectionBody } from "../ui/section-body";
import { SectionTitle } from "../ui/section-title";
import { SkillBar } from "../skillbar";
import { Tag } from "../ui/tag";

export function SkillsTab() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-2.5 mb-2.5">
        <div>
          <SectionTitle>Language Skills</SectionTitle>
          <SectionBody>
            {DEV_SKILLS.map((s) => (
              <SkillBar key={s.label} skill={s} />
            ))}
          </SectionBody>
        </div>
        <div>
          <SectionTitle>Laravel Skills</SectionTitle>
          <SectionBody>
            {FRAMEWORK_SKILLS.map((s) => (
              <SkillBar key={s.label} skill={s} />
            ))}
          </SectionBody>
        </div>
      </div>

      <SectionTitle>Tools & Technologies</SectionTitle>
      <SectionBody>
        <div className="flex flex-wrap gap-1.5">
          {TOOLS.map((t, i) => (
            <Tag key={i} color="blue" className="flex gap-1.5 items-center">
              {t.icon}
              {t.name}
            </Tag>
          ))}
        </div>
      </SectionBody>

      <SectionTitle>Education & Competitions</SectionTitle>
      <SectionBody>
        {COMPETITION.map(({ icon, title, sub }) => (
          <div
            key={title}
            className="flex items-start gap-2.5 border-b border-blue-200/25 py-1.5 text-[11px] last:border-0">
            <span className="text-lg">{icon}</span>
            <div>
              <p className="font-bold text-blue-900">{title}</p>
              <p className="text-blue-600">{sub}</p>
            </div>
          </div>
        ))}
      </SectionBody>
    </div>
  );
}
