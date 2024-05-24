<template>
    <div class="flex flex-col items-center justify-center">
        <div class="mx-auto w-1/6 border-2 border-grey-300 shadow-md p-4 mt-32">
            <h1 class="my-4 text-center text-2xl">Sign Up</h1>
            <form @submit.prevent="signin" class="flex flex-col justify-center text-left">
                <label for="username">Username</label>
                <input type="text" v-model="model.username" name="username" placeholder="Username" required
                    class="w-full px-4 py-2  border border-gray-300 rounded-md" />
                <span class="text-red-500 mb-4">{{ model.errors.username }}</span>

                <label for="password">Password</label>
                <input type="password" v-model="model.password" name="password" placeholder="Password" required
                    class="w-full px-4 py-2  border border-gray-300 rounded-md" />
                <span class="text-red-500 mb-4">{{ model.errors.password }}</span>

                <label for="passwordConfirmation">Confirm password</label>
                <input type="password" v-model="model.confirmPassword" name="passwordConfirmation"
                    placeholder="Confirm password" required
                    class="w-full px-4 py-2  border border-gray-300 rounded-md" />
                <span class="text-red-500 mb-4">{{ model.errors.confirmPassword }}</span>

                <button type="submit" @click="signup"
                    class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Sign up</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMutation } from '@vue/apollo-composable';
import { gql } from 'graphql-tag';
import { useRouter } from 'vue-router';

const CREATE_USER = gql`mutation CreateUser($username: String!, $password: String!) {
                    createUser(username: $username, password: $password) {
                        success
                        message
                        user {
                        id
                        username
                        }
                    }
                }`;

const model = ref({
    username: '',
    mail: '',
    password: '',
    confirmPassword: '',
    errors: {
        username: '',
        password: '',
        confirmPassword: ''
    }
})

const checkPassword = (password: string): boolean => {
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    const digitRegex = /[0-9]/;

    if (!uppercaseRegex.test(password) || !specialCharRegex.test(password) || !digitRegex.test(password)) {
        return false;
    }

    return true;
}

const signup = async () => {
    model.value.errors = {
        username: '',
        password: '',
        confirmPassword: ''
    };

    if (model.value.username.length < 6) {
        model.value.errors.username = 'Username must be at least 6 characters'
    }

    if (!checkPassword(model.value.password)) {
        model.value.errors.password = 'Password must contain at least one uppercase letter, one special character and one digit'
    }

    if (model.value.password !== model.value.confirmPassword) {
        model.value.errors.confirmPassword = 'Passwords does not match'
    }

    if (!model.value.errors.username && !model.value.errors.password && !model.value.errors.confirmPassword) {
<<<<<<< HEAD
        const { mutate: createUser } = useCreateUserMutation({
=======
        const { mutate: created } = useMutation(CREATE_USER, {
>>>>>>> 36a733d (feat: Add sign-in mutation and view for article creation)
            variables: {
                username: model.value.username,
                password: model.value.password
            }
        });

<<<<<<< HEAD
        const result = await createUser() || {};

        if (result.data?.createUser?.success) {
=======
        const result = await created();
        if (result?.data.createUser.success) {
            console.log('User created');
>>>>>>> 36a733d (feat: Add sign-in mutation and view for article creation)
            localStorage.setItem('logged', 'true');
            useRouter().push('/');
        } else {
            console.log('User not created');
        }

    }
}
</script>
