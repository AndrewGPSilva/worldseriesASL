<template>
    <header>
        <Navbar />
    </header>
</template>

<script lang="ts">
import Navbar from '../components/Guide/Navbar/Navbar.vue'
export default {
    name: 'Guide',
    components: {
        'Navbar': Navbar,
    }
}
</script>