const Replicate = require("replicate")

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN
})

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

      const output = await replicate.run(
        "stability-ai/sdxl:39ed52f2a78e934a",
        {
          input: { prompt: prompt }
        }
      )

      return {
        image: { url: output[0] },
        caption: `🎨 Cobra AI Image

🧠 Prompt: ${prompt}`
      }

    } catch (err) {

      console.log("IMAGE ERROR:", err)

      return "⚠ Image generation failed"
    }
  }
}
