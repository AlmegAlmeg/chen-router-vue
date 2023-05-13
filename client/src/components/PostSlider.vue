<template>
  <div v-if="posts.length">
    <h3 class="text-xl underline text-center">{{ title ?? 'Our Recommendations' }}</h3>

    <div class="grid grid-cols-4 gap-8 mt-6">
      <MiniPost v-for="post in posts.slice(0, 4)" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { Post } from '../models/Post';
  import { getPostsByIds } from '../services/posts';
  import MiniPost from './MiniPost.vue';

  defineProps<{ title?: string }>();

  const posts = ref<Post[]>([]);

  onMounted(async () => {
    const response = await getPostsByIds(['10', '12', '29', '56', '7']);
    posts.value = response;
  });
</script>
