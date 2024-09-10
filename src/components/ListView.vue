<script setup>
import { onMounted, provide, ref, useTemplateRef } from 'vue';

import { data, refresh, getMahasiswa } from '@/utilities/mahasiswa.js';

import ListItem from './ListItem.vue';
import ListSearch from './ListSearch.vue';
import ResultView from './ResultView.vue';
import ConfirmModal from './ConfirmModal.vue';
import Profile from './Profile.vue';

const searchValue = ref('')
provide('searchValue', searchValue)

const resultActive = ref(false)
provide('resultActive', resultActive)

const deleteId = ref(-1)
provide('deleteId', deleteId)

const searchBar = useTemplateRef('searchBar')

const profileActive = ref(false)

const searchBarFocus = () => {
    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.key == 'k'){
            event.preventDefault()
            searchBar.value.focus()
        }
    })
}

onMounted(() => {
    refresh()
    searchBarFocus()
})


</script>

<template>
    <div class="listview-container">
        <div class="p-4 is-flex">
            <button class="mr-2 button" @click="profileActive = true">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                </svg>
            </button>
            <input ref="searchBar" class="input" v-model="searchValue" type="text" placeholder="Cari nama...">
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
        <Profile v-if="profileActive" :inactive="() => profileActive = false" />
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