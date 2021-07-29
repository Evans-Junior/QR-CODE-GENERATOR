import React from 'react'
import styled from "styled-components"
import Subheader from "./Header"
import Mainheader from "./BodyHeader";
import { auth } from '../firebase';
import  {useHistory} from "react-router-dom"


export default function Home() {
    const history = useHistory();
    
    // auth
    // .onAuthStateChanged(function(user) {
    //  if (user) {
       
    //  }else{
    //     auth.signOut()
    //     .then(auth => {
    //         history.push('/login')
    //     })
    //  }
    // });

    // auth.signOut()
    //     .then(auth => {
    //         history.push('/login')
    //     })

    return (
        <Homestyles>
            <Mainheaderstyle>Header</Mainheaderstyle>
            <Body>
            <Subheader/>
            </Body>
        </Homestyles>
    )
}

const Homestyles =styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`;

const Mainheaderstyle = styled.div`

`;

const Body = styled.div`

`;
