import {Navigate, Outlet} from "react-router-dom";
import React from "react";

interface PrivateSimpleProps {
    idName: string;
    urlToNavigate: string;
}


const PrivateSimple: React.FC<PrivateSimpleProps> = ({ idName, urlToNavigate }) => {
    const auth = { token: false };

    const idString: string | null = localStorage.getItem(idName);

    auth.token = (idString != "undefined" && idString !== null);

    if (!auth.token) {
        localStorage.removeItem(idName);
    }

    return (
        auth.token ? <Outlet /> : <Navigate to={urlToNavigate} />
    );
}


export default PrivateSimple;