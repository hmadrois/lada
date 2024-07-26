<template>
    <div style="margin: 0.5rem">
        <LadaHeader />
        <LadaList :items="items" />
        <LadaModal :addItem="addItem" :getItem="getItem" />
    </div>
</template>

<script setup>

import { onMounted, provide, reactive, ref } from 'vue';

import LadaHeader from './components/LadaHeader.vue';
import LadaList from './components/LadaList.vue'
import LadaModal from './components/LadaModal.vue';

const dialog = reactive({ 
    active: false,
    id: -1
})

const items = reactive([])
provide('dialog', dialog)

onMounted(() => {
    let localItems = localStorage.getItem('items')
    if (localItems != []) Object.assign(items, JSON.parse(localItems))
})

function addItem(item){
    if (item.id == undefined) items.push(item)
    else items[item.id] = item
    localStorage.setItem('items', JSON.stringify(items))

}

function getItem(id) { return items[id] }

</script>