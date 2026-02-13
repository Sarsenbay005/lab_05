import type React from "react";
import type { User } from "./types";

interface UserCardProps {
    user: User;
    children?: React.ReactNode;
}

export const UserCard = ({ user, children }: UserCardProps) => {
    return (
        <div style={{ border: "1px solid #ccc", padding: 12, borderRadius: 8, marginBottom: 10 }}>
            <h3 style={{ margin: 0 }}>{user.name}</h3>
            <p style={{ margin: "6px 0" }}>{user.email} | Age: {user.age}</p>
            {children}
        </div>
    );
};
