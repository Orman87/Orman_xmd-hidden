// give credits to Kelvin Tech 
// OWNER orman King 
async function sendMenu(bot, m, prefix, global, pushname, totalCases) {
    try {
        const more = String.fromCharCode(8206);
        const readmore = more.repeat(4001);
        // 🎨 Random Theme Emojis
        const theme = ["🔥"];
        
        const menuText = `
> ╭━𑁍〔${theme} O𝚁𝙼𝙰𝙽-X𝙼𝙳 v2.0 〕╼
> ┃ ❀ Owner : 𖤍 ᵏⁱⁿᵍ ᵒʳᵐᵃⁿ 𖤍
> ┃ ❀ User  : ${pushname || "Unknown"}
> ┃ ❀ Mode  : ${bot.public ? "🌍 Public" : "🔒 Self"}
> ┃ ❀ Prefix : ${prefix}
> ┃ ❀︎ Commands : ${totalCases}+ online
> ┃ ❀ Runtime : ${runtime(process.uptime())}
> ╰━𑁍━══━═━❁━═━══━𑁍━╯
${readmore}
╭━◈〔 👑 OWNER MENU 〕─╼
┃ ◈ ${prefix}public
┃ ◈ ${prefix}self
┃ ◈ ${prefix}setppbot
┃ ◈ ${prefix}setbio
┃ ◈ ${prefix}block
┃ ◈ ${prefix}unblock
┃ ◈ ${prefix}addpremium
┃ ◈ ${prefix}delpremium
┃ ◈ ${prefix}restart
┃ ◈ ${prefix}eval
┃ ◈ ${prefix}userinfo
┃ ◈ ${prefix}dev
╰━◈━━━━━━━━❁━━━━━━◈━╯
${readmore}
╭━◈〔 👥 GROUP MENU 〕─╼
┃ ◈ ${prefix}kick
┃ ◈ ${prefix}add
┃ ◈ ${prefix}couple
┃ ◈ ${prefix}promote
┃ ◈ ${prefix}demote
┃ ◈ ${prefix}tagall
┃ ◈ ${prefix}hidetag
┃ ◈ ${prefix}setppgc
┃ ◈ ${prefix}antitoxic
┃ ◈ ${prefix}linkgc
┃ ◈ ${prefix}antilink
┃ ◈ ${prefix}invite
┃ ◈ ${prefix}pin
┃ ◈ ${prefix}unpin
┃ ◈ ${prefix}groupunlock
┃ ◈ ${prefix}grouplock
┃ ◈ ${prefix}mute 
┃ ◈ ${prefix}unmute
┃ ◈ ${prefix}groupinfo
╰━◈━━━━━━━❁━━━━━━━◈━╯
${readmore}
╭━◈〔 🎧 DOWNLOADS 〕─╼
┃ ◈ ${prefix}ytmp4
┃ ◈ ${prefix}orman-play
┃ ◈ ${prefix}play
┃ ◈ ${prefix}music
┃ ◈ ${prefix}song
┃ ◈ ${prefix}video
┃ ◈ ${prefix}ytmp3
┃ ◈ ${prefix}tiktok
┃ ◈ ${prefix}facebook
┃ ◈ ${prefix}instagram
┃ ◈ ${prefix}spotify
┃ ◈ ${prefix}animepic
┃ ◈ ${prefix}avatar
┃ ◈ ${prefix}dog
┃ ◈ ${prefix}cat
┃ ◈ ${prefix}space
┃ ◈ ${prefix}movie
┃ ◈ ${prefix}imagine
┃ ◈ ${prefix}radio
╰━◈━━━━━━━━❁━━━━━━◈━╯
${readmore}
╭━◈〔 🧠 AI MENU 〕─╼
┃ ◈ ${prefix}ai
┃ ◈ ${prefix}horoscope
┃ ◈ ${prefix}define
┃ ◈ ${prefix}chatgpt
┃ ◈ ${prefix}aichat
┃ ◈ ${prefix}resetai
┃ ◈ ${prefix}openai
┃ ◈ ${prefix}gemini
┃ ◈ ${prefix}chatbot
╰━◈━━━━━━━❁━━━━━━━◈━╯
${readmore}
╭━◈〔 ⚙️ UTILITY MENU 〕─╼
┃ ◈ ${prefix}ping
┃ ◈ ${prefix}crypto
┃ ◈ ${prefix}color
┃ ◈ ${prefix}timezones
┃ ◈ ${prefix}math
┃ ◈ ${prefix}sysinfo
┃ ◈ ${prefix}botstatus
┃ ◈ ${prefix}runtime
┃ ◈ ${prefix}delete
┃ ◈ ${prefix}shortlink
┃ ◈ ${prefix}qr
┃ ◈ ${prefix}tourl
┃ ◈ ${prefix}weather
┃ ◈ ${prefix}location
┃ ◈ ${prefix}advice
┃ ◈ ${prefix}news
┃ ◈ ${prefix}screenshot
┃ ◈ ${prefix}translate
┃ ◈ ${prefix}reminder
┃ ◈ ${prefix}shorten
┃ ◈ ${prefix}whois
╰━◈━━━━━━━━❁━━━━━━◈━╯
${readmore}
╭━◈〔 🧰 CONVERT & TOOLS 〕─╼
┃ ◈ ${prefix}sticker
┃ ◈ ${prefix}toimg
┃ ◈ ${prefix}toaudio
┃ ◈ ${prefix}tovideo
┃ ◈ ${prefix}tourl
┃ ◈ ${prefix}tts
┃ ◈ ${prefix}fancy
┃ ◈ ${prefix}removebg
┃ ◈ ${prefix}logo
┃ ◈ ${prefix}convert
╰━◈━━━━━━━❁━━━━━━━◈━╯
${readmore}
╭━◈〔 🎮 FUN & GAMES 〕─╼
┃ ◈ ${prefix}guessnum
┃ ◈ ${prefix}answer
┃ ◈ ${prefix}coin
┃ ◈ ${prefix}dice
┃ ◈ ${prefix}quiz
┃ ◈ ${prefix}rps
┃ ◈ ${prefix}wish
┃ ◈ ${prefix}fight
┃ ◈ ${prefix}wishme
┃ ◈ ${prefix}roast
┃ ◈ ${prefix}motivate
┃ ◈ ${prefix}pickup
┃ ◈ ${prefix}love
┃ ◈ ${prefix}joke
┃ ◈ ${prefix}meme
┃ ◈ ${prefix}slot
┃ ◈ ${prefix}funfact
┃ ◈ ${prefix}toss
┃ ◈ ${prefix}quotes
┃ ◈ ${prefix}truth
┃ ◈ ${prefix}dare
┃ ◈ ${prefix}riddle
┃ ◈ ${prefix}animequote
╰━◈━━━━━━━━❁━━━━━━◈━╯
${readmore}
╭━◈〔 💻 CODING MENU 〕─╼
┃ ◈ ${prefix}decode
┃ ◈ ${prefix}encode
╰━◈━━━━━━━❁━━━━━━━◈━╯
${readmore}
╭━◈〔 🔍 SEARCH MENU 〕─╼
┃ ◈ ${prefix}lyrics
┃ ◈ ${prefix}ytinfo
┃ ◈ ${prefix}google
┃ ◈ ${prefix}cinfo
┃ ◈ ${prefix}shazam
┃ ◈ ${prefix}movie
┃ ◈ ${prefix}yts
┃ ◈ ${prefix}itunes
╰━◈━━━━━━━❁━━━━━━━◈━╯
${readmore}
╭━◈〔 🌈 EFFECTS & LOGOS 〕─╼
┃ ◈ ${prefix}neonlight
┃ ◈ ${prefix}galaxy
┃ ◈ ${prefix}flagtext
┃ ◈ ${prefix}mirror
┃ ◈ ${prefix}toanime
┃ ◈ ${prefix}toreal
┃ ◈ ${prefix}comment
┃ ◈ ${prefix}smoketext
┃ ◈ ${prefix}gradient
┃ ◈ ${prefix}bloodtext
┃ ◈ ${prefix}frametext
┃ ◈ ${prefix}diamondtext
┃ ◈ ${prefix}icetext
┃ ◈ ${prefix}skulltext
┃ ◈ ${prefix}gaminglogo
┃ ◈ ${prefix}rainbow
┃ ◈ ${prefix}warrior
┃ ◈ ${prefix}logo
┃ ◈ ${prefix}logo2
┃ ◈ ${prefix}arting
┃ ◈ ${prefix}galaxystyle
┃ ◈ ${prefix}galaxywallpaper
┃ ◈ ${prefix}imagegen
┃ ◈ ${prefix}deadpool
╰━◈━━━━━━━❁━━━━━━◈━╯
${readmore}
╭━◈〔 📖 RELIGION MENU 〕─╼
┃ ◈ ${prefix}bible
┃ ◈ ${prefix}quran
╰━◈━━━━━━━❁━━━━━◈━╯
${readmore}
> ╭─❖〔 📰 UPDATES 〕─╼
> ┃ ⛓️ Stay tuned for Orman-XMD updates!
> ┃ ⛓️ New features arriving soon 🚀
> ╰─❖━━━━━━❁━━━━━❖─╯
${readmore}
> ╭───────────────╼ ✵
> ╎ *_Powered By_* : 𝘽𝙡𝙖𝙘𝙠 𝙏𝙚𝙘𝙝 ™
> ╰───────────────╼ ✵
${readmore}
◈━═━〔 *INFO & CREDITS* 〕━═━◈
◈ *_Sponsored By_* : ՏᑌKO ᗪᗴᐯՏ ᑕᖇᗴᗯ ᵗᵐ
◈ Developer: 𝓚𝓲𝓷𝓰 𝓞𝓻𝓶𝓪𝓷
◈ Bot: 𝙾𝚁𝙼𝙰𝙽 𝚇𝙼𝙳 ᵇᵒᵗ ᐯ2.0.0
◈━══━══━══━❁━══━══━══━◈
`;

        // RANDOM IMAGES
        const menuImages = [
            "https://files.catbox.moe/rq6li9.jpeg",
            "https://files.catbox.moe/zy6mfa.jpeg",
            "https://files.catbox.moe/us8b3s.jpeg",
            "https://files.catbox.moe/3xfxhw.jpg"
        ];
        const selectedImage = menuImages[Math.floor(Math.random() * menuImages.length)];

        // RANDOM AUDIOS
        const audioList = [
            "https://files.catbox.moe/i50hzx.mp4",
            "https://files.catbox.moe/9lnw8d.mp3",
            "https://files.catbox.moe/6fwjwd.mp4",
            "https://files.catbox.moe/zbs97b.mp4",
            "https://files.catbox.moe/znh3p3.mp3",
            "https://files.catbox.moe/imumlt.mp4",
            "https://files.catbox.moe/zki2qy.mp3"
        ];
        const randomAudio = audioList[Math.floor(Math.random() * audioList.length)];

        // SEND MENU IMAGE + CAPTION
        await bot.sendMessage(
            m.chat,
            {
                image: { url: selectedImage },
                caption: menuText,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: "120363346921879829@newsletter",
                        newsletterName: "🌟 𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝚃𝙾 𝙾𝚁𝙼𝙰𝙽-𝚇𝙼𝙳 𝙼𝙴𝙽𝚄 🌟"
                    }
                }
            },
            { quoted: m }
        );

        // SEND AUDIO (Random Audio)
        await bot.sendMessage(
            m.chat,
            {
                audio: { url: randomAudio },
                mimetype: "audio/mp4",
                ptt: false,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true
                }
            },
            { quoted: m }
        );

    } catch (e) {
        console.error("Menu error:", e);
        throw e;
    }
}

// Runtime function
function runtime(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
}

module.exports = { sendMenu };