<template>
  <div class="home">
      <p>Welcome</p>
      <div v-if="login">
        <h2> Login </h2>
        <Signin/>
        <p> For signing up <span class="btn-white"  @click="login=false"> SignUp </span> instead</p>
      </div>
      <div v-else>
        <h2>Sign Up </h2>
       <Signup/>
       <p> For signing In <span class="btn-white" @click="login=true"> SignIn </span> instead</p>
      </div>


  </div>
</template>

<script>
import Signin from '../components/Signin.vue'
import Signup from '../components/Signup.vue'
import {ref} from 'vue'
export default {
  components: { Signup, Signin },
    setup() {
      const login = ref(true);
      return {login}

    }

}
</script>

<style>

</style>