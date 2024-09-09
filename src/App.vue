<script setup>
import { provide, ref } from 'vue';
import NimView from './components/NimView.vue';
import ListView from './components/ListView.vue';

const selectedNim = ref("")
provide('selectedNim', selectedNim)

</script>

<template>
    <ListView v-if="selectedNim" />
    <NimView v-else />
</template>