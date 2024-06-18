import React, { useState} from "react";
import {AppShell, Burger, Button, Group, useMantineColorScheme, Title, Avatar} from '@mantine/core';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import AvatarMenuAdmin from "./AvatarMenuAdmin.tsx";
import Logo from "/logo.png" ;

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
                    <Group  align="center" mt={-9}>
                        <Avatar size={50} radius={26} src={Logo} />
                        <Title size={"h3"} order={3} fw={700}>QUIZ-MAH</Title>
                    </Group>

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