import { reactive, watch } from 'vue'

const items = reactive([])

// Update
watch(items, () => {
    localStorage.setItem('items', JSON.stringify(items))
})

function addItem(val){
    if (val.id == undefined) items.push(val)
    else items[val.id] = val
}

function getItem(id){ return items[id] }

function deleteItem(id){ items.splice(id, 1) }

export { items, addItem, getItem, deleteItem }