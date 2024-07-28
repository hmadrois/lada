<script setup>

import { inject } from 'vue'
import { useConfirm } from 'primevue/useconfirm'
import { items, deleteItem } from '@/items';

const confirm = useConfirm()
const dialog = inject('dialog')

const rules = {
    weekday: 'long',
    year: 'numeric',
    day: 'numeric',
    month: 'long'
}

function isToday(date){
    const today = new Date().toDateString()
    return (date == today)
}

function SplitButtonModel(index){
    return [
        { 
            label: 'Edit', 
            icon: 'pi pi-pencil', 
            command: () => { 
                dialog.id = index
                dialog.active = true 
            }
        },

        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => confirm.require({
                message: 'Hapus item terpilih?',
                header: 'Konfirmasi Penghapusan',
                rejectProps: {
                    label: 'Batal',
                    severity: 'secondary',
                    outlined: true
                },
                acceptProps: {
                    label: 'Hapus',
                    severity: 'danger'
                },
                accept: () => deleteItem(index)
            })
        },
    ]
}

</script>

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
                        :model="SplitButtonModel(index)"
                        :label="isToday(item.date) ? 'Saya Ingat!' : 'Akan Datang'" 
                        :severity="isToday(item.date) ? 'success' : 'warn'" ></SplitButton>
                </div>
            </template>
        </Card>
    </div>
</template>


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