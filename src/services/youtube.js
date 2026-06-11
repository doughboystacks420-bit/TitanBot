import axios from "axios";
import { config } from "../config.js";

export async function checkYoutube(channelId) {
  const res = await axios.get(
    "https://www.googleapis.com/youtube/v3/search",
    {
      params: {
        part: "snippet",
        channelId,
        eventType: "live",
        type: "video",
        key: config.youtubeKey
      }
    }
  );

  return res.data.items[0] || null;
}