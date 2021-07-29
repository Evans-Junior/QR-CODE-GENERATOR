import React from 'react'
import styled from "styled-components";
import { Button } from '@material-ui/core';

export default function Signup_login() {
    return (
        <Container>
        <Button variant="contained" color="primary">Login</Button>
        </Container>
    )
}

const Container = styled.div`
    Button{
        background-color: white;
        color:blueviolet;
        padding: 20px;
        height:10px;
        padding:20px;
    width: 120px;
    height: 20px;
cursor:pointer;

&:hover{
    background-color:#6467;
    font-weight: 800;
    color:white;
}  
    }
`;