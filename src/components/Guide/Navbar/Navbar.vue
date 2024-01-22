<template>
    <nav>
        <div class="container-icons">
            <i class="pi pi-facebook" style="color: #1877f2; font-size: 28px;"></i>
            <i class="pi pi-instagram" style="color: #E4405F; font-size: 25px;"></i>
            <i class="pi pi-twitter" style="color: #1DA1F2; font-size: 25px;"></i>
            <i class="pi pi-whatsapp" style="color: #25D366; font-size: 25px;"></i>
            <i class="pi pi-linkedin" style="color: #0077B5; font-size: 25px;"></i>
        </div>
        <div>
            <img src="../../../assets/op.png" alt="Logo do Site - Caveira da Tripulação do Luffy em One Piece">
        </div>
        <div class="container-authentication">
            <button class="login">Login</button>
            <button class="register">Register</button>
        </div>
    </nav>
    <div class="container">
        <router-link to="/series">HOME</router-link>
        <router-link to="/series">ANIME</router-link>
        <router-link to="/series">SERIE</router-link>
        <router-link to="/series">FAQ</router-link>
        <router-link to="/series">BLOG</router-link>
        <router-link to="/series">COMMUNITY</router-link>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Navbar',
}
</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-around;
    padding: 30px;
    background-color: black;
}

.login {
    color: orange;
    font-size: 28px;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    background-color: transparent;
    border: none;
}

.register {
    color: rgb(255, 0, 0);
    font-size: 28px;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    background-color: transparent;
    border: none;
}

.container-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.container-authentication {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
}

img {
    width: 100px;
    height: 100px;
}

.container {
    display: flex;
    justify-content: center;
    padding: 5px;
    gap: 30px;
    background-color: black;
    font-size: 22px;
    font-weight: bold;
    color: rgb(161, 161, 161);
    border-bottom: 2px solid gray;
}

a {
    color: #8d8d8d;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
}
</style>