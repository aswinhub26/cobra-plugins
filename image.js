module.exports = {
    name: "image",

    async execute(user, args) {

        if (!args) {
            return `🎨 *Cobra Image Generator*

Usage:
.image <prompt>
.image <prompt> -style <style>

Examples:
.image cobra
.image anime cobra -style anime
.image cobra -style cyberpunk
.image futuristic city -style realistic`
        }

        let prompt = args
        let style = ""

        // detect style flag
        if (args.includes("-style")) {

            const parts = args.split("-style")

            prompt = parts[0].trim()
            style = parts[1].trim()

        }

        const finalPrompt = style
            ? `${prompt}, ${style} style, high quality, detailed`
            : prompt

        const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(finalPrompt)}`

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
