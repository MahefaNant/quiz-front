import React from "react";
import {Avatar, Group, Menu, UnstyledButton} from "@mantine/core";
import DropDownMenuHeaderAdmin from "./DropDownMenuHeaderAdmin.tsx";

const AvatarMenuAdmin : React.FC = () => {

    const image: string = "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png";

    return(
        <>
            <Menu withArrow>
                <Menu.Target>
                    <UnstyledButton
                        style={{
                            padding: 'var(--mantine-spacing-md)',
                            color: 'var(--mantine-color-text)',
                            borderRadius: 'var(--mantine-radius-sm)',
                        }}
                    >
                        <Group>
                            <Avatar src={image} radius="xl" />
                        </Group>
                    </UnstyledButton>

                </Menu.Target>
                {/* ... menu items */}

                <DropDownMenuHeaderAdmin />

            </Menu>
        </>
    )
}

export default AvatarMenuAdmin;