import { ref } from "vue"
import {projectAuth} from '../firebase/config'
const error = ref(null);

const SignUp = async(email, password, displayName) => {
    error.value = null;
    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email,password)
        console.log(res)
        if(!res) {
            throw new Error('Could not complete this signup request');
            console.log("From if(!res) composable");
        }
        await res.user.updateProfile({displayName})
        console.log(res.user);
        error.value = null
        return res
    }
    catch(err) {
        console.log("Adeel This is error ", err.message);
        // null is assigned because for another attempt/retry 
        error.value = err.message
    }
}

const uSignup =  () => {
    return {error,SignUp}
}

export default uSignup