<template>
    <div class="container">
        <button @click="nextImage">
            <i class="pi pi-arrow-left" style="color: white; font-size: 30px;"></i>
        </button>
        <img :src="currentImage" alt="">
        <button @click="previousImage">
            <i class="pi pi-arrow-right" style="color: white; font-size: 30px;"></i>
        </button>
    </div>
</template>

<script lang="ts">
export default {
    name: "Carousel",
    data() {
        return {
            images: [
                "https://i.pinimg.com/originals/d1/00/92/d1009254c0370706696faad1800154aa.jpg",
                "https://img.elo7.com.br/product/zoom/1BDDCE2/painel-festa-1x0-70cm-one-piece-personalizado.jpg",
            ],
            currentIndex: 0
        };
    },
    computed: {
        currentImage() {
            return this.images[this.currentIndex];
        }
    },
    methods: {
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        previousImage() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        }
    }
};
</script>

<style scoped>
button {
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.container {
    display: flex;
    padding: 10px 10px;
    background-color: #141414;
}

.container img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 20px;
    margin: 0px 15px;
}

@media (max-width: 1280px) {
    .container {
        display: flex;
        justify-content: space-around;
    }
    .container img {
        width: 75%;
        height: 100px;
    }
}
</style>