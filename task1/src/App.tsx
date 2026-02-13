import { UserCard } from "./UserCard";
import { SkillList } from "./SkillList";
import type { Skill, User } from "./types";

export default function App() {
  const user: User = {
    name: "Bigazy Avdanov",
    email: "bigazy@mail.com",
    age: 20,
  };

  const skills: Skill[] = [
    { id: 1, name: "React", level: "Intermediate" },
    { id: 2, name: "TypeScript", level: "Beginner" },
    { id: 3, name: "Git", level: "Intermediate" },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>Lab 5.1 — User Profile (TS)</h1>

      <UserCard user={user} isActive={true}>
        <p><b>Status:</b> Active ✅</p>
        <p><b>Bio:</b> Мен react пен ts жасап жатрм.</p>
      </UserCard>

      <h3 style={{ marginTop: 16 }}>Skills</h3>
      <SkillList skills={skills} />
    </div>
  );
}
