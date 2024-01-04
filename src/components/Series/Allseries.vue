<template>
    <div v-for="serie in series" :key="serie.id"
        class="group flex flex-col justify-start mx-6 items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-gray-800">
        <div alt="image here"
            class="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-800">
            <img :src="serie.capa" class="w-full h-full rounded-lg cursor-pointer" />
        </div>

        <div class="">
            <h2 class="text-2xl font-bold mb-2 text-gray-100">{{ serie.titulo }}</h2>
            <p class="text-gray-200 line-clamp-3">
                {{ serie.sinopse }}
            </p>
        </div>
        <router-link :to="'/series/' + serie.id">
            <button class="hover:bg-gray-700 bg-gray-800 text-gray-100 font-bold mt-6 rounded p-2 px-6">
                Explorar
            </button>
        </router-link>
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
    name: 'Allseries',
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