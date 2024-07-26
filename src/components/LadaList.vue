<template>
    <div class="container">
        <Card v-for="(item, index) in items">
            <template #content>
                <div class="row" style="justify-content: space-between;">
                    <p>{{ item.title }}</p>
                    <p>{{ new Date(item.date).toLocaleDateString('id-ID', rules) }}</p>
                </div>
            </template>
            <template #footer>
                <div class="row end">
                    <SplitButton 
                        :model="[
                            {
                                label: 'Edit',
                                icon: 'pi pi-pencil',
                                command: () => { dialog.id = index; dialog.active = true; }
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-trash',
                                command: () => {}
                            },
                            {
                                label: 'Share',
                                icon: 'pi pi-share-alt',
                                command: () => {}
                            }
                        ]"
                        :label="isToday(item.date) ? 'Saya Ingat!' : 'Akan Datang'" 
                        :severity="isToday(item.date) ? 'success' : 'warn'" ></SplitButton>
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
import { inject, ref } from 'vue';

const { items } = defineProps(['items'])
const dialog = inject('dialog')

const rules = {
    weekday: 'long',
    year: 'numeric',
    day: 'numeric',
    month: 'long'
}

function isToday(date){
    const today = new Date().toDateString()
    if (date == today) return true
    return false
}

</script>

<style scoped>

.container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.row {
    display: flex;
    flex-direction: row;
}

.end {
    justify-content: end;
    gap: 0.5rem;
}


</style>