<script setup>
import { ref } from 'vue';
import { RouterView, RouterLink } from 'vue-router';
import { supabase } from '@/lib/supabase';
async function signUp(){
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  })
}
const email = ref("")
const password = ref("")
</script>

<template>
  <form action="" >
    <button @click.prevent="signUp">sign up</button>
    <input type="" v-model="email">
  <input type="password" v-model="password">
</form>
<div>
  <button><RouterLink to="/signIn">Sign In</RouterLink></button>
  <h1>HOMEPAGE</h1>
  <input class="inputField" required type="" placeholder="Search" v-model="Text" />
</div>
<input
          type="submit"
          class="button block"
          :value="loading ? 'Loading' : 'Search'"
          :disabled="loading"
        />
<RouterView/>
</template>


// import TheWelcome from '../components/TheWelcome.vue'


<style scoped>
h1 {
  text-align: center;
 margin-top: 1rem;
}

#form {
  text-align: center;
  font-size: 1.125rem;

}

</style>