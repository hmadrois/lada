<script setup>

import { onMounted, provide, reactive, ref, watch } from 'vue';

import LadaHeader from './components/LadaHeader.vue';
import LadaList from './components/LadaList.vue'
import LadaModal from './components/LadaModal.vue';

const items = reactive([])

const dialog = reactive({ 
    active: false,
    id: -1
})
provide('dialog', dialog)

let init = false

onMounted(() => {
    let localItems = localStorage.getItem('items')
    if (localItems != []) Object.assign(items, JSON.parse(localItems))
})

watch(items, () => {
    if (!init){
        init = true
        return
    }
    localStorage.setItem('items', JSON.stringify(items))
})

function addItem(item){
    if (item.id == undefined) items.push(item)
    else items[item.id] = item
}

function getItem(id) { return items[id] }
function deleteItem(id) { items.splice(id, 1) }
</script>

<template>
    <div style="margin: 0.5rem">
        <LadaHeader />
        <LadaList :items="items" :deleteItem="deleteItem" />
        <LadaModal :addItem="addItem" :getItem="getItem" />
        <ConfirmDialog></ConfirmDialog>
    </div>
</template>
