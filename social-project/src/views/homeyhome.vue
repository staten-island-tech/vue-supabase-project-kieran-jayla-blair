<template>
  <div>
    <input type="text" v-model="searchQuery" placeholder="Search" />
    <div class="grid-container">
      <div v-for="(post, key) in filteredData" :key="key" class="grid-item">
        <button @click="toggleLike(post)">
          <input type="checkbox" :id="`checkbox-${key}`" />
          <label :for="`checkbox-${key}`">{{ post.caption }}</label>
        </button>
        <span>Likes: {{ post.likes }}</span>
        <img :src="post.image" alt="Post image" v-if="post.image" />
      </div>
    </div>
  </div>
  <button><RouterLink to="/post">post</RouterLink></button>
  <RouterView></RouterView>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { supabase } from '@/lib/supabase';
import { RouterView, RouterLink } from 'vue-router';

const data = ref([]);
const searchQuery = ref('');

async function fetchData() {
  const { data: postData, error: postError } = await supabase
    .from('post1')
    .select('*');

  if (postError) {
    console.error(postError);
  } else {
    data.value = postData;
  }

  const { data: profilesData, error: profilesError } = await supabase
    .from('profiles')
    .select('*');

  if (profilesError) {
    console.error(profilesError);
  } else {
    data.value = [...data.value, ...profilesData];
  }
}

onMounted(fetchData);

const filteredData = computed(() => {
  return data.value.filter(item => {
    const searchLower = searchQuery.value.toLowerCase();
    return (
      item.username.toLowerCase().includes(searchLower) ||
      item.bio.toLowerCase().includes(searchLower)
    );
  });
});

function toggleLike(post) {
  post.liked = !post.liked;
  if (post.liked) {
    post.likes++;
  } else {
    post.likes--;
  }
}
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
