const axios = require("axios")

module.exports = {
    name: "dld",

    async execute(user, args) {

        if (!args) {
            return `📥 *Cobra YouTube Downloader*

Usage:
.dld <youtube link>

Example:
.dld https://youtu.be/xxxx`
        }

        try {

            const api = `https://api.cobalt.tools/api/json`

            const res = await axios.post(api, {
                url: args,
                vCodec: "h264",
                vQuality: "max",
                aFormat: "mp3"
            })

            if (!res.data.url) {
                return "⚠ Failed to fetch download"
            }

            return `📥 *Cobra Downloader*

🎬 Video Link:
${args}

⬇ Download (Max Quality):
${res.data.url}`
            
        } catch (err) {

            console.log("YTDL ERROR:", err.message)

            return "⚠ Failed to fetch video"
        }
    }
}
