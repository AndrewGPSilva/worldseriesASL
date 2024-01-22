<template>
    <div>
        <Navbar />
        <Routes />
    </div>
</template>

<script lang="ts">
import Navbar from '../components/Guide/Navbar/Navbar.vue'
import Routes from '../components/Guide/Routes/Routes.vue'
export default {
    name: 'Guide',
    components: {
        'Navbar': Navbar,
        'Routes': Routes
    }
}
</script>

<style scoped>
</style>
