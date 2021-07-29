import React from 'react'
import styled from 'styled-components';
import Introduction from"./Introduction";
import SLogin from "../Signup_login";
import Visitor from "./Visitor";
import Employer from "./Employer";
import SignUpHeader from "./reuseable/SignUPHeader";



export default function MainSignUp() {   
    
    return (
        <Container>
        <Need>
        <Signup>
        <Introduction/>
        <SignUpHeader/>
     {/* <Employer/>*/}
     {/* <Employee/>*/}

        </Signup>
        
        </Need>
            
        </Container>
    )
}

const Container= styled.div`
place-items: center;
height: 100vh;

`;

const Need =styled.div`
display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
`;


const Signup = styled.div`
margin-top: 50px;
height: 90vh;
  width: 90vw;
     text-align: center;
     display: flex;
    justify-content: center;
    
`;







// const org = styled.div`
// display: flex;
// justify-content: center;
//  align-items: center;
// `;
