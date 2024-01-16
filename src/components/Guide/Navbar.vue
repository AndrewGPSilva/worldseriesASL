<template>
    <nav>
        <img src="../../assets/logo.jpeg" alt="Logo do Site">
        <router-link to="/series">Series</router-link>
    </nav>
</template>

<scritp lang="ts">
    export default {
        name: 'Navbar',
    }
</scritp>

<style scoped>
    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
</style>