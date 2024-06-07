import {Menu, rem , Text} from "@mantine/core";
import React from "react";

import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from "react-router-dom";
import KeyStorage from "../../../utils/KeyStorage.ts";
import RouteName from "../../../utils/RouteName.ts";
import {modals} from "@mantine/modals";
import { notifications } from "@mantine/notifications";

const DropDownMenuHeaderAdmin : React.FC = () => {
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem(KeyStorage.adminKey);
        navigate(RouteName.adminLogin);
    }
    const openLogOutModal = () =>
        modals.openConfirmModal({
            title: 'Log Out action',
            centered: true,
            children: (
                <Text size="sm">
                    Are you sure you want to Log Out?.
                </Text>
            ),
            labels: { confirm: 'Yes', cancel: "No" },
            confirmProps: { color: 'red' },
            onCancel: () => notifications.show({
                title: 'Log Out Canceled!',
                message: 'thank you for staying!',
                color: 'gray'
            }),
            onConfirm: () => {
                notifications.show({
                    title: 'Log Out successfully!',
                    message: 'see you !',
                    color: 'red'
                });
                logOut();
            },
        });




    return(
        <>
            <Menu.Dropdown>
                <Menu.Label>Application</Menu.Label>
                <Menu.Item leftSection={<SettingsIcon style={{ width: rem(14), height: rem(14) }} />}>
                    Settings
                </Menu.Item>

                <Menu.Item
                    leftSection={<SearchIcon style={{ width: rem(14), height: rem(14) }} />}
                    rightSection={
                        <Text size="xs" c="dimmed">
                            ⌘K
                        </Text>
                    }
                >
                    Search
                </Menu.Item>

                <Menu.Divider />

                <Menu.Label>Danger zone</Menu.Label>

                <Menu.Item
                    color="red"
                    leftSection={<LogoutIcon style={{ width: rem(14), height: rem(14) }} />}
                    onClick={openLogOutModal}
                >
                    Log Out
                </Menu.Item>
            </Menu.Dropdown>
        </>
    )
}

export default DropDownMenuHeaderAdmin;