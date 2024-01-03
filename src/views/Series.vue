<template>
    <div>
        <h1>Series</h1>
        <router-link to="/">Redirect to home</router-link>
    </div>
    <div v-for="serie in series" :key="serie.id">
        <h1>{{ serie.titulo }}</h1>
    </div>
</template>

<script lang="ts">

interface ISerie {
    id: number;
    titulo: string;
    capa: string;
    genero: string;
    sinopse: string;
    ano: number;
    temporadas: number;
    episodios: number;
    classificacao: number;
}

import axios from 'axios'
export default {
    name: 'Series',
    data() {
        return {
            series: [] as ISerie[]
        }
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/series')
            .then(({ data }) => {
                this.series = data
            })
            .catch(err => {
                console.log(err)
            })
    }
}
</script>

<style scoped>
</style>