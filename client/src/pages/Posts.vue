<template>
  <div>
    <h1 class="text-center text-2xl underline">Our Posts</h1>
    <div class="grid grid-cols-3 gap-8 mt-8">
      <MiniPost v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { getAllPosts } from '../services/posts';
  import { Post } from '../models/Post';
  import MiniPost from '../components/MiniPost.vue';

  const posts = ref<Post[]>([]);

  onMounted(async () => {
    const response = await getAllPosts();
    posts.value = response;
  });
</script>
