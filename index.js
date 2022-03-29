// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const emoji = {
    "A11": "⚓",
    "A12": "🍎",
    "A13": "💰",
    "A14": "🍺",
    "A15": "🔔",
    "A16": "<:crow:958125891525967912>",
    "A21": "💣",
    "A22": "🦴",
    "A23": "📘",
    "A24": "🧹",
    "A25": "🪲",
    "A26": "<:candy_cane:958130682318708746>",
    "A31": "🥕",
    "A32": "🐈‍⬛",
    "A33": "<:flask:958113749930242069>",
    "A34": "<:chess_knight:958102339938562068>",
    "A35": "<:drumstick:958113749015871588>",
    "A36": "🎞️",
    "A41": "☁️",
    "A42": "☕",
    "A43": "🧭",
    "A44": "<:cowboy_hat:958113748894220359>",
    "A45": "👑",
    "A46": "🦮",
    "A51": "🚪",
    "A52": "🌍",
    "A53": "🥚",
    "A54": "🌲",
    "A55": "👁️",
    "A56": "💎",
    "A61": "🪶",
    "A62": "🐟",
    "A63": "🏳️",
    "A64": "🔥",
    "A65": "🍴",
    "A66": "⚙️",
    "B11": "🎁",
    "B12": "🥛",
    "B13": "<:acoustic_guitar:958113749036830730>",
    "B14": "<:wind_lines:958113749103947776>",
    "B15": "👻",
    "B16": "🔨",
    "B21": "<:handcuffs:958113749586284554>",
    "B22": "⛑️",
    "B23": "<:headphones:958113748864884737>",
    "B24": "❤️",
    "B25": "⌛",
    "B26": "🛖",
    "B31": "🧠",
    "B32": "✋",
    "B33": "💀",
    "B34": "🦷",
    "B35": "🍦",
    "B36": "🔑",
    "B41": "🛡️",
    "B42": "🍃",
    "B43": "🍋",
    "B44": "💡",
    "B45": "⚡",
    "B46": "💧",
    "B51": "🧲",
    "B52": "🔍",
    "B53": "<:mittens:958113749015863316>",
    "B54": "💵",
    "B55": "🌙",
    "B56": "🎵",
    "B61": "🔒",
    "B62": "🖌️",
    "B63": "✂️",
    "B64": "🎲",
    "B65": "📎",
    "B66": "<:paper_plane:958113748831334451>",
    "C11": "📜",
    "C12": "🐾",
    "C13": "✏️",
    "C14": "🌶️",
    "C15": "🧩",
    "C16": "☢️",
    "C21": "👓",
    "C22": "📏",
    "C23": "⚖️",
    "C24": "🪛",
    "C25": "👣",
    "C26": "🦐",
    "C31": "🍞",
    "C32": "🍕",
    "C33": "❄️",
    "C34": "⚽",
    "C35": "🧦",
    "C36": "🕷️",
    "C41": "🥄",
    "C42": "⭐",
    "C43": "💼",
    "C44": "☀️",
    "C45": "💉",
    "C46": "📞",
    "C51": "🎭",
    "C52": "🌡️",
    "C53": "🌪️",
    "C54": "🗑️",
    "C55": "🏆",
    "C56": "👕",
    "C61": "☂️",
    "C62": "<:wave_lines:958113749082996798>",
    "C63": "🧀",
    "C64": "<:weight:958113748567080981>",
    "C65": "🍾",
    "C66": "🔧",
    "D11": "🚫",
    "D12": "🗨️",
    "D13": "✅",
    "D14": "🎯",
    "D15": "➗",
    "D16": "⬇️",
    "D21": "<:equal:958113749015867442>",
    "D22": "❗",
    "D23": "<:elipsis:958113748915212329>",
    "D24": "⏩",
    "D25": "<:contract:958113748982329364>",
    "D26": "<:expand:958113748470624289>",
    "D31": "📈",
    "D32": "♾️",
    "D33": "<:not_equal:958113748902637628>",
    "D34": "⏸️",
    "D35": "<:percent:958113749053616189>",
    "D36": "<:pie_chart:958113749095546970>",
    "D41": "▶️",
    "D42": "<:plus_minus:958113748952965150>",
    "D43": "❓",
    "D44": "♻️",
    "D45": "⏪",
    "D46": "♂️",
    "D51": "♀️",
    "D52": "<:stacked_squares:958115512737468498>",
    "D53": "<:square_root:958116568938709072>",
    "D54": "<:square_pulse:958117254967484468>",
    "D55": "<:dots_connected:958117668932694046>",
    "D56": "<:stack:958118687070629888>",
    "D61": "<:shapes:958119489667469342>",
    "D62": "🔄",
    "D63": "🔀",
    "D64": "<:swap:958120152984084542>",
    "D65": "<:clone:958128108479852574>",
    "D66": "⬆️",
    "E11": "⛄",
    "E12": "🦠",
    "F11": "💔",
    "F12": "💥",
    "F13": "🤕",
    "F14": "☠️",
    "F15": "⏱️",
    "F16": "⚠️",
    "F21": "<:book_skull:958121328186118225>",
    "F22": "🌩️",
    "F23": "🐉",
    "F24": "😦",
    "F25": "💍",
    "F26": "<:signpost:958122532186243123>",
    "F27": "<:chess_rook:958124040621539390>",
};
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log(emoji.A11);
});

