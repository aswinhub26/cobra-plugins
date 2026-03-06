const axios = require("axios")

module.exports = {
    name: "image",

    async execute(user, args) {

        if (!args) {
            return `🎨 *Cobra Image Generator*

Usage:
.image cobra
.image anime cobra -style anime
.image cobra -style cyberpunk`
        }

        let prompt = args
        let style = ""

        if (args.includes("-style")) {
            const parts = args.split("-style")
            prompt = parts[0].trim()
            style = parts[1].trim()
        }

        const finalPrompt = style
            ? `${prompt}, ${style} style, ultra detailed`
            : prompt

        const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(finalPrompt)}`

        try {

            const img = await axios.get(url, {
                responseType: "arraybuffer",
                headers: {
                    "User-Agent": "Mozilla/5.0"
                }
            })

            return {
                text: `🎨 *Cobra Image Generator*

🧠 Prompt: ${prompt}

🎭 Style: ${style || "default"}

⚡ Generating image...
⏱ Estimated time: ~5 seconds`,
                buffer: img.data
            }

        } catch (err) {

            console.log("IMAGE ERROR:", err.message)

            return "⚠ Image generation failed"
        }
    }
}
