<template>
    <div v-if="serie">
        <h1>{{ serie?.titulo }}</h1>
        <img :src="serie?.capa" :alt="serie?.titulo" />
        <p>{{ serie?.sinopse }}</p>
        <p>{{ serie?.classificacao }}</p>
        <p>{{ serie?.genero }}</p>
        <p>{{ serie?.ano }}</p>
        <p>{{ serie?.temporadas }}</p>
        <p>{{ serie?.episodios }}</p>
        <router-link :to="{ name: 'Guide' }">Voltar</router-link>
    </div>
    <div v-else>
        <p>Carregando...</p>
    </div>
</template>

<script lang="ts">
import axios from 'axios'
import { ISerie } from '../../interfaces/SerieInterface';

export default {
    name: "SerieId",
    created() {
        const serieId = this.$route.params.id;
        const apiUrl = `http://127.0.0.1:8000/api/series/${serieId}`;

        axios.get(apiUrl)
            .then(response => {
                this.serie = response.data;
            })
            .catch(error => {
                console.error('Erro ao buscar os detalhes da serie:', error);
            });
    },
    data() {
        return {
            serie: null as ISerie | null,
        };
    },
};
</script>