function irandom(i) { return Math.floor(Math.random() * i); }
function being() { return emoji[(["A", "B", "C"])[irandom(3)] + (irandom(6) + 1) + (irandom(6) + 1)]; }
function doing() { return emoji["D" + (irandom(6) + 1) + (irandom(6) + 1)]; }
function fallout() { return emoji["F1" + (irandom(6) + 1)]; }
function format() { return emoji["F2" + (irandom(6) + 1)]; }

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

    let count = Math.min(100, interaction.options.getInteger("count") ?? 1);
    let txt = "", rolls = [], e = new Set();
    const filter = m => m.author.id === interaction.member.id;
    const test = [
        "%%YOU%% **fail** and suffer **major fallout** (%%FALLOUT%%).",
        "%%YOU%% **succeed** but suffer **major fallout** (%%FALLOUT%%).",
        "%%YOU%% **fail** and suffer **minor fallout** (%%FALLOUT%%).",
        "%%YOU%% **succeed** but suffer **minor fallout** (%%FALLOUT%%).",
        "%%YOU%% **fail** but suffer no fallout.",
        "%%YOU%% **succeed** and suffer no fallout.",
    ];
    const testEdge = [
        "%%YOU%% **fail** and suffer **major fallout** (%%FALLOUT%%), but **gain an edge**.",
        "%%YOU%% **succeed** and **gain an edge** but suffer **major fallout** (%%FALLOUT%%).",
        "%%YOU%% **fail** and suffer **minor fallout** (%%FALLOUT%%), but **gain an edge**.",
        "%%YOU%% **succeed** and **gain an edge** but suffer **minor fallout** (%%FALLOUT%%).",
        "%%YOU%% **fail** but suffer no fallout and **gain an edge**.",
        "%%YOU%% **succeed**, **gain an edge** and suffer no fallout.",
    ];
    switch (interaction.commandName) {
        case "ping":
            await interaction.reply({ content: 'Pong!', ephemeral: true });
            return;
        case "test":
            if (count == 1) {
                rolls = irandom(6);
                txt = "(" + (rolls + 1) + ")" + test[rolls]
                    .replace("%%YOU%%", interaction.member)
                    .replace("%%FALLOUT%%", rolls < 2 ? fallout() + fallout() : fallout());
                break;
            } else {
                for (let i = 0; i < count; i++) rolls.push(irandom(6) + 1);
                let choice = await interaction.reply({ content: "<@" + interaction.member + "> rolled " + rolls.sort().join(" ") + ", pick one by typing a number.", fetchReply: true });
                try {
                    let message = await interaction.channel.awaitMessages({filter: filter, max: 1, time: 30000, errors: ['time']});
                    message = message.first();
                    choice.delete();
                    message.delete();
                    txt = "(" + (rolls.join(",")) + ")" + (rolls.filter(x => x == message.content).length > 1 ? testEdge : test)[Number(message.content) - 1]
                        .replace("%%YOU%%", message.author)
                        .replace("%%FALLOUT%%", Number(message.content) < 3 ? fallout() + fallout() : fallout());
                    interaction.followUp(txt);
                } catch (collected) { /* noop */ }
            }
            return;
        case "being":
            while (e.size < count) e.add(being());
            txt = Array.from(e).join("");
            break;
        case "doing":
            while (e.size < count) e.add(doing() + being());
            txt = Array.from(e).join("\n");
            break;
        case "fallout":
            for (let i = 0; i < count; i++) txt += fallout();
            break;
        case "format":
            for (let i = 0; i < count; i++) txt += format();
            break;
    }
    await interaction.reply({ content: txt });
});

// Login to Discord with your client's token
client.login(token);