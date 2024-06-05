<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import { supabase } from '@supabase/supabase-js'
// const supabase = createClient(https://appibxbabgskurddmnjz.supabase.co, eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwcGlieGJhYmdza3VyZGRtbmp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxNTAxMzUsImV4cCI6MjAyNzcyNjEzNX0.8xzTcqjZv98GOVy0GkzDPl4HK5d1UVAo8vNLEwRU-xw);
// const { data: profiles, error } = await supabase.from('profiles').select('*')


import { supabase } from './lib/supabase';

async function test() {
  let { data: profiles, error } = await supabase
  .from('profiles')
  .select('*')
console.log(profiles)        
}
test()
// import Auth from './views/Auth.vue';
// import Account from './views/Account.vue';
// import AboutView from './views/AboutView.vue';
// import HomeView from './views/HomeView.vue';
import { onMounted, ref } from 'vue'
// import { supabase } from './supabase'

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
