import React from 'react';
import styled from "styled-components";

const Info='You can keep track on all your movements in and out the business. ';

export default function Introduction() {

    return (
        <Container>
            <Header><h5>Keep track of your movements</h5></Header>
            <Brief>{Info}</Brief>
        </Container>
    )
}


const Container = styled.div`
width:100%;
margin-top: auto;
margin-bottom: auto;
padding: 20px;
   height:70vh;
   border-radius:10px;
   background-color: #03254c;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
flex:0.3;
color: white;

`;

const Header = styled.div`
font-weight:700;
h5{
font-size: 19px;
 text-decoration: underline;
 
}
`;

const Brief = styled.div`
    font-weight:700;
`;

