<script setup>
import { inject, ref, watch } from 'vue';

const nim = ref("")
const selectedNim = inject('selectedNim')

// Memastikan nilai nim selalu dua digit dan angka
watch(nim, (newNim, oldNim) => {
    if (!isFinite(newNim)) {
        nim.value = oldNim
        return
    }

    if (newNim.length > 2){
        nim.value = oldNim
        return
    }

    if (newNim.length <= 0) return
})

function submitNim(){
    if (nim.value.length > 2 || nim.value.length <= 0) return

    const newNim = "K35240" + nim.value.padStart(2, '0')
    selectedNim.value = newNim
    localStorage.setItem('nim', newNim)
}

</script>

<template>
    <div class="center">
        <input class="input" type="text" placeholder="Masukkan 2 Digit terakhir NIM.." v-model="nim">
        <input class="button is-white" type="submit" value="Masuk" v-on:click="submitNim">
    </div>
</template>

<style scoped>

.center {
    position: absolute;
    width: 100%;
    padding: 2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 500px;
}

</style>