<template>
    <div class="container">
        <Card v-for="item in items">
            <template #title>{{ item.title }}</template>
            <template #content>
                {{ new Date(item.date).toLocaleDateString('id-ID', rules) }}
            </template>
        </Card>
    </div>
</template>

<script setup>
const { items } = defineProps(['items'])

const rules = {
    weekday: 'long',
    year: 'numeric',
    day: 'numeric',
    month: 'long'
}

</script>

<style scoped>

.container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

</style>