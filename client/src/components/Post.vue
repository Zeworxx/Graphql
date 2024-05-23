<template>
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
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    post: {
        type: Object,
        required: true
    }
})

const likePost = () => {
    
}

const commentPost = () => {
    // Logique pour commenter le post
    console.log('Post commented');
}
</script>