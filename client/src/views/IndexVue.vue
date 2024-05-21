<template>
<<<<<<< Updated upstream
    <navbar />
    <post />
</template>
<script lang="ts">
import Navbar from './navbar.vue'
import Post from './post.vue'
export default {
    components: {
        Navbar,
        Post
    }
}
=======
  <div>
    <h1>Welcome to My Social Network</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@apollo/client';
import Post from '@/components/Post.vue';
import { defineComponent } from 'vue';

defineComponent({
  components: {
    Post,
  },
});

// const GET_POSTS = gql`
//   query GetArticles {
//     posts {
//       id
//       title
//       author
//       content
//       image
//       likes
//       comments
//     }
//   }
// `;

// const { loading, data } = useQuery(GET_POSTS);
// const posts = data?.posts || [];

>>>>>>> Stashed changes
</script>
