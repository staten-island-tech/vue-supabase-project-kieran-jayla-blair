<script setup>
async function signUp(){
  const { data, error } = await supabase.auth.signUp({
    email: '',
    password: 'example-password',
  })
}
const email = ref()
</script>

<template>
  <form action="">
    <input type="">
  <input type="text">
</form>
<div>
  <h1>HOMEPAGE</h1>
  <input class="inputField" required type="" placeholder="Search" v-model="Text" />
</div>
<input
          type="submit"
          class="button block"
          :value="loading ? 'Loading' : 'Search'"
          :disabled="loading"
        />

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