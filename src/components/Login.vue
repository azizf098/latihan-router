t<template>
    <div class="container mx-auto mt-8">
        <h1 class="text-3x1 font-semibold mb-4">Login</h1>
        <form @submit.prevent="login">
            <div class="mb-4">
                <label for="username" class="block font-medium">Username:</label>
                <input type="text" id="username" v-model="username" class="mt-1 p-2 rounded border w-60" required>
            </div>
            <div class="mb-4">
                <label for="password" class="block font-medium">Password:</label>
                <input type="password" id="password" v-model="password" class="mt-1 p-2 rounded border w-60" required>
            </div>
            <div>
                <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Login</button>
            </div>
        </form>
    </div>
</template>
<script>
import { user } from '../assets/user';

export default {
    data() {
        return {
            username: '',
            password: '',
            isLoggedIn: true
        };
    },
    methods: {
        login() {
            const foundUser = user.find(user => user.username == this.username && user.passsword == this.password && user.isLoggedIn == true);
            if (foundUser) {
                alert('Login berhasil!');
                this.$router.push('/produk');
                // Anda dapat melakukan navigasi ke halaman lain jika login berhasil
            } else {
                alert('Username atau password salah');
            }
        },
    },
};
</script>