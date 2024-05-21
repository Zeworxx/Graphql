<template>
    <section>
        <div class="grid md:h-screen md:grid-cols-2">
<div class="flex flex-col items-center justify-center bg-white">
                <div class="max-w-lg px-5 py-8 text-center md:px-10 md:py-12 lg:py-24">
                    <img src="../assets/logo.webp" alt="Logo Touitter" class="w-24 h-24 mx-auto rounded-full">
                    <h1 class="mb-4 text-3xl font-bold text-gray-900">Login</h1>
                    <form @submit.prevent="login" class="mx-auto mb-4 max-w-sm pb-4" name="wf-form-password" method="get">
                        <div class="relative">
                            <FontAwesomeIcon icon="envelope"
                                class="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block text-2xl" />
                            <input type="text" v-model="model.username"
                                class="mb-4 block h-9 w-full border border-black bg-gray-100 px-3 py-6 pl-14 text-sm text-black"
                                maxlength="23" name="login" placeholder="Votre login" required />
                        </div>
                        <div class="relative mb-4">
                            <FontAwesomeIcon icon="lock"
                                class="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block text-2xl" />

                            <input type="password" v-model="model.password"
                                class="mb-4 block h-9 w-full border border-black bg-gray-100 px-3 py-6 pl-14 text-sm text-black"
                                placeholder="Password (min 8 characters)" required />
                        </div>
                        <button type="submit"
                            class="flex items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]">
                            <p class="mr-6 font-bold">Login</p>
                            <FontAwesomeIcon icon="arrow-right" size="2x" class="text-white" />
                        </button>
                        <p v-if="isLoginFail" class="text-red-500 mt-4">Login failed, please check your information</p>
                    </form>
                    <p class="text-sm text-gray-900">Vous n'avez pas de compte
                        <router-link v-bind:to="'signup'"
                            class="text-sm font-bold text-blue-500">Inscription</router-link>
                    </p>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center bg-gray-100 right-bloc">
                <div class="slider-thumb">
                    <div class="text-center py-8 bg-[#1515159c] m-4 rounded-lg text-white">
                        <h1 class="text-3xl font-bold mb-4">Bienvenue sur <span class="text-blue-500">Touitter</span>
                            !</h1>
                        <p class="mb-8">Entrez dans notre monde vibrant où les idées fusent et les
                            discussions enflamment les esprits. Connectez-vous pour découvrir ce qui se passe en temps
                            réel, partager vos pensées et vous connecter avec des personnes du monde entier.</p>
                        <img src="../assets/logo.webp" alt="Logo de Touitter" class="mx-auto w-36 h-36 rounded-full">
                        <div class="text-left ml-4">
                            <p class="font-semibold mb-2">Connectez-vous pour :</p>
                            <ul class="pl-4">
                                <li class="mb-2">Partager vos pensées</li>
                                <li class="mb-2">Suivre vos passions</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { FontAwesomeIcon } from '../fontawesome';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const SIGNIN_USER = gql`mutation signIn($username: String!, $password: String!) {
                    signIn(username: $username, password: $password) {
                        code
                        success
                        message
                        token
                    }
                }`;

const model = ref({
    username: '',
    password: '',
    errors: {
        username: '',
        password: ''
    },
})
let isLoginFail=ref(false);
const login = async () => {
    model.value.errors = {
        username: '',
        password: ''
    };

    if (model.value.username.length < 6) {
        model.value.errors.username = 'Username must be at least 6 characters'
    }

    if (!model.value.errors.username && !model.value.errors.password) {
        const { mutate: loggedIn } = useMutation(SIGNIN_USER, {
            variables: {
                username: model.value.username,
                password: model.value.password
            }
        });

        const result = await loggedIn();
        if(result?.data.signIn.success) {
            console.log('User logged in');
            window.localStorage.setItem('authToken', result.data.signIn.token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.signIn.token}`;
            router.push({ name: 'Home' });
        } else {
            isLoginFail.value = true; 
            console.log('Login failed');
        }
    }
}
</script>
<style>
.right-bloc {
    height: 100vh;
    background: linear-gradient(90deg, #2e6be5bb, #00d5ffa1);

}

.slider-thumb::before {
    position: absolute;
    content: "";
    right: 30%;
    top: 50%;
    width: 450px;
    height: 450px;
    background: #17141d;
    border-radius: 62% 47% 82% 35% / 45% 45% 80% 66%;
    will-change: border-radius, transform, opacity;
    animation: sliderShape 5s linear infinite;
    display: block;
    z-index: -1;
    -webkit-animation: sliderShape 5s linear infinite;
}

@keyframes sliderShape {

    0%,
    100% {
        border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
        transform: translate3d(0, 0, 0) rotateZ(0.01deg);
    }

    34% {
        border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
        transform: translate3d(0, 5px, 0) rotateZ(0.01deg);
    }

    50% {
        transform: translate3d(0, 0, 0) rotateZ(0.01deg);
    }

    67% {
        border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
        transform: translate3d(0, -3px, 0) rotateZ(0.01deg);
    }
}
</style>