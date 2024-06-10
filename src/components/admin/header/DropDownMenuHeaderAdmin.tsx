import {Menu, rem , Text} from "@mantine/core";
import React, {useEffect, useState} from "react";

import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from "react-router-dom";
import KeyStorage from "../../../utils/KeyStorage.ts";
import RouteName from "../../../utils/RouteName.ts";
import {modals} from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import axios from "axios";
import UrlApiStorage from "../../../utils/UrlApiStorage.ts";
import AdminService from "../../../services/AdminService.ts";
import ErrorIcon from "@mui/icons-material/Error";

const DropDownMenuHeaderAdmin : React.FC = () => {

    const idAdmin : string | null  = localStorage.getItem(KeyStorage.adminKey);
    const [admin , setAdmin] = useState<Admin | null>(null);

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

    useEffect(() => {
        const getAdmin = async () => {
            try {
                const response = await axios.get(UrlApiStorage.adminGet + idAdmin , {
                    headers: {
                        'Authorization' : AdminService.basicAuth,
                        'Content-Type' : 'application/json'
                    } ,
                });

                const admin = response.data;
                setAdmin(admin);
            } catch (error) {
                localStorage.removeItem(KeyStorage.adminKey);
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                const er = error.response;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                const erMessage = error.message;
                const erData = er.data;
                const erDataMessage = er.data.message;

                if (er && erData && erDataMessage) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    notifications.show({
                        title: 'Error !',
                        message: erDataMessage, // Récupérer le message de l'API
                        color: 'red',
                        icon: <ErrorIcon />,
                        withBorder: true
                    });
                } else {
                    // Si l'erreur n'est pas liée à la réponse de l'API, utilisez error.message
                    notifications.show({
                        title: 'System Error!',
                        message: erMessage,
                        color: 'red',
                        icon: <ErrorIcon />,
                        withBorder: true
                    });
                }
            }
        }

        (async () => {
            await getAdmin();
        })();
    }, [idAdmin]);



    return(
        <>
            <Menu.Dropdown>
                <Menu.Label>Admin</Menu.Label>
                <Menu.Item >
                    { admin?.mail }
                </Menu.Item>
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