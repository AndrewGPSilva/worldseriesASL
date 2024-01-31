<template>
    <header>
        <Navbar />
    </header>
    <main>
        <TransitionGroup name="aparicao">
            <Message v-if="show" />
            <Carousel v-if="show" />
        </TransitionGroup>
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
    },
    data() {
        return {
            show: false
        }
    },
    mounted() {
        console.log("montado");
        this.animation()
    },
    methods: {
        animation() {
            console.log("certo")
            this.show = !this.show
        }
    }
}
</script>

<style scoped>
footer {
    background-color: #141414;
}

main {
    background-color: black;
}
</style>