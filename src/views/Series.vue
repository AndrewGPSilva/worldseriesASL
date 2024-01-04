<template>
    <div class="flex p-5">
        <Allseries />
    </div>
    <router-link to="/">Redirect to home</router-link>
</template>

<script lang="ts">
import Allseries from '../components/Series/Allseries.vue'
export default {
    name: 'Series',
    components: {
        'Allseries': Allseries
    }
}
</script>

<style scoped>
</style>