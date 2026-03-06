const axios = require("axios")

module.exports = {
    name: "translate",

    async execute(user, args) {

        if (!args || !args.includes("|")) {
            return `🌐 *Cobra Translator*

Usage:
.translate text | language_code

Example:
.translate hello | ta
.translate வணக்கம் | en
.translate bonjour | hi

Supported examples:
en = English
ta = Tamil
hi = Hindi
fr = French
es = Spanish`
        }

        const parts = args.split("|")

        const text = parts[0].trim()
        const targetLang = parts[1].trim()

        try {

            const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=auto|${targetLang}`

            const res = await axios.get(url)

            const translated = res.data.responseData.translatedText
            const detected = res.data.responseData.match

            return `🌍 *Cobra Translation*

📝 Text: ${text}

🌐 Target Language: ${targetLang}

✨ Translation:
${translated}`

        } catch (err) {

            return "⚠ Translation service error"
        }
    }
}
