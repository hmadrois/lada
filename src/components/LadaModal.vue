<template>
    <Dialog v-model:visible="dialogActive" modal header="Tambah">
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

import { inject, ref } from 'vue';

const dialogActive = inject('dialogActive')
const { addItem } = defineProps(['addItem'])

const titleInvalid = ref(false)
const itemTitle = ref('')
const itemDate = ref(getTomorrow())

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
    dialogActive.value = false

    addItem(
    { 'title': itemTitle.value
    , 'date': itemDate.value.toDateString()
    })

}

</script>

<style scoped>

.dialog {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

</style>