<template>
    <div class="flex">
        <Select v-model="selectedOption" :options="['Mendatang', 'Lampau']" class="select"></Select>
        <Button v-on:click="dialogActive = true" label="+" class="square"></Button>
    </div>
</template>

<script setup>

import { inject, ref } from 'vue';

const selectedOption = ref('Mendatang')
const dialogActive = inject('dialogActive')

</script>

<style scoped>

.flex {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items:stretch;
}

.select {
    display: flex;
    align-items: center;
    flex-grow: 1;
}

.square {
    width: 48px;
    height: 48px;
}

</style>