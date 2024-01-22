<template>
    <div class="container">
        <router-link to="/series">HOME</router-link>
        <router-link to="/series">ANIME</router-link>
        <router-link to="/series">SERIE</router-link>
        <router-link to="/series">FAQ</router-link>
        <router-link to="/series">BLOG</router-link>
        <router-link to="/series">COMMUNITY</router-link>
    </div>
</template>

<script lang="ts">
export default {
    name: "Routes"
}
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        padding: 5px;
        gap: 30px;
        background-color: black;
        font-size: 22px;
        font-weight: bold;
        color: rgb(161, 161, 161);
        border-bottom: 2px solid gray;
    }
</style>