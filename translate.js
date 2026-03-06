const axios = require("axios")

module.exports = {
    name: "translate",

    async execute(user, text) {

        if (!text) {
            return "❌ Usage: .translate hello"
        }

        try {

            const res = await axios.get(
                `https://api.mymemory.translated.net/get?q=${text}&langpair=en|ta`
            )

            const translated = res.data.responseData.translatedText

            return `🌐 Translation\n\nEnglish: ${text}\nTamil: ${translated}`

        } catch (err) {

            return "⚠ Translation error"
        }
    }
}
