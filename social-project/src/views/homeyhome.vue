<template>
  <div>
    <div class="search-button-container">
      <button class="post-button"><RouterLink to="/post">Post</RouterLink></button>
      <input type="text" v-model="searchQuery" placeholder="Search" class="search-bar" />
    </div>
    <div class="grid-container">
      <div v-for="(post, key) in filteredData" :key="key" class="grid-item">
        <div class="post-content">
          <button @click="toggleLike(post)" class="like-button">
            <input type="checkbox" :checked="post.liked" :id="`checkbox-${key}`" />
            <label :for="`checkbox-${key}`">{{ post.caption }}</label>
          </button>
          <span>Likes: {{ post.likes }}</span>
          <img :src="post.image" alt="Post image" v-if="post.image" />
        </div>
      </div>
    </div>
  </div>
  <RouterView></RouterView>
</template>



<script setup>
import { ref, computed, onMounted } from 'vue';
import { supabase } from '@/lib/supabase';
import { RouterView, RouterLink } from 'vue-router';

const data = ref([]);
const searchQuery = ref('');

async function fetchPosts() {
  const { data: postData, error: postError } = await supabase
    .from('post1')
    .select('*');

  if (postError) {
    console.error(postError);
  } else {
    data.value = postData.map(post => ({
      ...post,
      liked: post.liked || false, 
    }));
  }
}

async function fetchData() {
  await fetchPosts();
}

onMounted(fetchData);

const filteredData = computed(() => {
  const searchLower = searchQuery.value.toLowerCase();
  return data.value.filter(item => {
    return item.caption.toLowerCase().includes(searchLower);
  });
});

async function toggleLike(post) {
  const updatedLiked = !post.liked;
  const updatedLikes = updatedLiked ? post.likes + 1 : post.likes - 1;
  const { error: postError } = await supabase
    .from('post1')
    .update({ liked: updatedLiked, likes: updatedLikes })
    .eq('id', post.id);

  if (postError) {
    console.error(postError);
    return;
  }
  const index = data.value.findIndex(p => p.id === post.id);
  if (index !== -1) {
    data.value[index] = { ...post, liked: updatedLiked, likes: updatedLikes };
  }
}
</script>

<style>
.search-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px; /* Add margin if needed */
  gap: 16px; /* Adjust the gap between elements */
}

.post-button {
  padding: 12px 24px; 
  font-size: 16px; 
  border-radius: 8px;
  background-color: #ffffff;
  color: white;
  border: none;
  cursor: pointer;
}

.post-button:hover {
  background-color: #ffe9e9; 
  transition: all 0.8s;
}

.search-bar {
  width: 400px; 
  padding: 12px; 
  font-size: 16px; 
  border-radius: 4px;
  border: 1px solid #ccc;
}

.grid-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.grid-item {
  flex: 1 1 calc(33.333% - 16px);
  box-sizing: border-box;
  padding: 16px;
  background-color: #ffe9e9;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.post-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.like-button {
  display: flex;
  align-items: center;
  transition: all 0.5s;
  text-decoration: solid;
}
.like-button:hover{
  transform: scale(1.25);
}
img {
  max-width: 100%;
  border-radius: 8px;
  margin-top: 8px;
}
</style>