<template>
    <nav>
        <div class="container-icons">
            <a href="https://www.facebook.com/Andrew13G/" target="_blank"><i class="pi pi-facebook"
                    style="color: #1877f2; font-size: 28px;"></i></a>
            <a href="https://www.instagram.com/andrew_gpereira/" target="_blank"><i class="pi pi-instagram"
                    style="color: #E4405F; font-size: 25px;"></i></a>
            <a href="https://twitter.com/AndrewGPS13" target="_blank"><i class="pi pi-twitter"
                    style="color: #1DA1F2; font-size: 25px;"></i></a>
            <a href="https://api.whatsapp.com/send?phone=5511978862185&text=Olá, vim pelo seu projeto music player."
                target="_blank"><i class="pi pi-whatsapp" style="color: #25D366; font-size: 25px;"></i></a>
            <a href="https://www.linkedin.com/in/andrewgpsilva/" target="_blank"><i class="pi pi-linkedin"
                    style="color: #0077B5; font-size: 25px;"></i></a>
        </div>
        <div class="logoSite">
            <router-link to="/">
                <img src="../../../assets/op.png" alt="Logo do Site - Caveira da Tripulação do Luffy em One Piece">
            </router-link>
        </div>
        <div class="container-authentication">
            <button class="login">Login</button>
            <button class="register">Register</button>
        </div>
    </nav>
    <div class="container">
        <router-link to="/">HOME</router-link>
        <router-link to="/anime">ANIME</router-link>
        <router-link to="/serie">SERIE</router-link>
        <router-link to="/faq">FAQ</router-link>
        <router-link to="/blog">BLOG</router-link>
        <router-link to="/community">COMMUNITY</router-link>
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
    gap: 5px;
}

.container-authentication {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
}

.container-authentication button {
    cursor: pointer;
}

.container-authentication button:hover {
    text-decoration: underline;
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

i {
    cursor: pointer;
    padding: 5px;
}

i:hover {
    background-color: rgb(43, 43, 43);
    border-radius: 5px;
}

.logoSite img {
    cursor: pointer;
}

.container a {
    padding: 5px;
}

.container a:hover {
    background-color: #ff0000;
    color: white;
    border-radius: 10px;
    text-decoration: underline;
}

@media (max-width: 1280px) {
    nav {
        display: flex;
        justify-content: space-between;
    }

    .container-icons {
        display: none;
    }

    .logoSite img {
        width: 50px;
        height: 50px;
    }

    .container-authentication button {
        font-size: 20px;
    }

    .container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0;
    }
}
</style>