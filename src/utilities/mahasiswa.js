import { reactive } from "vue"
import mahasiswa from './mahasiswa.json'
import { getTransaksi, insertTransaksi, deleteTransaksi } from "./db.js"

const data = reactive([])

function refresh(){
    getTransaksi().then(res => {
        data.length = 0
        Object.assign(data, res)
        console.log(res)
    })
}

function getMahasiswa(nim){
    return mahasiswa.mahasiswa.find(mahasiswa => mahasiswa.NIM == nim)
}

function deleteItem(id){
    deleteTransaksi(id).then(res => {
        refresh()
    })
}

function addItem(nim){
    insertTransaksi(nim).then(res => {
        refresh()
    })
}

function getRawResult(){
    const selectedNim = localStorage.getItem('nim')

    const allNim = data.map(dat => dat.korban)
    return mahasiswa.mahasiswa.filter(mahasiswa => {
        if (mahasiswa.NIM == selectedNim) return false
        return !allNim.includes(mahasiswa.NIM)
    })
}

function getResult(){
    var result = "Yang belum terinput dalam LDKM:"
    getRawResult().forEach(item => {
        result += "\n - " + item.nama
    })

    return result
}

export { data, refresh, getMahasiswa, deleteItem, addItem, getResult, getRawResult }