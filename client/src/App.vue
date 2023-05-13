<template>
  <div class="max-w-4xl mx-auto">
    <Header />
    <main class="px-2 py-4">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
  import Header from './components/Header.vue';
</script>
