<template>
    <div class="container">
        <Card v-for="item in items">
            <template #title>{{ item.title }}</template>
            <template #content>
                {{ formatDate(item.date) }}
            </template>
        </Card>
    </div>
</template>

<script setup>

const { items } = defineProps(['items'])

function formatDate(date){
    return date.toLocaleString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        day: 'numeric',
        month: 'long'
    })
}

</script>

<style scoped>

.container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

</style>