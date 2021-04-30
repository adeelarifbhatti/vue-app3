import { ref } from 'vue'
import {projectAuth} from '../firebase/config'
const error = ref(null);

const Signup = async(email, password, displayName) => {
    error.value = null;
    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email,password);
        if(!res) {
            throw new Error('Could not complete this signup request');
        }
        await res.user.updateProfile({displayName})
        error.value = null
        return res
    }
    catch {
        console.log(err.message);
        // null is assigned because for another attempt/retry 
        error.value = null
    }
}

const uSignup =  () => {
    return {error,Signup}
}

export default uSignup