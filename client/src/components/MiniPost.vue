<template>
  <div class="border border-orange-400 p-4 rounded-lg relative">
    <p v-if="post.isNew" class="absolute -top-9 left-0 rounded-lg py-1 px-3 bg-gray-200">New!</p>
    <h3 class="text-xl underline text-center line-clamp-1">{{ post.title }}</h3>
    <p class="line-clamp-4">{{ post.body }}</p>

    <div class="text-right text-blue-600 mt-4">
      <p v-if="post.salePrice === null">{{ post.price }}$</p>
      <p v-else class="flex gap-2 justify-end">
        <span class="text-gray-300 line-through">{{ post.price }}$</span>
        <span>{{ post.salePrice }}$</span>
      </p>
      <!-- <RouterLink :to="`/post/${post.id}`">Read more -></RouterLink> -->
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Post } from '../models/Post';

  defineProps<{ post: Post }>();
</script>
