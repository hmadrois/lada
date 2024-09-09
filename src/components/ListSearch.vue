<script setup>

import { getRawResult, addItem } from '@/utilities/mahasiswa';
import { inject, onMounted, reactive, watch } from 'vue';

const searchValue = inject('searchValue')
const mahasiswaTercari = reactive([])

watch(searchValue, newValue => {
    filterMahasiswa()
})

onMounted(() => {
    filterMahasiswa()
})

function filterMahasiswa(){
    mahasiswaTercari.length = 0
    Object.assign(
        mahasiswaTercari,
        getRawResult()
        .filter(mahasiswa => mahasiswa.nama.toLowerCase().includes(searchValue.value.toLowerCase()))
    )
}

function handleButton(nim){
    searchValue.value = ""
    addItem(nim)
}

</script>

<template>
    <div class="search-container">
        <div v-for="item in mahasiswaTercari" class="item-container">
            <p>{{ item.nama }}</p>
            <button class="button is-primary is-outlined" @click="handleButton(item.NIM)">+</button>
        </div>
    </div>
</template>

<style scoped>

.item-container {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.search-container {
    display: flex;
    flex-direction: column;
    overflow: auto;
    justify-content: stretch;
    align-items: stretch;
    text-align: start;
}

</style>