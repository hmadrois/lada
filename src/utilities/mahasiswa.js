import { reactive } from "vue"
import mahasiswa from './mahasiswa.json'
import { getTransaksi, insertTransaksi, deleteTransaksi } from "./db.js"

const data = reactive([])

function refresh(){
    getTransaksi().then(res => {
        data.length = 0
        Object.assign(data, res)
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
    var result = "Yang belum terinput dalam LDKM: \n"
    const rawResult = getRawResult()
    rawResult.forEach(item => {
        result += "\n - (" + item.NIM.slice(-2) + ") " + item.nama
    })

    
    result += "\n\n Total Belum: " + rawResult.length
    result += "\n Total Sudah: " + (85 - rawResult.length)

    return result
}

export { data, refresh, getMahasiswa, deleteItem, addItem, getResult, getRawResult }
