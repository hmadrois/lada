<template>
    <div style="margin: 0.5rem">
        <LadaHeader />
        <LadaList :items="items" />
        <LadaModal :addItem="addItem" />
    </div>
</template>

<script setup>

import { provide, reactive, ref } from 'vue';

import LadaHeader from './components/LadaHeader.vue';
import LadaList from './components/LadaList.vue'
import LadaModal from './components/LadaModal.vue';

const dialogActive = ref(false)
const items = reactive([])

provide('dialogActive', dialogActive)

function addItem(item){
    items.push(item)
    console.log(items)
}

</script>