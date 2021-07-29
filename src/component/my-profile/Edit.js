import React,{useState} from 'react'
import styled from "styled-components";
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import {useForm} from "react-hook-form";
import { db } from '../../firebase';


export default function Edit(props) {
    
    const reset =(e)=>{
        props.handleClick(e);  
    }

    return (
            <React.Fragment>
                { props.showcard === "open" &&
                    <Container>
            <Content>
            <Header><h2>EDIT</h2>
            <IconButton><CloseIcon onClick={(event)=>reset(event)}/></IconButton>
            </Header>
            <Body>
                <UserInfo>
                <Fieldhead>Update</Fieldhead>
                <Firstname>
                <Icon>
                <PersonIcon />
                </Icon>
               <Inputname>Full Name :</Inputname><Inputfield><input className="type"/></Inputfield>
                </Firstname>
                <Firstname>
                <img className="call" src="/images/call.png" alt=""/><Inputname>Phone No :</Inputname>
                </Firstname>
                <Firstname>
                <Icon><EmailOutlinedIcon style={{ fontSize: 30 }}/></Icon><Inputname>Email :</Inputname>
                </Firstname>
                <Firstname>
                <Icon><img className="call" src="/images/padlock.png" alt=""/></Icon><Inputname>Password :</Inputname>
                </Firstname>
                </UserInfo>
            </Body>
            </Content>
            
        </Container>
                }
            </React.Fragment>
        
    )
}

const Container = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:9999;
color:black;
background-color:rgba(0,0,0,0.8);
`; 

const Content = styled.div`
width:100%;
max-width:552px;
background-color: white;
max-height:90%;
overflow:initial;
border-radius:5px;
position:relative;
display:flex;
flex-direction:column;
top:32px;
margin:0 auto;
`; 

const Header = styled.div`
display: block;
padding: 16px 20px;
border-bottom: 1px solid rgba(0,0,0,0,15);
font-size:16px;
line-height:1.5;
color:rgba(0,0,0,0.6);
font-weight:400;
display:flex;
justify-content:space-between;
align-items:center;
padding-bottom:0px;
`; 
const Body = styled.div`
display:flex;
flex-direction: column;
flex-grow:1;
overflow-y:auto;
vertical-align:baseline;
background:transparent;
padding:8px 12px;
`; 

const UserInfo = styled.div`
display:flex;
padding:8px 12px;
flex-direction:column;
`; 

const Firstname = styled.div`
display:flex;
flex-grow:1;
overflow-y:auto;
vertical-align:baseline;
background:transparent;
padding: 8px 12px;
.call{
    width:20px;
    height:20px;
    margin-top: 2px;
}
`;

const Inputname = styled.span`
font-weight: 600;
font-size:16px;
line-height:1.5;
margin-left:5px;

`;

const Icon = styled.div`
margin-top:-5px;
`;

const Inputfield = styled.div`
    margin-left:20px;
    input{
        width: 300px;
    }
`;

const Fieldhead = styled.h4`
display:flex;
justify-content:center;
color: #0d47a1;
margin-bottom:20px
`;