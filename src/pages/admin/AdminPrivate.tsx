import { Navigate, Outlet } from "react-router-dom";
import React from "react";

const AdminPrivate: React.FC = () => {
    const auth: { token: boolean } = { token: false };

    const adminId = localStorage.getItem('adminId');
    if (adminId !== null) auth.token = true;

    return (
        auth.token ? <Outlet /> : <Navigate to={'/'} />
    );
}

export default AdminPrivate;
