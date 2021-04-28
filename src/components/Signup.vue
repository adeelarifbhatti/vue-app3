<template>
<form class="form" @submit.prevent="submitHandler">
    <label class="form__label"> Display Name:</label>
    <input type="text" class= "form__input" required  vmodel="displayName">
    <label class="form__label"> Email</label>
    <input type="email" class= "form__input" required v-model="email">
    <label class="form__label"> Password</label>
    <input type="password" class= "form__input" required v-model="password">
    <button class="btn"> Sign up </button>
</form>
  
</template>

<script>
import {ref} from 'vue'

export default {

    setup() {
        const displayName = ref('');
        const email = ref('');
        const password = ref('')
    
        const submitHandler = () => {
            console.log(displayName, email, password)
        }
        return {displayName, email, password, submitHandler}
    }
}
</script>

<style>

</style>