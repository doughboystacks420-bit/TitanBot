import axios from "axios";
import { config } from "../config.js";

let token = null;

async function getToken() {
  const res = await axios.post(
    "https://id.twitch.tv/oauth2/token",
    null,
    {
      params: {
        client_id: config.twitchId,
        client_secret: config.twitchSecret,
        grant_type: "client_credentials"
      }
    }
  );

  token = res.data.access_token;
}

export async function checkTwitch(user) {
  if (!token) await getToken();

  const res = await axios.get(
    `https://api.twitch.tv/helix/streams?user_login=${user}`,
    {
      headers: {
        "Client-ID": config.twitchId,
        Authorization: `Bearer ${token}`
      }
    }
  );

  return res.data.data[0] || null;
}