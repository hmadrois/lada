<script setup>
import { inject, onMounted } from 'vue';

import { data, getMahasiswa } from '@/utilities/mahasiswa';
import { deleteItem } from '@/utilities/mahasiswa';

const deleteId = inject('deleteId')

function getNamaFromId(){
    const result = data.find(dat => dat.id == deleteId.value)
    return getMahasiswa(result.korban).nama
}

onMounted(() => getNamaFromId())


</script>

<template>
    <div class="confirm-modal-container">
        <div class="confirm-modal-container black"></div>
        <div class="confirm-modal-container white">
            <h2 style="flex-grow: 1;">Apakah anda ingin menghapus {{ getNamaFromId() }}?</h2>
            <button @click="() => {deleteItem(deleteId); deleteId = -1}" class="button is-danger is-outlined">Hapus</button>
            <button @click="deleteId = -1" class="button is-white is-outlined">Batal</button>
        </div>
    </div>
</template>

<style scoped>

.confirm-modal-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.black {
    background-color: black;
    opacity: 0.5;
}

.white {
    background-color: var(--bulma-scheme-main);

    display: flex;
    flex-direction: column;

    padding: 2rem;
    
    height: auto;
    top: auto;

    bottom: 0;

    gap: 1rem;
}

</style>