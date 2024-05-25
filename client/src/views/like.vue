<template>
    <div>
        <button @click="likePost" :class="{ active: liked }">
            <FontAwesomeIcon icon="fa-thumbs-up" class="text-blue-500  hover:text-blue-800  mr-2" />
        </button>
        <button @click="dislikePost" :class="{ active: disliked }">
            <FontAwesomeIcon icon="fa-thumbs-down" class="text-blue-500 hover:text-blue-800 mr-2" />
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { FontAwesomeIcon } from '../fontawesome';
import { useLikeArticleMutation, useUnlikeArticleMutation } from '../generated/graphql'

const props = defineProps({
    postId: {
        type: String,
        required: true
    },
});
const userId = localStorage.getItem('user');


let liked = ref(false);
let disliked = ref(false);

const likePost = async () => {
    disliked.value = false;
    liked.value = true;
    const { mutate: like } = useLikeArticleMutation()

    const result = await like({ userId: userId, articleId: props.postId })
    if (result?.data.likeArticle.success) {
        console.log('like success');

    } else {
        console.log(props.postId);
        console.log('like failed');
    }
};

const dislikePost = async () => {
    disliked.value = true;
    liked.value = false;

    const { mutate: dislike } = useLikeArticleMutation()

    const result = await dislike({ userId: userId, articleId: props.postId })
    if (result?.data.likeArticle.success) {
        console.log('dislike success');

    } else {
        console.log('dislike failed');
    }
};
</script>

<style></style>