<script setup>

import { inject, ref } from 'vue';

const selectedOption = ref('Mendatang')
const dialog = inject('dialog')

function showDialog() { 
    dialog.id = -1
    dialog.active = true
}

</script>

<template>
    <div class="flex">
        <Select v-model="selectedOption" :options="['Mendatang', 'Lampau']" class="select"></Select>
        <Button v-on:click="showDialog" label="+" class="btn"></Button>
    </div>
</template>


<style scoped>

.flex {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: stretch;
    margin-bottom: 0.5rem;
}

.select {
    display: flex;
    align-items: center;
    flex-grow: 1;
}

.btn {
    width: 48px;
    height: 48px;
}

</style>