<template>
  <div class="welcome container">
      <p>Welcome</p>
      <Signup/>
      <Signin/>
  </div>
</template>

<script>
import Signin from '../components/Signin.vue'
import Signup from '../components/Signup.vue'
export default {
  components: { Signup, Signin },

}
</script>

<style>

</style>