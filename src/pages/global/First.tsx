import { Button } from "@mantine/core";
import React from "react";
import {useNavigate} from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';

const First: React.FC = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/admin/login');
    };

    return(
        <>
            <h1>BOOM!</h1>
            <Button onClick={handleButtonClick} leftSection={<EmailIcon />} variant='default'>
                Email
            </Button>
        </>
    )
}

export default First;