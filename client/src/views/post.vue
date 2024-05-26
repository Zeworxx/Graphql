<template>
    <div class="grid grid-cols-3">
        <div></div>
        <section v-if="articles.length" class="m-2 p-0 border overflow-hidden overscroll-contain">
            <div v-for="article in articles" :key="article.id" :post="article" class="mb-2 w-full">
                <div class="bg-white rounded-lg shadow-md p-4 mb-8">
                    <p class="mt-4">{{ article.content }}</p>
                    <div class="flex justify-between mt-4">
                        <button class="flex items-center text-gray-500 mr-4" @click="likeArticle(article)">
                            <font-awesome-icon v-if="article.likes?.some(like => like.userId === userId)"
                                class="bg-red-700" :icon="['fas', 'heart']" />
                            <font-awesome-icon v-else :icon="['far', 'heart']" />
                            <span>{{ article.likes?.length }} like(s)</span>
                        </button>
                        <button class="flex items-center text-gray-500"
                            @click="openComments(article.id, article.comments || [])">
                            <i class="fas fa-comment-alt mr-1"></i>
                            <span>{{ article.comments?.length }} Comment(s)</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <!-- Commentaires -->
        <div>
            <div class="p-1 border" v-if="currentArticleId != ''">
                <h3>Post a comment :</h3>
                <input type="text" v-model="newComment" name="" id="" class="w-full p-2 border my-2">
                <br>
                {{ newComment }}
                <button @click="commentArticle" class="p-2 bg-slate-900 text-white rounded">Comment</button>
            </div>
            <div class="p-1">
                <h3>Comments:</h3>
                <div v-for="comment in currentComments" :key="comment.id">
                    <p><strong>{{ comment.userId }}</strong>: {{ comment.content }} <span
                            v-if="comment.userId == userId" class="text-red-700 cursor-pointer"
                            @click="removeComment(comment.articleId, comment.userId)">x</span></p>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { Article, useUnlkieArticleMutation, useCreateCommentMutation, useDeleteCommentMutation, useGetArticlesQuery, useLikeArticleMutation, type Comment } from '../generated/graphql'

const userId = ref(localStorage.getItem('userId'));
const { result: posts } = useGetArticlesQuery();
const articles = computed(() => posts.value?.getArticles);
let currentArticleId = ref<string>("");
let currentComments = ref<Comment[]>([]);
let newComment = ref<string>("");

const likeArticle = async (article: Article) => {
    const likes = article.likes?.map(like => like.userId) || [];

    if (likes.includes(userId.value)) {
        if (userId.value) {
            const { mutate: unlike } = useUnlkieArticleMutation({ variables: { articleId: article.id, userId: userId.value } });
            const result = await unlike();
            if (result && result.data?.unlikeArticle?.success) {
                window.location.reload();
            }
        }
    } else {
        if (userId.value) {
            const { mutate: like } = useLikeArticleMutation({ variables: { articleId: article.id, userId: userId.value } });
            const result = await like();
            if (result && result.data?.likeArticle?.success) {
                window.location.reload();
            }
        }
    }
}

const openComments = (articleId: string, comments: Comment[]) => {
    currentArticleId.value = articleId;
    currentComments.value = comments || [];
}

const removeComment = async (articleId: string, userId: string) => {
    const { mutate: deleted } = useDeleteCommentMutation({ variables: { articleId, userId } });
    const result = await deleted();
    if (result && result.data?.deleteComment?.success) {
        currentComments.value = currentComments.value.filter(comment => comment.userId !== userId);
    }
}

const commentArticle = async () => {
    if (userId.value && newComment.value && currentArticleId.value) {
        const { mutate: create } = useCreateCommentMutation({ variables: { articleId: currentArticleId.value, userId: userId.value, content: newComment.value } });
        const result = await create();
        if (result && result.data?.createComment) {
            window.location.reload();
        }
    }
}
</script>