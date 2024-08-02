<script setup>
import { onMounted, ref } from 'vue';

const visible = ref(false)

onMounted(() => Notification.requestPermission().then(checkPermission))

function requestPermission(){
    Notification.requestPermission().then(checkPermission)
}

function checkPermission(message){
    if (message === "default" || message === "denied") visible.value = true
    else if (message === "granted") visible.value = false
}

</script>

<template>
    <Dialog modal v-model:visible="visible" header="Informasi" position="top">
        <div class="flex">
            <p>Website ini tidak berfungsi tanpa izin notifikasi</p>
            <Button v-on:click="requestPermission">Aktifkan</Button>
        </div>
    </Dialog>
</template>