// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const emoji = {
    "A11": "โ",
    "A12": "๐",
    "A13": "๐ฐ",
    "A14": "๐บ",
    "A15": "๐",
    "A16": "<:crow:958125891525967912>",
    "A21": "๐ฃ",
    "A22": "๐ฆด",
    "A23": "๐",
    "A24": "๐งน",
    "A25": "๐ชฒ",
    "A26": "<:candy_cane:958130682318708746>",
    "A31": "๐ฅ",
    "A32": "๐โโฌ",
    "A33": "<:flask:958113749930242069>",
    "A34": "<:chess_knight:958102339938562068>",
    "A35": "<:drumstick:958113749015871588>",
    "A36": "๐๏ธ",
    "A41": "โ๏ธ",
    "A42": "โ",
    "A43": "๐งญ",
    "A44": "<:cowboy_hat:958113748894220359>",
    "A45": "๐",
    "A46": "๐ฆฎ",
    "A51": "๐ช",
    "A52": "๐",
    "A53": "๐ฅ",
    "A54": "๐ฒ",
    "A55": "๐๏ธ",
    "A56": "๐",
    "A61": "๐ชถ",
    "A62": "๐",
    "A63": "๐ณ๏ธ",
    "A64": "๐ฅ",
    "A65": "๐ด",
    "A66": "โ๏ธ",
    "B11": "๐",
    "B12": "๐ฅ",
    "B13": "<:acoustic_guitar:958113749036830730>",
    "B14": "<:wind_lines:958113749103947776>",
    "B15": "๐ป",
    "B16": "๐จ",
    "B21": "<:handcuffs:958113749586284554>",
    "B22": "โ๏ธ",
    "B23": "<:headphones:958113748864884737>",
    "B24": "โค๏ธ",
    "B25": "โ",
    "B26": "๐",
    "B31": "๐ง ",
    "B32": "โ",
    "B33": "๐",
    "B34": "๐ฆท",
    "B35": "๐ฆ",
    "B36": "๐",
    "B41": "๐ก๏ธ",
    "B42": "๐",
    "B43": "๐",
    "B44": "๐ก",
    "B45": "โก",
    "B46": "๐ง",
    "B51": "๐งฒ",
    "B52": "๐",
    "B53": "<:mittens:958113749015863316>",
    "B54": "๐ต",
    "B55": "๐",
    "B56": "๐ต",
    "B61": "๐",
    "B62": "๐๏ธ",
    "B63": "โ๏ธ",
    "B64": "๐ฒ",
    "B65": "๐",
    "B66": "<:paper_plane:958113748831334451>",
    "C11": "๐",
    "C12": "๐พ",
    "C13": "โ๏ธ",
    "C14": "๐ถ๏ธ",
    "C15": "๐งฉ",
    "C16": "โข๏ธ",
    "C21": "๐",
    "C22": "๐",
    "C23": "โ๏ธ",
    "C24": "๐ช",
    "C25": "๐ฃ",
    "C26": "๐ฆ",
    "C31": "๐",
    "C32": "๐",
    "C33": "โ๏ธ",
    "C34": "โฝ",
    "C35": "๐งฆ",
    "C36": "๐ท๏ธ",
    "C41": "๐ฅ",
    "C42": "โญ",
    "C43": "๐ผ",
    "C44": "โ๏ธ",
    "C45": "๐",
    "C46": "๐",
    "C51": "๐ญ",
    "C52": "๐ก๏ธ",
    "C53": "๐ช๏ธ",
    "C54": "๐๏ธ",
    "C55": "๐",
    "C56": "๐",
    "C61": "โ๏ธ",
    "C62": "<:wave_lines:958113749082996798>",
    "C63": "๐ง",
    "C64": "<:weight:958113748567080981>",
    "C65": "๐พ",
    "C66": "๐ง",
    "D11": "๐ซ",
    "D12": "๐จ๏ธ",
    "D13": "โ",
    "D14": "๐ฏ",
    "D15": "โ",
    "D16": "โฌ๏ธ",
    "D21": "<:equal:958113749015867442>",
    "D22": "โ",
    "D23": "<:elipsis:958113748915212329>",
    "D24": "โฉ",
    "D25": "<:contract:958113748982329364>",
    "D26": "<:expand:958113748470624289>",
    "D31": "๐",
    "D32": "โพ๏ธ",
    "D33": "<:not_equal:958113748902637628>",
    "D34": "โธ๏ธ",
    "D35": "<:percent:958113749053616189>",
    "D36": "<:pie_chart:958113749095546970>",
    "D41": "โถ๏ธ",
    "D42": "<:plus_minus:958113748952965150>",
    "D43": "โ",
    "D44": "โป๏ธ",
    "D45": "โช",
    "D46": "โ๏ธ",
    "D51": "โ๏ธ",
    "D52": "<:stacked_squares:958115512737468498>",
    "D53": "<:square_root:958116568938709072>",
    "D54": "<:square_pulse:958117254967484468>",
    "D55": "<:dots_connected:958117668932694046>",
    "D56": "<:stack:958118687070629888>",
    "D61": "<:shapes:958119489667469342>",
    "D62": "๐",
    "D63": "๐",
    "D64": "<:swap:958120152984084542>",
    "D65": "<:clone:958128108479852574>",
    "D66": "โฌ๏ธ",
    "E11": "โ",
    "E12": "๐ฆ ",
    "F11": "๐",
    "F12": "๐ฅ",
    "F13": "๐ค",
    "F14": "โ ๏ธ",
    "F15": "โฑ๏ธ",
    "F16": "โ ๏ธ",
    "F21": "<:book_skull:958121328186118225>",
    "F22": "๐ฉ๏ธ",
    "F23": "๐",
    "F24": "๐ฆ",
    "F25": "๐",
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