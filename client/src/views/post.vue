<template>
    <div class="grid grid-cols-3 gap-">
        <div></div>
        <section v-if="articles?.length" class="m-2 p- border overflow-hidden overscroll-contain">
            <creationArticle />
            <div v-for="article in articles" :key="article.id" :post="article" class="mb-2 w-full">
                <div class="bg-white rounded-lg shadow-md p-4 mb-8">
                    <p class="mt-4">{{ article.content }}</p>
                    <div class="flex justify-between mt-4">
                        <button class="flex items-center text-gray-500 mr-4" @click="likeArticle">
                            <i class="fas fa-thumbs-up mr-1"></i>
                            <span>{{ article.likes.length }} like(s)</span>
                        </button>
                        <button class="flex items-center text-gray-500" @click="commentArticle">
                            <i class="fas fa-comment-alt mr-1"></i>
                            <span @click="openComments(article.id)">{{ article.comments.length }} Comment(s)</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <div v-else class="m-2 p-4 border">
            <creationArticle />
            <p>No post found</p>
        </div>
        <!-- Commentaires -->
        <div></div>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useGetArticlesQuery } from '../generated/graphql'
import creationArticle from './creationArticle.vue'

const { result: posts } = useGetArticlesQuery();
const articles = computed(() => posts.value?.getArticles);

const likeArticle = () => {

}

const openComments = (articleId: string) => {
    console.log('Comments opened');
}

const commentArticle = () => {
    // Logique pour commenter le post
    console.log('Post commented');
}
</script>