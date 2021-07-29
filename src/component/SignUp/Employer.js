import React , {useState}from 'react'
import styled from "styled-components";
import {useForm} from "react-hook-form";
import { db } from '../../firebase';
import firebase from "firebase";
import { Button } from '@material-ui/core';
import {auth,provider} from "../../firebase";
import { useHistory,Link } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";

export default function Employer(props) {
    // const [employee,setEmployee] =useState(false);
    // const [employer,setEmployer] =useState(false);
    // const [data,setData] =useState([]);
    // const [company,setCompany] =useState();
    // const [fullName,setFullName] =useState("");
   // const [email,setEmail] =useState("");
    // const [phoneN,setPhoneN] =useState("");
   // const [password,setPassword] =useState("");
    // const [position,setPosition] =useState("");
    const [user,setUser] =useState(null);
    const history = useHistory();
//data
//     db.collection('data').add({
//         fullName: formData.fullName,
//         phoneN:formData.phoneN,
//         code:formData.code,
//         company:formData.company,
//         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
// });

// const logIn=()=>{
//     auth.signInWithPopup(provider)
// }

            
            
const {register, handleSubmit, formState: { errors }} = useForm();
const onSubmit = (formData) => {
    console.log(formData);

    auth
    .createUserWithEmailAndPassword(formData.email, formData.password)
    .then(cred=>{
      return db.collection('Employer').doc(cred.user.uid).set({
        fullName: formData.fullName,
        phoneN:formData.phoneN,
        email: formData.email,
         Company:formData.company,
         code:formData.code,
         password:formData.password,
       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
    })
    .then(auth => {
        history.push('/login')
    })
    .catch((error) => alert(error.message))

    
}
       
            
            
        
    return (
        <Card> 
            <form onSubmit={handleSubmit(onSubmit)}>
                    
                    
                    <input autocomplete="off" type="text" placeholder="Full Name"{...register('fullName', { required: true })}/>
                    
            {errors.subject && <p className="sendMail__error">Full name is Required!</p>}
                    
                
            <input  placeholder="Email" type="email" {...register('email', { required: true })}/>
                {errors.to && <p className="sendMail__error">Email is Required!</p>}
                

                    <input autocomplete="off" className="sendMail__message" placeholder="Phone Number" type="text" pattern="[0-9]*" {...register('phoneN', { required: true })}/>
            {errors.message && <p className="sendMail__error">Phone Number is Required!</p>}

            <input autocomplete="off" className="sendMail__message" placeholder="Company Name" type="text" {...register('company', { required: true })}/>
            {errors.message && <p className="sendMail__error">Company Name required</p>}
            
          <input autocomplete="off" className="sendMail__message" placeholder="Code" type="text" {...register('code', { required: true })}/>
          {errors.message && <p className="sendMail__error">Code required</p>}
        
                <input autocomplete="off" className="sendMail__message" placeholder="Password" type="password" {...register('password', { required: true })}/>
            {errors.message && <p className="sendMail__error">Password required</p>}

            <p >
                <Button className="sendMail__send" variant="contained" color="primary" type="submit">Submit</Button>
            </p>
        </form>
        <Sub>Already have an account<Link className="loginbutton" to="/login" ><Login>Login</Login></Link></Sub>
        </Card>
    )
}

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
    .sc-cxNHIi fOODtB{
        background-color: transparent !important;
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

