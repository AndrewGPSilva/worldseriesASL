<template>
    <header>
        <Navbar />
    </header>
    <main>
        <Message />
    </main>
</template>

<script lang="ts">
import Navbar from '../components/Guide/Navbar/Navbar.vue'
import Message from '../components/Guide/Message/Message.vue'
export default {
    name: 'Guide',
    components: {
        'Navbar': Navbar,
        'Message': Message
    }
}
</script>