<template>
    <div style="margin: 0.5rem">
        <LadaHeader />
        <LadaList :items="items" />
        <LadaModal :addItem="addItem" />
    </div>
</template>

<script setup>

import { onMounted, provide, reactive, ref } from 'vue';

import LadaHeader from './components/LadaHeader.vue';
import LadaList from './components/LadaList.vue'
import LadaModal from './components/LadaModal.vue';

const dialogActive = ref(false)
const items = reactive([])

provide('dialogActive', dialogActive)

onMounted(() => {
    let localItems = localStorage.getItem('items')
    if (localItems != []) Object.assign(items, JSON.parse(localItems))
})

function addItem(item){
    items.push(item)
    localStorage.setItem('items', JSON.stringify(items))
}

</script>