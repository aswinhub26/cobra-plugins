const ytdl = require("@distube/ytdl-core")

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

        if (!ytdl.validateURL(args)) {
            return "❌ Invalid YouTube link"
        }

        try {

            const info = await ytdl.getInfo(args)

            const title = info.videoDetails.title
            const duration = info.videoDetails.lengthSeconds

            const formats = ytdl.filterFormats(info.formats, "videoandaudio")

            const best = formats.sort((a,b) => b.bitrate - a.bitrate)[0]

            return `📥 *Cobra Downloader*

🎬 Title: ${title}

⏱ Duration: ${Math.floor(duration/60)} minutes

⬇ Max Quality Download:
${best.url}`

        } catch (err) {

            console.log("YTDL ERROR:", err)

            return "⚠ Failed to fetch video"
        }
    }
}
