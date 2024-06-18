import React, {useEffect, useState} from "react";
import {Question, QuestionSearchCriteria} from "../../../models/Question.ts";
import axios from "axios";
import UrlApiStorage from "../../../utils/UrlApiStorage.ts";
import AdminService from "../../../services/AdminService.ts";
import {notifications} from "@mantine/notifications";
import ErrorIcon from "@mui/icons-material/Error";
import {Page, Pageable} from "../../../models/Page.ts";
import {Accordion, Badge, Card, Container, Grid, Group, Skeleton, Text, rem} from "@mantine/core";
import AnnouncementIcon from '@mui/icons-material/Announcement';

const ListQuestionsAdmin : React.FC = () => {

    const [questions , setQuestion] = useState<Question[] |null>();

    useEffect(() => {

        const critere:QuestionSearchCriteria = {
            idType: 1 ,
        }

        const pageable : Pageable = {
            sort : "isInProgres,desc" , size: 5 , page: 0
        }

        const getQuestions = async () => {
            try {
                const response = await axios.get<Page<Question>>(UrlApiStorage.questionsGetAdmin , {
                    headers: {
                        'Authorization' : AdminService.basicAuth,
                        'Content-Type' : 'application/json'
                    } ,
                    params: {...critere , ...pageable }

                });

                const questions = response.data;
                console.log(questions)
                setQuestion(questions.content);

            } catch (error) {
                setQuestion(null);
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                const er = error.response, erMessage = error.message, erData = er.data, erDataMessage = er.data.message;
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

        getQuestions();

    }, []);

    return (
        <>
            <h1>Tables</h1>
            <Container my={"md"}>
                <Grid>
                    { questions? (
                        questions.map((q) => (
                            <Grid.Col key={q.id} span={{ base:12 , xs: 12 }}>
                                <Card shadow="sm" padding="lg" radius="md" withBorder>
                                    <Group justify={"space-between"}>
                                        <Text fw={500}>{q.question}qdqsdqsdqazeaz</Text>
                                        <Badge color={q.isInProgres ? "green" : "pink"}>
                                            {q.isInProgres ? "In Progress" : "Not In Progress"}
                                        </Badge>
                                    </Group>

                                    <Accordion mt={"sm"} variant="contained" defaultValue={"trueResponse"}>
                                        <Accordion.Item value="trueResponse">
                                            <Accordion.Control
                                                icon={
                                                    <AnnouncementIcon style={{ color: 'var(--mantine-color-red-6', width: rem(20), height: rem(20) }}/>
                                                }
                                            >
                                                True Response
                                            </Accordion.Control>
                                            <Accordion.Panel>Content</Accordion.Panel>
                                        </Accordion.Item>
                                    </Accordion>

                                    <Accordion mt={"sm"} variant="contained">
                                        <Accordion.Item value="photos">
                                            <Accordion.Control
                                                icon={
                                                <AnnouncementIcon style={{ color: 'var(--mantine-color-red-6', width: rem(20), height: rem(20) }}/>
                                                }
                                            >
                                                False Responses
                                            </Accordion.Control>
                                            <Accordion.Panel>Content</Accordion.Panel>
                                        </Accordion.Item>
                                    </Accordion>

                                    <Text >zeaze</Text>
                                </Card>
                            </Grid.Col>
                        ))
                    ) : (
                        <Skeleton height={140}/>
                    ) }

                </Grid>
            </Container>
        </>
    );
}

export default ListQuestionsAdmin;