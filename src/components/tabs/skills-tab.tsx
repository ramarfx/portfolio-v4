import { DESIGN_SKILLS, DEV_SKILLS, TOOLS } from "@/data/data";
import { SectionBody } from "../ui/section-body";
import { SectionTitle } from "../ui/section-title";
import { SkillBar } from "../skillbar";
import { Tag } from "../ui/tag";

export function SkillsTab() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2.5 mb-2.5">
        <div>
          <SectionTitle>🎨 Design Skills</SectionTitle>
          <SectionBody>
            {DESIGN_SKILLS.map((s) => (
              <SkillBar key={s.label} skill={s} />
            ))}
          </SectionBody>
        </div>
        <div>
          <SectionTitle>💻 Dev Skills</SectionTitle>
          <SectionBody>
            {DEV_SKILLS.map((s) => (
              <SkillBar key={s.label} skill={s} />
            ))}
          </SectionBody>
        </div>
      </div>

      <SectionTitle>🛠 Tools & Technologies</SectionTitle>
      <SectionBody>
        <div className="flex flex-wrap gap-1.5">
          {TOOLS.map((t) => (
            <Tag key={t} color="blue">{t}</Tag>
          ))}
        </div>
      </SectionBody>

      <SectionTitle>🎓 Education & Certifications</SectionTitle>
      <SectionBody>
        {[
          { icon: "🏆", title: "1st Place - AWS C4 Web Design DKI Jakarta", sub: "Sagasitas · 2024" },
        ].map(({ icon, title, sub }) => (
          <div
            key={title}
            className="flex items-start gap-2.5 border-b border-blue-200/25 py-1.5 text-[11px] last:border-0"
          >
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