import React, {useState} from "react";
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button, Image, Center,
} from '@mantine/core';
import Logo from "/logo.png" ;
import {useNavigate} from "react-router-dom";
import { notifications } from '@mantine/notifications';
import UrlApiStorage from "../../utils/UrlApiStorage.ts";
import KeyStorage from "../../utils/KeyStorage.ts";
import AdminService from "../../services/AdminService.ts";
import axios from "axios";
import DoneIcon from '@mui/icons-material/Done';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import RouteName from "../../utils/RouteName.ts";

const LoginAdmin: React.FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form  = e.target as HTMLFormElement;
        const formData : FormData = new FormData(form);
        const data = {
            mail: formData.get('mail'),
            password: formData.get('password')
        }

        setLoading(true);

        try {
            const response = await axios.post(UrlApiStorage.adminLogin ,  data , {
                headers: {
                    'Authorization' : AdminService.basicAuth,
                    'Content-Type' : 'application/json'
                } ,
            });

            const messageMod = response.data;

            if (messageMod.num === 1) {
                notifications.show({
                    title: 'Login successful.',
                    message: messageMod.message,
                    color: 'green',
                    icon: <DoneIcon />
                })
                localStorage.setItem(KeyStorage.adminKey , messageMod.num);
                setLoading(false);
                navigate(RouteName.adminDashboard);
            } else {
                notifications.show({
                    title: 'Login failed.',
                    message: messageMod.message,
                    color: 'red',
                    icon: <ErrorIcon /> ,
                    withBorder: true
                });
            }

        } catch (error) {
            notifications.show({
                title: 'Login failed.',
                message: '(Bad Error)',
                icon: <WarningIcon /> ,
                color: 'yellow',
                style: {background: 'yellow'},
                withBorder: true ,
            });

        } finally {
            setLoading(false);
        }
    }

    return(
        <>
            <Container size={420} my={40}>
                <Center>
                    <Image w={"80px"} radius={"md"} src={Logo}/>
                </Center>
                <Title ta="center" >
                    QUIZ-MAH!
                </Title>
                <Text c="dimmed" size="sm" ta="center" mt={5}>
                    Do not have an account yet?{' '}
                    <Anchor size="sm" component="button">
                        Create account
                    </Anchor>
                </Text>

                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <form onSubmit={handleSubmit}>
                        <TextInput name={"mail"} label="Email" placeholder="you@gmail.com" required />
                        <PasswordInput name={"password"} label="Password" placeholder="Your password" required mt="md" />
                        <Group justify="space-between" mt="lg">
                            <Checkbox label="Remember me" checked />
                            <Anchor component="button" size="sm">
                                Forgot password?
                            </Anchor>
                        </Group>
                        <Button loading={loading} type={"submit"} fullWidth mt="xl">
                            Sign in
                        </Button>
                    </form>
                </Paper>
            </Container>
        </>
    )
}

export default LoginAdmin;