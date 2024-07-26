<template>
    <Dialog v-model:visible="dialog.active" modal :header="dialog.id > -1 ? 'Edit' : 'Tambah'">
        <div class="dialog">
            <InputGroup>
                <InputGroupAddon>
                    <i class="pi pi-pencil"></i>
                </InputGroupAddon>
                <InputText v-model="itemTitle" placeholder="Judul" :invalid="titleInvalid" />
            </InputGroup>
            <InputGroup>
                <InputGroupAddon>
                    <i class="pi pi-calendar"></i>
                </InputGroupAddon>
                <DatePicker v-model="itemDate" :min-date="getTomorrow()" date-format="DD, dd MM yy" placeholder="Tanggal" />
            </InputGroup>
            <Button label="Press" v-on:click="itemSubmit"></Button>
        </div>
    </Dialog>
</template>

<script setup>

import { inject, ref, watch } from 'vue';

const dialog = inject('dialog')
const { addItem, getItem } = defineProps(['addItem', 'getItem'])

const titleInvalid = ref(false)
const itemTitle = ref('')
const itemDate = ref(getTomorrow())

watch(dialog, () => {
    if (dialog.active == false) return
    if (dialog.id > -1){
        let item = getItem(dialog.id)
        itemTitle.value = item.title
        itemDate.value = new Date(item.date)
    } 
    else {
        itemTitle.value = '',
        itemDate.value = getTomorrow()
    }
})

function getTomorrow(){
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow
}

function itemSubmit(){
    if (itemTitle.value.length == 0){
        titleInvalid.value = true
        return
    }

    titleInvalid.value = false
    dialog.active = false

    let item = {
        'title': itemTitle.value,
        'date': itemDate.value.toDateString()
    }

    if (dialog.id > -1) item['id'] = dialog.id

    addItem(item)

}

</script>

<style scoped>

.dialog {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

</style>