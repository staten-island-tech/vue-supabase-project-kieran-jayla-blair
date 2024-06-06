<template>
    <div>
        <form action="">
            <input type="text" v-model="caption" placeholder="Caption" />
            <input type="text" v-model="image" placeholder="Image URL" />
            <button @click.prevent="jfha">Submit</button>
        </form>
        <div v-for="(post, key) in posts" :key="key" class="post">
            <button @click="toggleLike(post)">
                <input type="checkbox" :id="`checkbox-${key}`" />
                <label :for="`checkbox-${key}`">{{ post.caption }}</label>
            </button>
            <span>Likes: {{ post.likes }}</span>
            <img :src="post.image" alt="Post image" v-if="post.image">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { supabase } from '@/lib/supabase';
const numpost = ref(0);
const caption = ref("");
const image = ref("");
const posts = ref({});

async function jfha(){
    numpost.value++;
    const newPost = {
        caption: caption.value,
        image: image.value,
        liked: false,
        likes: 0,
    };

    const { data, error } = await supabase
        .from('post1')
        .insert([newPost])
        .select();

    if (error) {
        console.error('Error inserting post:', error);
        return;
    }

    if (data) {
        const newPostWithId = data[0];
        posts.value[numpost.value-1] = newPost;

        caption.value = "";
        image.value = "";
    }
}

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
form {
  margin-bottom: 20px;
}

input[type="text"] {
  margin-right: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button[type="submit"] {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}
</style> 