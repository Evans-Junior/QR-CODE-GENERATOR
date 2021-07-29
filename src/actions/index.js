import {auth,provider} from "../firebase";
import { useHistory } from "react-router-dom";

export function signInAPI(){

    return(dispatch)=>{
        auth.signInWithPopup(provider)
        .then((payload) =>{
            console.log(payload);
        })
        .then(auth => {
            useHistory().push('/home')
        })
        .catch((error) => alert(error.message));
    };
}