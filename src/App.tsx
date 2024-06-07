import React from "react";
import {Route, Routes} from "react-router-dom";
import First from "./pages/global/First.tsx";
import RouteName from "./utils/RouteName.ts";
import LoginAdmin from "./pages/admin/LoginAdmin.tsx";
import KeyStorage from "./utils/KeyStorage.ts";
import PrivateSimple from "./pages/PrivateSimple.tsx";
import AdminDashbord from "./pages/admin/AdminDashbord.tsx";

const App:React.FC =() => {

    return (
        <>
            <Routes>
                <Route path={"/"} element={<First />} />

                <Route path={RouteName.adminLogin} element={<LoginAdmin />}/>

                <Route element={<PrivateSimple idName={KeyStorage.adminKey} urlToNavigate={RouteName.adminLogin} />}>
                    <Route path={RouteName.adminDashboard} element={<AdminDashbord />}/>
                </Route>

            </Routes>
        </>
    );
}

export default App;
