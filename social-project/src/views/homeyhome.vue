<template>
  <div>
  
    <input type="text" v-model="searchQuery" placeholder="search" />
    <div class="grid-container">
      <div v-for="item in filteredData" :key="item.id" class="grid-item">
        {{ item.username }} - {{ item.bio }}
        <!-- These are null values for now so nothing is displayed -->
        <button @click="follow(item)">follow</button>
        
      </div>
    </div>
  </div>
  <button><RouterLink to="/post">post</RouterLink></button>
<RouterView></RouterView>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { supabase } from '@/lib/supabase'
import { RouterView, RouterLink } from 'vue-router';

const data = ref([])
const searchQuery = ref('')

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

const filteredData = computed(() => {
  return data.value.filter(item => {
    const searchLower = searchQuery.value.toLowerCase()
    return (
      item.username.toLowerCase().includes(searchLower)
    )
  })
})


// follow code goes here
// const follow = async (item) => {
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.grid-item {
  background-color: #f9f9f9;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

input[type="text"] {
  margin-bottom: 16px;
  padding: 8px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>