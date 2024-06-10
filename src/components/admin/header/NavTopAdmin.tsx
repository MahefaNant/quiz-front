import React, { useState} from "react";
import {AppShell, Burger, Button, Group, useMantineColorScheme} from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import AvatarMenuAdmin from "./AvatarMenuAdmin.tsx";

interface NavTopAdminProps {
    opened : boolean;
    toggle : () => void;
}

const NavTopAdmin: React.FC<NavTopAdminProps> = ({opened , toggle}) => {

    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const [icon, setIcon] = useState(colorScheme === 'light' ? <ModeNightOutlinedIcon /> : <WbSunnyOutlinedIcon />);

    const toggleTheme = () => {
        if (colorScheme === 'light') {
            setColorScheme('dark');
            setIcon(<WbSunnyOutlinedIcon  />);
        } else {
            setColorScheme('light');
            setIcon(<ModeNightOutlinedIcon />);
        }
    };

    return(
        <>
            <AppShell.Header>
                <Group h="100%" px="md" justify={"space-between"}>
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <MantineLogo size={30} />

                    <Group justify="flex-end">
                        <Button variant="default">First</Button>
                        <Button radius={"lg"} size={"xs"} variant={"default"} onClick={toggleTheme}>{icon}</Button>
                        <AvatarMenuAdmin />
                    </Group>

                </Group>

            </AppShell.Header>


        </>
    )
}

export default NavTopAdmin;