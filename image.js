module.exports = {
    name: "image",

    async execute(user, args) {

        if (!args) {
            return `🎨 *Cobra Image Generator*

Usage:
.image cobra
.image cobra -style cyberpunk
.image anime cobra -style anime`
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

        const imageUrl =
            `https://image.pollinations.ai/prompt/${encodeURIComponent(finalPrompt)}?seed=${Math.floor(Math.random()*9999)}`

        return {
            text: `🎨 *Cobra Image Generator*

🧠 Prompt: ${prompt}

🎭 Style: ${style || "default"}

⚡ Generating image...
⏱ Estimated time: ~5 seconds`,
            image: imageUrl
        }

    }
}
