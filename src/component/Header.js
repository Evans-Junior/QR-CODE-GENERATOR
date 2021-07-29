import React,{useState} from 'react'
import styled from "styled-components";
import Profile from "./my-profile/Myprofile";
import About from "./About";
import Id from "./Qrcode";
import Records from "./Record";
import {auth} from "../firebase";
import  {useHistory} from "react-router-dom"



const Header =(props)=>{
    const history = useHistory();

    const logOut=()=>{
        auth.signOut()
        .then(auth => {
            history.push('/login')
        })
    }


const [active,setActive]= useState("0");

    return (
        <Main>
            <Container>
                <Content>
               {/* <Logo>
                    <a href="">
                        <img src="/images/home-logo.svg" alt=""/>
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type="text" placeholder="Search" />
                    </div>
                        <SearchIcon> 
                            <img src="/images/search-icon.svg" alt=""/>
                       </SearchIcon>
                </Search> */}
                <Nav>
                <NavListWrap>
                    <NavList className="active first" onClick={()=>setActive("0")}>
                        <li>
                            <img src="/images/nav-home.svg" alt=""/>
                            <span >My Profile</span>
                        </li>
                    </NavList>
                    <NavList className="active second" onClick={()=>setActive("1")}>
                        <li>
                            <img src="/images/nav-network.svg" alt=""/>
                            <span >Records</span>
                        </li>
                    </NavList>
                    <NavList className="active third" onClick={()=>setActive("2")}>
                        <li>
                            <img src="/images/nav-network.svg" alt=""/>
                            <span >Get QR-Code</span>
                        </li>
                    </NavList>
                    <NavList className="active fouth" onClick={()=>setActive("3")}>
                        <li>
                            <img src="/images/nav-network.svg" alt=""/>
                            <span >About</span>
                        </li>
                    </NavList>
                   {/* <NavList>
                        <a href="">
                            <img src="/images/nav-jobs.svg" alt=""/>
                            <span>Jobs</span>
                        </a>
                    </NavList>
                    <NavList>
                        <a href="">
                            <img src="/images/nav-messaging.svg" alt=""/>
                            <span>Messaging</span>
                        </a>
                    </NavList>
                    <NavList>
                        <a href="">
                            <img src="/images/nav-notifications.svg" alt=""/>
                            <span></span>
                        </a>
                    </NavList>*/}
                    <User onClick={logOut}><a>
                        <span>Exit
                        <img src="images/down-icon.svg" alt=""/>
                        </span>
                        </a>
                    <SignOut>
                        <a>
                            SignOut
                        </a>
                    </SignOut>
                    </User>
                   {/* <Work>
                    <a href="">
                        <img src="/images/nav-work.svg" alt=""/>
                        <span>Work
                        <img src="/images/down-icon.svg" alt=""/>
                        </span>
                    </a>
                    </Work>*/}
                </NavListWrap>
                </Nav>
                </Content>
            </Container>
            <Seen>
              {active==="0" && <Profile/>}
              {active==="3" && <About/>}
              {active==="2" && <Id/>}
               {active==="1" && <Records/>}
            </Seen>
              
    </Main>
    );
    }

export default Header; 

const Main = styled.div`

`;

const Container = styled.div`
background-color: white;
border-bottom: 1px solid rgba(0,0,0, 0.08); 
top: 0;
z-index: 100;
display: flex;
justify-content: center;
align-items:center;
`

const Content = styled.div`
    margin:0 auto;
    min-height:100%;
    max-width:1128px;
    align-items:center;
`

// const Logo = styled.span`
//     margin-right: 8px;
//     font-size:0px;
// `

   

const Nav = styled.nav`

display: block;
@media(max-width:768px){
    position: fixed;
    left: 0;
    bottom: 0;
    top:0;
    background:white;
    width:100%;
} 
`;

const NavListWrap = styled.ul`
display: flex;
flex-wrap: nowrap;
list-style-type: none;
margin-left:-35px;


.active{
        span:after{
            content: "";
            transform: scaleX(1);
            border-bottom: 2px solid var(--white, #fff);
            bottom: 0;
            left: 0;
            position: absolute;
            transition: transform 0.2s ease-ease-in-out;
            width:100%;
            border-color:rgba(0,0,0,0.9);
        }
    }
    .first{
        span:after{
            transform:scale(0,1);
            transform: transform 0.2s ease;

        }
        span:hover:after{
            transform: scale(1,1);
            transform: transform 0.1s ease;
        }
    }

    .second{
        span:after{
            transform:scale(0,1);
             transform: transform 0.3s ease;

        }
        span:hover:after{
            transform: scale(1,1);
        }
    }
    .third{
        span:after{
            transform:scale(0,1);
             transform: transform 0.3s ease;

        }
        span:hover:after{
            transform: scale(1,1);
        }
    }
    .fouth{
        span:after{
            transform:scale(0,1);
             transform: transform 0.3s ease;

        }
        span:hover:after{
            transform: scale(1,1);
        }
    }
    
`;

const NavList = styled.li`
display: flex;
align-items: center;
flex-direction: column;
margin-left: 50px;
cursor:pointer;
a{
    align-items: center;
    background: transparent;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span{
        color:rgba(0,0,0,0.6);
        display: flex;
        align-items: center;
    }
    @media(max-width: 768px){
        min-width: 70px;
    }
}
&:hover,
&.active {
    li{
        span{
            color: rgba(0,0,0,0.9);  
        }
    }
}

background: transparent;
font-size:12px;
font-weight: 400;
justify-content: center;
line-height: 1.5;
min-height: 42px;
min-width: 80px;
position: relative;
text-decoration: none;
`;

const SignOut = styled.div`
position:absolute;
top:45px;
background: white;
border-radius: 0 0 5px 5px;
width:100px;
height: 40px;
font-size: 16px;
transition-duration: 167ms;
text-align: center;
display:none;

`;

const User = styled(NavList)`
display: flex;


a> svg{
    width:24px;
    border-radius: 50%;
}
a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
} 

span{
    display: flex;
    align-items: center;
}

&:hover{
    ${SignOut}{
        align-items: center;
        display:flex;
        justify-content: center;
    }
}
`;

// const Work = styled(User)`
// border-left: 1px solid rgba(0,0,0,0.08);
// `;


const Seen=styled.div`

`;