<template>
<form class="form" @submit.prevent="submitHandler">
    <label class="form__label"> Display Name:</label>
    <input type="text" class= "form__input" required  vmodel="displayName">
    <label class="form__label"> Email</label>
    <input type="email" class= "form__input" required v-model="email">
    <label class="form__label"> Password</label>
    <input type="password" class= "form__input" required v-model="password">
    <div>{{error}}</div>
    <button class="btn"> Sign up </button>
</form>
  
</template>

<script>
import {ref} from 'vue'
import uSignup from '../composables/uSignUp'

export default {

    setup() {
        const { error, SignUp } = uSignup();

        const displayName = ref('');
        const email = ref('');
        const password = ref('')
    
        const submitHandler = async() => {
            await SignUp(email.value,password.value,displayName.value);
            console.log("remove this console.log",displayName.value, email.value, password.value);
        }
        return {displayName, email, password, submitHandler,error}
    }
}
</script>

<style>

</style>