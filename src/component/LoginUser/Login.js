import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth,db } from "../../firebase";
import firebase from "firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

         

        auth
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
    console.log("user: ", user);
    firebase
  .database()
  .ref('visitor')
  .orderByChild('emailAddress')
  .equalTo(email)
  .once('value', snap => console.log(snap.val()));
    /*
     * User is logged in
     *
     * */
  })
            .then(auth => {
                history.push('/home')
            })
            .catch(error => alert(error.message))
    }


    return (
        <div className='login'>
            

            <div className='login__container'>
                <h4>LOGIN</h4>

                <form>
                <div className="floating-label-group">
                <input className="big"  type='text' autocomplete="off" autofocus required value={email} onChange={e => setEmail(e.target.value)} />
                <label className="floating-label"><h6>Email</h6></label>
                </div>
                   
                <div className="floating-label-group">
                <input className="big" type='password' autocomplete="off" autofocus required value={password} onChange={e => setPassword(e.target.value)} />
                <label className="floating-label"><h6>Password</h6> </label>
                </div>
                
                    
                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>


                <Link to ="/"><button className='login__registerButton'>Create your an Account</button></Link>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{};
};

const mapDispatchToProps =(dispatch) =>({});

export default Login;