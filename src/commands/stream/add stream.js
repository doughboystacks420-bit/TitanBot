import { pool } from "../db.js";

export async function addStream(i) {
  const platform = i.options.getString("platform");
  const username = i.options.getString("username");

  await pool.query(
    `INSERT INTO streams(platform, username)
     VALUES($1,$2)
     ON CONFLICT DO NOTHING`,
    [platform, username]
  );

  await i.reply(`Added ${username} (${platform})`);
}