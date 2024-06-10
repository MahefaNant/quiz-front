import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import KeyStorage from "../../utils/KeyStorage.ts";

const AdminPrivate: React.FC = () => {
    const auth: { token: boolean } = { token: false };

    const adminIdString: string | null = localStorage.getItem(KeyStorage.adminKey);
    console.log(adminIdString + " azeazeazeaz");
    const adminId: number = adminIdString !== null && !isNaN(Number(adminIdString)) ? parseInt(adminIdString) : 0; // Check if it's not null and is a valid number
    if (adminId !== 0) auth.token = true; // Modified condition to check if adminId is not equal to 0

    if (!auth.token) {
        localStorage.removeItem(KeyStorage.adminKey);
    }
    auth.token = false;

    return (
        auth.token ? <Outlet /> : <Navigate to={'/'} />
    );
}

export default AdminPrivate;
