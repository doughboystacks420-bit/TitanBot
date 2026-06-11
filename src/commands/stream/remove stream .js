import { pool } from "../db.js";

export async function removeStream(i) {
  const platform = i.options.getString("platform");
  const username = i.options.getString("username");

  await pool.query(
    `DELETE FROM streams WHERE platform=$1 AND username=$2`,
    [platform, username]
  );

  await i.reply("Removed.");
}