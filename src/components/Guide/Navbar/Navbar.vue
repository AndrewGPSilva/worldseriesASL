<template>
    <nav>
        <div class="container-icons">
            <i class="pi pi-facebook" style="color: white; font-size: 28px;"></i>
            <i class="pi pi-twitter" style="color: white; font-size: 25px;"></i>
            <i class="pi pi-linkedin" style="color: white; font-size: 25px;"></i>
            <i class="pi pi-instagram" style="color: white; font-size: 25px;"></i>
            <i class="pi pi-whatsapp" style="color: white; font-size: 25px;"></i>
        </div>
        <div>
            <img src="../../../assets/op.png" alt="Logo do Site - Caveira da Tripulação do Luffy em One Piece">
        </div>
        <div class="container-authentication">
            <button class="login">LOGIN</button>
            <button class="register">REGISTER</button>
        </div>
    </nav>
</template>

<scritp lang="ts">
    export default {
        name: 'Navbar',
    }
</scritp>

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
    }

    .register {
        color: rgb(255, 0, 0);
        font-size: 28px;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
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
</style>