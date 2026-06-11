import {pool} from "../db.js";
export async function setRolePing(i){ 
 const platform = i.options. getstrings ("platfrom");
 const platform = i.options. getstrings ("username");
 const platform = i.options. getstrings ("role");


await pool.query(
    `update streams
    SET roles_id=$1
    where platfrom=$2 and username=$3
    [role.id,platfrom, username]
);


await i.reply(setRolePing: ${rolename}');
}