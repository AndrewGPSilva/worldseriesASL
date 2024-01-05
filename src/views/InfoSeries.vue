<template>
    <div>
        <h1>InfoSerie</h1>
        <SerieId />
    </div>
</template>

<script lang="ts">
import SerieId from '@/components/InfoSeries/SerieId.vue'
export default {
    name: 'InfoSeries',
    components: {
        'SerieId': SerieId
    }
}
</script>