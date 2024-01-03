<template>
    <div class="bg-black text-white">
        <ul>
            <li>
                <router-link to="/dashboard">Dashboard</router-link>
            </li>
            <li>
                <router-link to="/series">Series</router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
export default {
    name: 'List'
}
</script>

<style scoped>
</style>