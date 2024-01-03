<template>
    <div class="bg-red-400">
        <h1 class="text-blue-700">Guide</h1>
        <List />
    </div>
</template>

<script lang="ts">
import List from '../components/Guide/List.vue'
export default {
    name: 'Guide',
    components: {
        'List': List
    }
}
</script>

<style scoped>
</style>
