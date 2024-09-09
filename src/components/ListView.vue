<script setup>
import { onMounted, provide, ref } from 'vue';

import { getTransaksi } from '@/utilities/db.js';
import { data, refresh, getMahasiswa } from '@/utilities/mahasiswa.js';

import ListItem from './ListItem.vue';
import ListSearch from './ListSearch.vue';
import ResultView from './ResultView.vue';
import ConfirmModal from './ConfirmModal.vue';

const searchValue = ref('')
provide('searchValue', searchValue)

const resultActive = ref(false)
provide('resultActive', resultActive)

const deleteId = ref(-1)
provide('deleteId', deleteId)

onMounted(() => {
    refresh()
})

</script>

<template>
    <div class="listview-container">
        <div class="p-4">
            <input class="input" v-model="searchValue" type="text" placeholder="Cari nama...">
        </div>
        <div class="listview-container-inner" v-if="searchValue.length == 0">
            <div style="overflow: auto; flex-grow: 1;">
                <ListItem v-for="dat in data" 
                    :item="getMahasiswa(dat.korban)" 
                    :id="dat.id"
                    :deleteItem="id => deleteId = id" />
            </div>
            <div style="padding: 1rem;">
                <button v-on:click="resultActive = true" class="button is-white listview-btn">Lihat Hasil</button>
            </div>
        </div>
        <ListSearch v-else :searchValue="searchValue" />
        <ResultView v-if="resultActive" />
        <ConfirmModal v-if="deleteId > -1" />
    </div>
</template>

<style scoped>

.listview-container {
    overflow:hidden;
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}


.listview-container-inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;
}

.listview-btn {
    max-width: 500px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
}

</style>