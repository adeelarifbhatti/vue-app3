<template>
<form @submit.prevent="submitHandler">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <button> Sign up </button>
</form>
  
</template>

<script>
import {ref} from 'vue'

export default {

    setup() {
        const email = ref('');
        const password = ref('')
    
        const submitHandler = () => {
            console.log(email, password)
        }
        return {email, password, submitHandler}
    }
}
</script>

<style>

</style>