import React from "react";
import {Outlet} from "react-router-dom";
import {useDisclosure} from "@mantine/hooks";
import NavTopAdmin from "../../../components/admin/header/NavTopAdmin.tsx";
import AsideAdmin from "../../../components/admin/header/AsideAdmin.tsx";
import {AppShell} from "@mantine/core";

const AdminTemplate : React.FC = () => {

    const [opened, { toggle }] = useDisclosure();


    return (
        <>
            <AppShell
                header={{ height: 60 }}
                navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
                padding="md"
            >
                <NavTopAdmin opened={opened} toggle={toggle}/>
                <AsideAdmin />
                <AppShell.Main>
                    <Outlet />
                </AppShell.Main>
            </AppShell>
        </>
    );
}

export default AdminTemplate;