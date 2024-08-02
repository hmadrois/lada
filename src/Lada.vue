<script setup>

import { provide, reactive, onMounted } from 'vue';
import { items } from '@/items';

import LadaHeader from './components/LadaHeader.vue';
import LadaList from './components/LadaList.vue'
import LadaModal from './components/LadaModal.vue';

const dialog = reactive({ 
    active: false,
    id: -1
})

provide('dialog', dialog)

onMounted(() => {
    let localItems = localStorage.getItem('items')
    if (localItems != []) Object.assign(items, JSON.parse(localItems))

    Notification.requestPermission().then(res => {
    })
})

</script>

<template>
    <div style="margin: 0.5rem">
        <LadaHeader />
        <LadaList />
        <LadaModal />

        <ConfirmDialog></ConfirmDialog>
    </div>
</template>
