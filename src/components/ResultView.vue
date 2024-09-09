<script setup>

import { getResult } from '@/utilities/mahasiswa';
import { inject } from 'vue';

const resultActive = inject('resultActive')

function copyText(){
    navigator.clipboard.writeText(getResult())
}

</script>

<template>
    <div>
        <div class="result-container black"></div>
        <div class="result-container white">
            <div style="flex-grow: 1; overflow: auto; padding: 2rem;">
                <p style="white-space: pre-line">
                    {{ getResult() }}
                </p>
            </div>
            <button @click="copyText" class="button is-white" style="margin: 0 2rem;">Salin</button>
            <button @click="resultActive = false" class="button is-white is-outlined" style="margin: 1rem 2rem;">Keluar</button>
        </div>
    </div>
</template>

<style>

.result-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.black {
    background-color: black;
    opacity: 0.5;
}

.white {
    background-color: var(--bulma-scheme-main);

    display: flex;
    flex-direction: column;
}

</style>