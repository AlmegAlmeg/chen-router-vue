<template>
  <div v-if="post !== null">
    <h1 class="text-center text-2xl underline">{{ post.title }}</h1>
    <p class="text-xl mt-4">{{ post.body }}</p>

    <div class="mt-6">
      <PostSlider title="Related to this post" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { Post } from '../models/Post';
  import { getPostById } from '../services/posts';
  import PostSlider from '../components/PostSlider.vue';

  const route = useRoute();
  const router = useRouter();
  const { id } = route.params;
  const post = ref<Post | null>(null);

  onMounted(async () => {
    const response = await getPostById(id as string);
    if (response === null) {
      router.replace('/');
      return;
    }

    post.value = response;
  });
</script>
