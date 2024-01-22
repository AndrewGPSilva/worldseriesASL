<template>
    <header>
        <Navbar />
    </header>
    <main>
        <Message />
        <Carousel />
    </main>
</template>

<script lang="ts">
import Navbar from '../components/Guide/Navbar/Navbar.vue'
import Message from '../components/Guide/Message/Message.vue'
import Carousel from '../components/Guide/Carousel/Carousel.vue'
export default {
    name: 'Guide',
    components: {
        'Navbar': Navbar,
        'Message': Message,
        'Carousel': Carousel
    }
}
</script>