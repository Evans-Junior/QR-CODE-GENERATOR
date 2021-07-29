import React , {useState}from 'react'
import styled from "styled-components";
import {useForm} from "react-hook-form";
import { db } from '../../firebase';
import firebase from "firebase";
import { Button } from '@material-ui/core';
import {auth} from "../../firebase";
import { useHistory } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";

export default function Forms(props) {
    const [employee,setEmployee] =useState(false);
    const [employer,setEmployer] =useState(false);
    const [data,setData] =useState([]);
    // const [company,setCompany] =useState();
    // const [fullName,setFullName] =useState("");
   // const [email,setEmail] =useState("");
    // const [phoneN,setPhoneN] =useState("");
   // const [password,setPassword] =useState("");
    // const [position,setPosition] =useState("");
   // const [code,setCode] =useState("12345");
    const history = useHistory();
//data
//     db.collection('data').add({
//         fullName: formData.fullName,
//         phoneN:formData.phoneN,
//         code:formData.code,
//         company:formData.company,
//         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
// });

// const form =e=>{
//     e.preventDefault();
//      setEmail(e.target.email)
//      setPassword(e.target.password)

  
// }
    
    
    const {register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = (formData) => {
            console.log(formData);
            if (employee===false && employer===false){
                db.collection('data').onSnapshot((onSnapshot) => {
                    setData(onSnapshot.docs.map((doc) => {
                      // console.log(doc.data())
                      return {  fullName: formData.fullName,
                        phoneN:formData.phoneN,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp()};
                        
                    }))
                  })
                auth
            .createUserWithEmailAndPassword(formData.email, formData.password)
            .then(auth => {
                history.push('/login')
            })
            .catch((error) => alert(error.message))
            
              }  else if(employee===true && employer===false){
            db.collection('data').add({
                fullName: formData.fullName,
                phoneN:formData.phoneN,
                company:formData.company,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
        } else if(employee===false && employer===true){
            auth
            .createUserWithEmailAndPassword(formData.email, formData.password)
            .then(auth => {
                history.push('/login')
            })
            .catch((error) => alert(error.message))
            db.collection('data').onSnapshot((onSnapshot) => {
                setData(onSnapshot.docs.map((doc) => {
                  // console.log(doc.data())
                  return {  fullName: formData.fullName,
                    phoneN:formData.phoneN,
                    company:formData.company,
                    code:formData.code,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()};
                    
                }))
              })
            console.log(data)
    //         add({
    //             fullName: formData.fullName,
    //             phoneN:formData.phoneN,
    //             company:formData.company,
    //             code:formData.code,
    //             timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    // });
        }
            
            
            
            

        

     };
    return (
        <Card> 
            <form onSubmit={handleSubmit(onSubmit)}>
                    <Tag><h4>Sign-up</h4></Tag>
                    
                    <input autocomplete="off" type="text" placeholder="Full Name"{...register('fullName', { required: true })}/>
                    
            {errors.subject && <p className="sendMail__error">Full name is Required!</p>}
                    
                
            <input  placeholder="Email" type="email" {...register('email', { required: true })}/>
                {errors.to && <p className="sendMail__error">Email is Required!</p>}
                

                    <input autocomplete="off" className="sendMail__message" placeholder="Phone Number" type="text" pattern="[0-9]*" {...register('phoneN', { required: true })}/>
            {errors.message && <p className="sendMail__error">Phone Number is Required!</p>}

            <Bt>
            <Button size="small" className="active" variant="outlined">visitor</Button>
            <Button size="small" onClick ={()=>setEmployee((employee)=>!employee)} variant="outlined" color="primary">
              Employee
            </Button>
            <Button size="small" onClick ={()=>setEmployer((employer)=>!employer)} variant="outlined">
              Employer
            </Button>
            </Bt>
            { employee ?<input autocomplete="off" className="sendMail__message" placeholder="Company Name" type="text" {...register('company', { required: true })}/>
            : null}
                { employee ?<input autocomplete="off" className="sendMail__message" placeholder="Position" type="text" {...register('position', { required: true })}/>
                : null}
           
                { employer ?<input autocomplete="off" className="sendMail__message" placeholder="Company Name" type="text" {...register('company', { required: true })}/>
                : null}
                
                { employer ?<input autocomplete="off" className="sendMail__message" placeholder="Code" type="text" {...register('code', { required: true })}/>
                : null}
        
                <input autocomplete="off" className="sendMail__message" placeholder="Password" type="password" {...register('password', { required: true })}/>
            {errors.message && <p className="sendMail__error">Password required</p>}

            <p >
                <Button className="sendMail__send" variant="contained" color="primary" type="submit">Submit</Button>
            </p>
        </form>
        <GoogleLogin />
        </Card>
    )
}

const Card = styled.div`
    /* grid-template-areas:'leftside main rightside';
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    column-gap: 50px; */
    margin-top: 250px;
    margin-left:60px;
    display: flex;
    justify-content: space-evenly;
    min-Width: 250px;
    height: 300px;
    max-height: 320vw; 
    align-items: center;
   
    flex:0.7;
    padding-left: 40px;

    form{
        display: flex;
        flex-direction: column;
    }

    
    input{
        
            outline: 0;
            padding:20px;
            width: 300px;
            margin-bottom:20px;
    }
    
`;

const Tag = styled.div`
 font-size: 24px;
 margin-bottom:50px;
    .h4{
        font-weight: 1000px;
    }
`;

const Bt = styled.div`
place-items: center;
margin-bottom: 20px;


Button{
  margin:10px;
 
}

`;


