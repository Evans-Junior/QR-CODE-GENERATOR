import React, {useState,useEffect} from 'react'
import styled from "styled-components";
import PersonIcon from '@material-ui/icons/Person';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
 import {auth,db} from "../../firebase";
import EditName from "./edits/EditName";
import Qrcode from '../Qrcode';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  
 

export default function Mainbar() {

   const [nameCard,setNameCard] = useState("close");
   const [dataId,setDataId]=useState([]);
   


//readIds(db.collection('visitor'),[])

//     useEffect(()=>{
//        db.collection("visitor")doc(id).get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
        
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });

//    },[]);

    // useEffect(() => {
    //     db.collection('visitor')
    //       .orderBy('timestamp', 'asc') // optional
    //       .onSnapshot((snapshot) => {
    //         setReaddata(
    //             snapshot.docs.map((doc) => {
    //                 return {id:doc.id, name:doc.data().fullName, email:doc.data().email, phone:doc.data().phoneN, password:doc.data().password}
    //             })
    //         );
    //     });
    // }, []);

    //   console.log(readdata)
    //   console.log(readdata.name)

    const classes = useStyles();
//     var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
// starCountRef.on('value', (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });
useEffect(() => {
    auth
 .onAuthStateChanged(function(user) {
  if (user) {
      db.collection('visitor').doc(`${user.uid}`).get()
      .then(snapshot => {
        setDataId({
            name: snapshot.data().fullName,
         
            email: snapshot.data().email,
            phoneNumber: snapshot.data().phoneN,
         
        })
      })
  }});
}, []);
console.log(dataId)



// const user =  db.doc(`visitor/${uid}`)

 
//  }, [])
// console.log(dataId)
const handleClickName =(e)=>{
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    switch(nameCard){
      case "open":
        setNameCard("close");
          break ;
      case "close":
        setNameCard("open");
          break;
      default : 
      setNameCard("close");
          break;
    }
  }

    return (
        <Container>
            <Content>
            <UserInfo>
            <Fieldhead>Info</Fieldhead>
            <Field>
            <Firstname>
            <Icon>
            <PersonIcon />
            </Icon>
           <Inputname>Full Name :</Inputname>
                   <Text>{dataId.name}</Text>
           <Editbutton onClick={handleClickName} className={classes.root}><Click onClick={handleClickName}>
           <Button onClick={handleClickName} size="small" variant="outlined" >
           <Click onClick={handleClickName}>Edit</Click>
         </Button>
           </Click></Editbutton>
            </Firstname>
            </Field>
            <Field>
            <Firstname>
            <img className="call" src="/images/call.png" alt=""/><Inputname>Phone No :</Inputname>
                
                  <Text>{dataId.phoneNumber}</Text>
            <Editbutton className={classes.root}><Button size="small" variant="outlined" >
            <Click onClick={handleClickName}>Edit</Click>
         </Button></Editbutton>
            </Firstname>
            </Field>
            <Field>
            <Firstname className="middle">
            <Icon><EmailOutlinedIcon style={{ fontSize: 27 }}/></Icon><Inputname>Email :</Inputname>
               <Text>{dataId.email}</Text>
            <Editbutton className= "{classes.root} fix"><Button size="small" variant="outlined" >
            <Click onClick={handleClickName}>Edit</Click>
         </Button></Editbutton>
            </Firstname>
            </Field>
           
            </UserInfo>
            </Content>
            <EditName nameCard={nameCard} handleClick={handleClickName}/>
        </Container>
    )
}

const Container = styled.div`
display: flex;
    flex-direction: column;
    flex: 0.6;
`;

const Content = styled.div`
display: flex;
justify-content:center;
align-items:center;
flex:1;
`;

const UserInfo = styled.div`
display:flex;
justify-content:center;
background-color: whitesmoke;
flex-direction:column;
width:500px;
height:auto;
border-radius:10px;
padding:30px;
`;

const Fieldhead = styled.div`
font-weight:1000;
align-items:center;
display:flex;
justify-content:center;
`;

const Field = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
margin-top:10px;
`;

const Firstname = styled.div`
display:flex;
justify-content:center;
align-items:center;
.call{
    width:18px;
}
.callone{
    width:24px;
}

`;

const Icon = styled.div`

`;
const Inputname = styled.small`

`;

const Click = styled.div`

`;

const Text = styled.strong`
margin-left:30px;
margin-right:30px;

`;

const Editbutton = styled.strong`
.fix{
   margin-right:2px;
}
`;