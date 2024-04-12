<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
 <div>
  <div>
    <form name="" @submit.prevent="login(username, password)">
    <div>
      <label for="username">Username: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">Password: </label>
      <input id="password" type="password" v-model="password" />
    </div>
    </form>
  </div>
 </div>
</template>

<!-- http://localhost:3000 -->
