<template>
    <div class="mt-8 mx-6">
        <form @submit.prevent="createArticle">
            <textarea v-model="content" placeholder="Quoi de neuf ?"
                class="border w-full h-24 p-3 rounded-md shadow-sm"></textarea>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Publier</button>
        </form>
    </div>
    <div v-if="articleCreated === true" class="bg-teal-100 rounded-b  px-4 py-3 shadow-md absolute top-20 right-2"
        role="alert">
        <p class="font-bold">Article créé avec succès</p>
    </div>
    <div v-if="articleCreated === false" class="bg-red-100 rounded-b  px-4 py-3 shadow-md absolute top-20 right-2"
        role="alert">
        <p class="font-bold">La création de l'article a échoué</p>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useCreateArticleMutation } from '../generated/graphql';

export default {
    setup() {
        const content = ref('');
        const articleCreated = ref(null);
        const userId = localStorage.getItem('userId');
        const { mutate: article } = useCreateArticleMutation();

        const createArticle = async () => {
            console.log(content.value);
            const response = await article({ content: content.value, userId });

            if (response?.data?.createArticle?.success) {
                articleCreated.value = true;
                setTimeout(() => {
                    articleCreated.value = null;
                }, 5000);
            } else {
                articleCreated.value = false;
                setTimeout(() => {
                    articleCreated.value = null;
                }, 5000);
            }
        };

        return { content, createArticle, articleCreated };
    },
};
</script>

<style scoped>
textarea {
    width: 100%;
    height: 100px;
    resize: none;
    margin-bottom: 10px;
}

button {
    background-color: #1da1f2;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>