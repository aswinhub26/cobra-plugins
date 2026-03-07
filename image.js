const axios = require("axios")

module.exports = {
    name: "image",
    description: "Generate AI image",

    async execute(user, prompt) {

        if (!prompt) {
            return `🎨 Cobra Image Generator

Usage:
.image prompt

Example:
.image cyberpunk cobra`
        }

        try {

            const response = await axios.post(
                "https://api.deepai.org/api/text2img",
                { text: prompt },
                {
                    headers: {
                        "api-key": process.env.DEEPAI_API_KEY
                    }
                }
            )

            return {
                image: { url: response.data.output_url },
                caption: `🎨 Cobra AI Image

🧠 Prompt: ${prompt}`
            }

        } catch (err) {

            console.log("IMAGE ERROR:", err.message)

            return "⚠ Image generation failed"
        }
    }
}
