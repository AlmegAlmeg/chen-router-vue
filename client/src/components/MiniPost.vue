<template>
  <div class="border border-orange-400 p-4 rounded-lg">
    <h3 class="text-xl underline text-center line-clamp-1">{{ post.title }}</h3>
    <p class="line-clamp-4">{{ post.body }}</p>

    <div class="text-right text-gray-600 mt-4">
      <RouterLink :to="`/post/${post.id}`">Read more -></RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Post } from '../models/Post';

  defineProps<{ post: Post }>();
</script>
