<template>
    <div>
        <form action="" >
    <button @click.prevent="signIn"><RouterLink to="/homepage">Sign in</RouterLink></button>
    <input type="" v-model="email">
  <input type="password" v-model="password">
</form>
    </div>
<RouterView/>
</template>

<script setup>
import { ref } from 'vue';
import { supabase } from '@/lib/supabase';
import { RouterLink, RouterView } from 'vue-router';
async function signIn(){
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
}
const email = ref("")
const password = ref("")
</script>

<style lang="scss" scoped>

</style>