<template>
    <div class="grid grid-cols-3">
        <div></div>
        <section class="m-2 p-4 border">
            <div v-for="post in posts" :key="post.id" :post="post" class="mb-2 w-full">
                <div class="bg-white rounded-lg shadow-md p-4">
                    <p class="mt-4">{{ post.content }}</p>
                    <div class="flex items-center mt-4">
                        <button class="flex items-center text-gray-500 mr-4" @click="likePost">
                            <i class="fas fa-thumbs-up mr-1"></i>
                            <span>{{ post.likes.length }}</span>
                        </button>
                        <button class="flex items-center text-gray-500" @click="commentPost">
                            <i class="fas fa-comment-alt mr-1"></i>
                            <span>{{ post.comments }}</span>
                        </button>
                    </div>
                </div> 
            </div>
        </section>
        <div></div>
        <!-- <div v-else class="m-2 p-4 border">
            <p>No post found</p>
        </div> -->
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useGetArticlesQuery, GetArticlesQuery } from '../generated/graphql'

let posts: GetArticlesQuery[] = ref([]);

const { result } = useGetArticlesQuery();
posts.value = result.value?.getArticles

const likePost = () => {

}

const commentPost = () => {
    // Logique pour commenter le post
    console.log('Post commented');
}
</script>