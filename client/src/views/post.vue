<template>
    <div class="w-full">
        <div class="grid grid-cols-3 gap-">
            <div></div>
            <section v-if="articles?.length" class="m-2 p- border overflow-hidden overscroll-contain">
                <creationArticle />
                <div v-for="article in articles" :key="article.id" :post="article" class="mb-2 w-full">
                    <div class="bg-white rounded-lg shadow-md p-4 mb-8">
                        <div class="ml-auto w-16">
                            <FontAwesomeIcon icon="pen-to-square" class="hover:bg-blue/50 cursor-pointer mr-2"
                                @click="startEditing(article.id)" />
                            <FontAwesomeIcon icon="trash" class="hover:text-red/50 cursor-pointer"
                                @click="deleteArticle(article.id)" />
                        </div>
                        <div v-if="editingArticleId === article.id">
                            <textarea v-model="editingContent"
                                class="border w-full h-24 p-3 rounded-md shadow-sm"></textarea>
                            <button @click="updateArticle(article.id)"
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Modifier</button>

                        </div>
                        <div v-else>
                            <p class="mt-4">{{ article.content }}</p>
                        </div>
                        <div class="flex justify-between mt-4">

                            <div class="flex" v-if="editingArticleId !== article.id">
                                <like :postId="article.id" />
                                <span class="text-gray-500">{{ article.likes.length }} like(s)</span>
                            </div>
                            <button class="flex items-center text-gray-500" @click="commentArticle">
                                <FontAwesomeIcon icon="comment-alt" class="text-blue-500 mr-1" />
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
        <div v-if="actionSuccess === true" class="bg-teal-100 rounded-b  px-4 py-3 shadow-md absolute top-20 right-2"
            role="alert">
            <p class="font-bold">Article {{ action }} avec succès</p>
        </div>
        <div v-if="actionSuccess === false" class="bg-red-100 rounded-b  px-4 py-3 shadow-md absolute top-20 right-2"
            role="alert">
            <p class="font-bold">La {{ action }} de l'article a échoué</p>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { FontAwesomeIcon } from '../fontawesome';
import { useGetArticlesQuery, useDeleteArticleMutation, useUpdateArticleMutation } from '../generated/graphql';
import creationArticle from './creationArticle.vue';
import like from './like.vue';
const action = ref('');
const actionSuccess = ref(null);
const userId = localStorage.getItem('user');
const { mutate: deleteArticleMutation } = useDeleteArticleMutation();
const { mutate: updateArticleMutation } = useUpdateArticleMutation();

const { result: posts } = useGetArticlesQuery();
const articles = computed(() => posts.value?.getArticles);

const editingArticleId = ref(null);
const editingContent = ref('');

const deleteArticle = async (articleId: string) => {
    try {
        await deleteArticleMutation({ id: articleId, userId });
        action.value = 'supprimé';
        actionSuccess.value = true;
        setTimeout(() => {
            actionSuccess.value = null;
        }, 5000);
    } catch (error) {
        action.value = 'suppression';
        actionSuccess.value = false;
        setTimeout(() => {
            actionSuccess.value = null;
        }, 5000);
    }
}

const startEditing = (articleId: string) => {
    editingArticleId.value = articleId;
    const article = articles.value.find(a => a.id === articleId);
    editingContent.value = article ? article.content : '';
}

const updateArticle = async (articleId: string) => {
    editingArticleId.value = null;
    editingContent.value = '';
    try {
        await updateArticleMutation({ id: articleId, content: editingContent.value });
        action.value = 'modifié';
        actionSuccess.value = true;
        setTimeout(() => {
            actionSuccess.value = null;
        }, 5000);
    } catch (error) {
        action.value = 'modification';
        actionSuccess.value = false;
        setTimeout(() => {
            actionSuccess.value = null;
        }, 5000);
    }
}

const openComments = (articleId: string) => {
    console.log('Comments opened');
}

const commentArticle = () => {
    // Logique pour commenter le post
    console.log('Post commented');
}
</script>