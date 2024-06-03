<template>
    <div>
      <h1>Table Data</h1>
      <ul>
        <li v-for="item in data" :key="item.id">
          {{ item.column1 }} - {{ item.column2 }}
        </li>
      </ul>
    </div>
    <!-- this part might work -->
    <!-- <div>
    <h1>Other Users</h1>
    <table>
      <thead>
        <tr>
          <th>username</th>
          <th>bio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.column1 }}</td>
          <td>{{ item.column2 }}</td>
        </tr>
      </tbody>
    </table>
  </div> -->
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from '@/lib/supabase'
  
  const data = ref([])
  
  onMounted(async () => {
    const { data: fetchedData, error } = await supabase
      .from('profiles') 
      .select('*')
  
    if (error) {
      console.error(error)
    } else {
      data.value = fetchedData
    }
  })




// const { data, error } = await supabase
//   .from('we put the name of the user folder here')
//   .select()
//   .is('name', null) 




//code below might do something

// create table public.profiles (
//   id uuid not null references auth.users on delete cascade,
//   first_name text,
//   last_name text,

//   primary key (id)
// );

// alter table public.profiles enable row level security; 
</script>

<style lang="scss" scoped>

</style>