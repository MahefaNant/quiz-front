import {Navigate, Outlet} from "react-router-dom";
import React from "react";

interface PrivateSimpleProps {
    idName: string;
    urlToNavigate: string;
}


const PrivateSimple: React.FC<PrivateSimpleProps> = ({ idName, urlToNavigate }) => {
    const auth = { token: false };

    const id = localStorage.getItem(idName);
    if (id !== null) auth.token = true;

    return (
        auth.token ? <Outlet /> : <Navigate to={urlToNavigate} />
    );
}


export default PrivateSimple;