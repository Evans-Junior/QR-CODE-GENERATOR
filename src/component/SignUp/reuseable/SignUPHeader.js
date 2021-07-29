import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Employee from "../Employee";
import Employer from "../Employer";
import styled from "styled-components";
import {useForm} from "react-hook-form";
import { db } from '../../../firebase';
import firebase from "firebase";
import { Button } from '@material-ui/core';
import {auth} from "../../../firebase";
import { useHistory } from "react-router-dom";
import GoogleLogin from "../GoogleLogin";
import {Link} from "react-router-dom";


function TabPanel(props) {
  const { children, value, index, ...other } = props;


  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '530px',
   
  },
  label: {
    textTransform: 'capitalize',
  },
  indicator: {
    backgroundColor: 'none',
  },
}));



export default function SignUPHeader() {


// const phoneNumber = '+233275861019'
// const appVerifier = window.recaptchaVerifier;
// firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
//     .then((confirmationResult) => {
//       // SMS sent. Prompt user to type the code from the message, then sign the
//       // user in with confirmationResult.confirm(code).
//       window.confirmationResult = confirmationResult;
//       // ...
//        const code = phoneNumber;
// confirmationResult.confirm(code).then((result) => {
//   alert('User signed in successfully.') 
//   const user = result.user;
//   // ...
// }).catch((error) => {
//   alert('User couldnt sign in (bad verification code?') 
//   // ...
// });
//     }).catch((error) => {
//       // Error; SMS not sent
//       // ...
//     });

   

    const history = useHistory();

    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (formData) => {
 
                auth
                .createUserWithEmailAndPassword(formData.email, formData.password)
                .then(cred=>{
                  return db.collection('visitor').doc(cred.user.uid).set({
                    fullName: formData.fullName,
                   phoneN:formData.phoneN,
                   email: formData.email,
                   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                  })
                })
               
                .then(auth => {
                    history.push('/login')
                })
                .catch((error) => alert(error.message))
               
        }
            

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Main><Tag><h4>Sign-up</h4></Tag>
    <Container className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          
          scrollButtons="auto"
          
          centered
          aria-label="scrollable auto tabs example"
          className={classes.indicator}
        >
          <Tab label="Visitor" {...a11yProps(0)} />
          <Tab label="Employee" {...a11yProps(1)} />
          <Tab label="Employer" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Card> 
      <form onSubmit={handleSubmit(onSubmit)}>
              
              
              <input autocomplete="off" type="text" placeholder="Full Name"{...register('fullName', { required: true })}/>
              
      {errors.subject && <p className="sendMail__error">Full name is Required!</p>}
              
          
      <input  placeholder="Email" type="email" {...register('email', { required: true })}/>
          {errors.to && <p className="sendMail__error">Email is Required!</p>}
          

              <input id='number' autocomplete="off" className="sendMail__message" placeholder="Phone Number" type="number" pattern="[0-9]*" {...register('phoneN', { required: true })}/>
      {errors.message && <p className="sendMail__error">Phone Number is Required!</p>}
            {/*<div id='recaptcha-container'></div>
            <button type="button" onclick="phoneAuth();">Send Code</button>

            <small>Enter Verification code</small>

            <input type="text" placeholder="Enter verification code"/>
  <button type="button" onclick='codeverify();'>Verify code</button>*/}
      <input autocomplete="off" className="sendMail__message" placeholder="Password" type="password" {...register('password', { required: true })}/>
      {errors.message && <p className="sendMail__error">Password required</p>}
      <p >
          <Button className="sendMail__send" variant="contained" color="primary" type="submit">Submit</Button>
      </p>
  </form>
  <Sub>Already have an account<Link className="loginbutton" to="/login" ><Login>Login</Login></Link></Sub>
  <GoogleLogin />
  </Card>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Employee/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Employer/>
      </TabPanel>
    </Container>
   
    </Main>
  );
}





const Main = styled.div`
 margin-left:10px;
    display: flex;
    flex-direction: column;
`;
const Container = styled.div`
`;

const Card = styled.div`
    /* grid-template-areas:'leftside main rightside';
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    column-gap: 50px; */
    /* margin-top: 250px; */
    margin-top:-6px;
    display: flex;
    min-Width: 250px;
    height: 300px;
    max-height: 320vw; 
    align-items: center;
    padding-left: auto;
  flex-direction:column;
    form{
        display: flex;
        flex-direction: column;
        p{
            margin-top:30px;
        }
    }

    
    input{
            min-height: 7px;
            min-width: 200px;
            outline: 0;
            padding:20px;
            width: 300px;
            margin-bottom:20px;
            border-radius: 5px;
            background-color:transparent;
            
    }
    
`;

const Tag = styled.div`
 font-size: 24px;
 margin-bottom:50px;
    .h4{
        font-weight: 1000px;
    }
`;

const Login =styled.h4`

`;

const Sub =styled.div`
margin-top: 18px;
.loginbutton{
  text-decoration:none;
}
`;

