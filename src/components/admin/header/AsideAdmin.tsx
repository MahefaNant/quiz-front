import {AppShell, Box, NavLink, ScrollArea} from "@mantine/core";
import React, {useState} from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import RouteName from "../../../utils/RouteName.ts";
import {useNavigate} from "react-router-dom";

const data = [
    { icon: DashboardIcon, label: 'Dashboard', description: 'Item with description', path: RouteName.adminDashboard },
    { icon: DashboardIcon, label: 'Manage Questions', description: 'and Responses', path: RouteName.adminDashboard },
];

const AsideAdmin : React.FC= () => {

    const [active, setActive] = useState(0);
    const navigate = useNavigate();
    const handleClick = (index : number , path: string) => {
        setActive(index);
        navigate(path);
    }

    const items = data.map((item, index) => (
        <NavLink
            href="#required-for-focus"
            key={item.label}
            active={index === active}
            label={item.label}
            description={item.description}
            leftSection={<item.icon fontSize={"small"} />}
            onClick={() => handleClick(index , item.path)}
        />
    ));

    return(
        <>
            <AppShell.Navbar p="md">
                <AppShell.Section>Navbar header</AppShell.Section>
                <AppShell.Section grow my="md" component={ScrollArea}>
                    {/*60 links in a scrollable section
                    {Array(60)
                        .fill(0)
                        .map((_, index) => (
                            <Skeleton key={index} h={28} mt="sm" animate={false} />
                        ))}*/}

                    <Box w={220}>{items}</Box>

                </AppShell.Section>
                <AppShell.Section>Navbar footer – always at the bottom</AppShell.Section>
            </AppShell.Navbar>
        </>
    )
}

export default AsideAdmin;