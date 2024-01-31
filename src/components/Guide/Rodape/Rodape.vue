<template>
    <div class="container">
        <p>2024 - All Right Reserved for  Solo GPS</p>
        <p>Your Anime | Your Series | Your Blog | Your Community | Your FAQ | All about One Piece</p>
    </div>
</template>

<script lang="ts">
export default {
    name: "Rodape"
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    text-align: center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    padding: 20px;
    font-size: 17px;
    color: rgb(158, 158, 158);
    background-color: black;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
}

@media (max-width: 1280px) {
    .container p {
        font-size: 17px;
    }
}
</style>