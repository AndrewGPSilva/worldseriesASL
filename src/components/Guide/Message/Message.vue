<template>
    <div class="container">
        <p>You can find all your series and anime here on the Place Tv Community!</p>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Message'
}
</script>

<style scoped>
.container {
    background: linear-gradient(to bottom, black, #141414);
    padding: 15px;
    font-size: 30px;
    color: rgb(255, 255, 255);
    font-family: 'Fugaz One', sans-serif;
    text-align: center;
}

@media (max-width: 1280px) {
    .container p {
        font-size: 20px;
    }
}
</style>