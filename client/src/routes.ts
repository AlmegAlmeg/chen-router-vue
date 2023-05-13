import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Posts from './pages/Posts.vue';
import PostDetails from './pages/PostDetails.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/posts',
      component: Posts,
    },
    {
      path: '/post/:id',
      component: PostDetails,
    },
  ],
});
