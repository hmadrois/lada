<template>
    <LadaHeader />
    <LadaList />
    <LadaModal />
</template>

<script setup>

import { provide, ref } from 'vue';

import LadaHeader from './components/LadaHeader.vue';
import LadaList from './components/LadaList.vue'
import LadaModal from './components/LadaModal.vue';

const dialogActive = ref(false)
provide('dialogActive', dialogActive)

</script>