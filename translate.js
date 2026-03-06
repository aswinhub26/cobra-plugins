const axios = require("axios")

module.exports = {
    name: "translate",

    async execute(user, args) {

        if (!args) {
            return `🌐 *Cobra Translator*

Usage:
.translate <text> <language>

Examples:
.translate hello ta
.translate வணக்கம் en
.translate bonjour hi

Language Codes:
en = English
ta = Tamil
hi = Hindi
fr = French
es = Spanish`
        }

        const parts = args.split(" ")

        const targetLang = parts.pop()
        const text = parts.join(" ")

        if (!text || !targetLang) {
            return "❌ Usage: .translate hello ta"
        }

        try {

            const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`

            const res = await axios.get(url)

            const translated = res.data.responseData.translatedText

            return `🌍 *Cobra Translation*

📝 Text: ${text}

🌐 Target: ${targetLang}

✨ Translation:
${translated}`

        } catch (err) {

            return "⚠ Translation service error"
        }
    }
}
