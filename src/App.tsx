import React from "react";
import {Route, Routes} from "react-router-dom";
import First from "./pages/global/First.tsx";
import RouteName from "./utils/RouteName.ts";
import LoginAdmin from "./pages/admin/LoginAdmin.tsx";
import KeyStorage from "./utils/KeyStorage.ts";
import PrivateSimple from "./pages/PrivateSimple.tsx";
import AdminDashbord from "./pages/admin/AdminDashbord.tsx";
import QuestionAdmin from "./pages/admin/QuestionAdmin.tsx";
import AdminTemplate from "./pages/admin/template/AdminTemplate.tsx";

const App:React.FC =() => {

    return (
        <>
            <Routes>
                <Route path={"/"} element={<First />} />

                <Route path={RouteName.loginAdmin} element={<LoginAdmin />}/>
                <Route path={RouteName.adminRoutes.racine} element={<AdminTemplate />}>
                    <Route element={<PrivateSimple idName={KeyStorage.adminKey} urlToNavigate={RouteName.loginAdmin} />}>
                        <Route path={RouteName.adminRoutes.dashboard} element={<AdminDashbord />}/>
                        <Route path={RouteName.adminRoutes.question} element={<QuestionAdmin />}/>
                    </Route>
                </Route>



            </Routes>
        </>
    );
}

export default App;
