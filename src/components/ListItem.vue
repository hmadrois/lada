<script setup>

const props = defineProps(['item', 'deleteItem', 'id'])

</script>

<template>
    <div class="is-flex item-container">
        <p>{{ item.nama }}</p>
        <button v-on:click="deleteItem(id)" class="button is-danger is-outlined">X</button>
    </div>
</template>

<style scoped>

.item-container {
    margin: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

</style>