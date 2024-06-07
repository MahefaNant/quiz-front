import React from "react";
import NavTopAdmin from "../../components/admin/header/NavTopAdmin.tsx";
import AsideAdmin from "../../components/admin/header/AsideAdmin.tsx";
import {AppShell} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";

const AdminDashbord: React.FC = () => {

    const [opened, { toggle }] = useDisclosure();

    return (
        <>
            <h1>Dashboard admin</h1>
            <AppShell
                header={{ height: 60 }}
                navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
                padding="md"
            >
                <NavTopAdmin opened={opened} toggle={toggle}/>
                <AsideAdmin />
                <AppShell.Main pt={0} >aze</AppShell.Main>
            </AppShell>


            {/*<NavTopAdmin />*/}
        </>
    )
}

export default AdminDashbord;