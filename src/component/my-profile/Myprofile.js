import React, {useState} from 'react'
import styled from "styled-components"
import Mainbar from './Mainbar';
import Sidebar from './Sidebar';
import {db} from "../../firebase";

export default function Myprofile() {

 


    return (
        <Container>
            <Content>
              <Mainbar/>
              <Sidebar/>
            </Content>
        </Container>
    )
}

const Container = styled.div`
     display: grid;
  place-items: center;
  height: 100vh;
  
`;

const Content = styled.div`
display: flex;
background-color: #fff;
  margin-top: -50px;
  height: 90vh;
  width: 90vw;
  box-shadow: -1px 4px 20px -6px rgba(0,0,0,0.75);
`;