<script setup>
import { getMahasiswa } from '@/utilities/mahasiswa';
const { inactive } = defineProps(['inactive'])
const nim = localStorage.getItem('nim')

</script>

<template>
    <div class="profile-container">
        <div class="profile-center">
            <p>{{ getMahasiswa(nim).nama }}</p>
            <button @click="inactive()" class="button is-white is-outlined">Ok</button>
        </div>
    </div>
</template>

<style scoped>

.profile-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}


.profile-center {
    background-color: var(--bulma-scheme-main);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}


</style>