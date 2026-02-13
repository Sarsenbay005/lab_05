import type React from "react";
import type { User } from "./types";

interface UserCardProps {
    user: User;
    isActive?: boolean; // optional prop
    children: React.ReactNode;
}

export const UserCard = ({
    user,
    isActive = true,
    children,
}: UserCardProps) => {
    return (
        <div style={{ opacity: isActive ? 1 : 0.5, border: "1px solid #ccc", padding: 12, borderRadius: 8 }}>
            <h2>{user.name}</h2>
            <p>
                {user.email} | Age: {user.age}
            </p>

            {/* children арқылы Bio/Status секцияны сырттан салып береміз */}
            <div style={{ marginTop: 8 }}>{children}</div>
        </div>
    );
};
