import { Database } from "@sqlitecloud/drivers";

const db = new Database("sqlitecloud://ciupvtd6sz.sqlite.cloud:8860?apikey=uDrdNJaawjpEubGGN35Q0WpfosVZDpfakENhz0radzE")
const useDB = 'USE DATABASE lada;'

async function getTransaksi(){
    const nim = localStorage.getItem('nim')
    const query = `${useDB} SELECT * FROM transaksi WHERE pelaku="${nim}"`
    return await db.sql(query)
}

async function insertTransaksi(nimKorban){
    const nimPelaku = localStorage.getItem('nim')
    const query = `${useDB} INSERT INTO transaksi(pelaku, korban) VALUES("${nimPelaku}", "${nimKorban}")`
    return await db.sql(query)
}

async function deleteTransaksi(id){
    const query = `${useDB} DELETE FROM transaksi WHERE id=${id}`
    return await db.sql(query)
}

export { getTransaksi, insertTransaksi, deleteTransaksi }