import React, {useState} from 'react'
import styled from "styled-components"
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import EditPage from "./Edit"


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

export default function Sidebar(props) {


  const [showcard,setShowcard]= useState("close")

    const classes = useStyles();

const handleClick =(e)=>{
  e.preventDefault();
  if (e.target !== e.currentTarget) {
    return;
  }
  switch(showcard){
    case "open":
      setShowcard("close");
        break ;
    case "close":
      setShowcard("open");
        break;
    default : 
        setShowcard("close");
        break;
  }
}

    return (
        <Container>
        <Content>
        <Image className={classes.root}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
        </Image>
        <Edit onClick={handleClick}>
            EDIT
        </Edit>
      
        </Content>
        <EditPage showcard={showcard} handleClick={handleClick}/>
    </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.45;
    justify-content:center;
    align-items:center;
`;

const Content = styled.div`
display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`;

const Image = styled.div`
 
`;

const Edit = styled.div`
cursor:pointer;
    .edit{
    color: rgb(24, 17, 27);
    text-decoration: none;
}

.edit:hover {
    color: rgb(41, 41, 172)
 }
`;