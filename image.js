const axios = require("axios")

module.exports = {
    name: "image",

    async execute(user, args) {

        if (!args) {
            return `🎨 Cobra Image Generator

Usage:
.image <prompt>

Example:
.image cyberpunk cobra robot`
        }

        const prompt = args

        try {

            const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`

            const response = await axios.get(imageUrl, {
                responseType: "arraybuffer"
            })

            return {
                text: `🎨 Cobra Image Generator

🧠 Prompt: ${prompt}

⚡ Generating image...
⏱ Estimated time: ~5 seconds`,
                buffer: response.data
            }

        } catch (err) {

            console.log("IMAGE ERROR:", err)

            return "⚠ Image generation failed"
        }

    }
}
