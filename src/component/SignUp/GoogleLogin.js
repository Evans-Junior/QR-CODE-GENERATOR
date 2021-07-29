import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../../firebase';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";

export default function GoogleLogin(props) {
  const history = useHistory();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((payload) =>{
            console.log(payload);
        })
        .catch((error)=>{
            alert(error.message)
        })
        .then(auth => {
                    history.push('/home')
                })
    }

    return (
        <Container>
         <Or>OR</Or>
            <Content>
                <Button onClick={()=>signIn()}>
                    Sign In With Google
                </Button>
            </Content>
        </Container>
    )
}



const Container = styled.div`
width:180px;
height: 300px;
margin-top: auto;
margin-bottom: auto;
   display:flex;
   justify-content: center;
   flex-direction: column;
   
`;

const Content = styled.p`
  Button{ margin-top: 10px;
    background-color: #0a8d48;
    color: white;
    border: none;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
    width:205px;
    min-width: 20px;
    min-height: 50px;

    &:hover{
        color: #0a8d48;
        background-color: white;
        transition: 163ms;
        font-weight: 900;
        background-color:rgba(0,0,0,0.08)

    }
  }
`

    const Or = styled.div`
   
 font-weight: 900;

`;