<template>
    <div>
        <router-link to="/">Redirect to home</router-link>
    </div>
    <div v-for="serie in series" :key="serie.id" class="flex flex-col p-10 border border-black m-5">
        <img :src="serie.capa" alt="Capa da Serie" class="w-auto h-60">
        <h1>{{ serie.titulo }}</h1>
        <p>{{ serie.sinopse }}</p>
        <p>{{ serie.genero }}</p>
        <p>Ano: {{ serie.ano }}</p>
        <p>Temporada: {{ serie.temporadas }}</p>
        <p>Total de Episódios: {{ serie.episodios }}</p>
        <p>Classificação: {{ serie.classificacao }}</p>
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