<script setup>
import { RouterLink, RouterView } from 'vue-router'

// import Auth from './views/Auth.vue';
// import Account from './views/Account.vue';
// import AboutView from './views/AboutView.vue';
// import HomeView from './views/HomeView.vue';
</script>

<template>
  <div id="app">
    <header>
      <div class="wrapper">
        <nav class="nav-links">
          <RouterLink to="/home">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/auth">Auth</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
.nav-links {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  margin-top: -1rem;
}

</style>
<!-- SIGN IN PAGE CODE -->
<!-- <template>
  <div>
   <h2>Sign In</h2>
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
   <button>Enter</button>
  </div>
 </template> -->


<!-- <script setup>
import { onMounted, ref } from 'vue'
import Account from './components/Account.vue'
import Auth from './components/Auth.vue'
import { supabase } from './supabase'

const session = ref()

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})
</script>

<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <Account v-if="session" :session="session" />
    <Auth v-else />
  </div>
</template> -->

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
