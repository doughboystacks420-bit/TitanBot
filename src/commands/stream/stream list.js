import {pool} from "../db.js";
export async function liststreams(i){
    const {rows}= await pool.query("select * from streams");

    if (!rows.length)return ireply("no stream found");
const msg =rows
.map(r=> `${.platfrom}: ${r.username}`)
.join("/n");

await i.reply (msg);
}