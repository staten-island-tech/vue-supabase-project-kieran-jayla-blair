<template>
    <div>
        <form action="" >
    <button @click.prevent="signIn">sign up</button>
    <input type="" v-model="email">
  <input type="password" v-model="password">
</form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { supabase } from '@/lib/supabase';
import
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