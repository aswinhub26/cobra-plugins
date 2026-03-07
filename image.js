module.exports = {
    name: "image",

    async execute(user, prompt) {

        if (!prompt) {
            return "🎨 Usage:\n.image prompt"
        }

        const url =
        `https://picsum.photos/seed/${encodeURIComponent(prompt)}/1024/1024`

        return {
            image: { url: url },
            caption: `🎨 Cobra Image\n\nPrompt: ${prompt}`
        }
    }
}
