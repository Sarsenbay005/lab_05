import type { Skill, SkillLevel } from "./types";

interface SkillListProps {
    skills: Skill[];
}

const levelBadge = (level: SkillLevel) => {
    if (level === "Beginner") return "Beginner";
    if (level === "Intermediate") return "Intermediate";
    return "Expert";
};

export const SkillList = ({ skills }: SkillListProps) => {
    return (
        <ul>
            {skills.map((skill) => (
                <li key={skill.id}>
                    {skill.name} — {levelBadge(skill.level)}
                </li>
            ))}
        </ul>
    );
};
