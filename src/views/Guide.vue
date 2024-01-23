<template>
    <header>
        <Navbar />
    </header>
    <main>
        <Message />
        <Carousel />
    </main>
    <footer>
        <Rodape />
    </footer>
</template>

<script lang="ts">
import Navbar from '../components/Guide/Navbar/Navbar.vue'
import Message from '../components/Guide/Message/Message.vue'
import Carousel from '../components/Guide/Carousel/Carousel.vue'
import Rodape from '../components/Guide/Rodape/Rodape.vue'

export default {
    name: 'Guide',
    components: {
        'Navbar': Navbar,
        'Message': Message,
        'Carousel': Carousel,
        'Rodape': Rodape
    }
}
</script>

<style scoped>
footer {
    background-color: #141414;
}
</style>