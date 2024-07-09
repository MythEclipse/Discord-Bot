const Discord = require('discord.js');
const fs = require('fs');

const { Manager } = require("erela.js");
const Spotify = require("erela.js-spotify");
const Facebook = require("erela.js-facebook");
const Deezer = require("erela.js-deezer");
const AppleMusic = require("erela.js-apple");

// Discord client
const client = new Discord.Client({
    allowedMentions: {
        parse: [
            'users',
            'roles'
        ],
        repliedUser: true
    },
    autoReconnect: true,
    disabledEvents: [
        "TYPING_START"
    ],
    partials: [
        Discord.Partials.Channel,
        Discord.Partials.GuildMember,
        Discord.Partials.Message,
        Discord.Partials.Reaction,
        Discord.Partials.User,
        Discord.Partials.GuildScheduledEvent
    ],
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildBans,
        Discord.GatewayIntentBits.GuildEmojisAndStickers,
        Discord.GatewayIntentBits.GuildIntegrations,
        Discord.GatewayIntentBits.GuildWebhooks,
        Discord.GatewayIntentBits.GuildInvites,
        Discord.GatewayIntentBits.GuildVoiceStates,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.GuildMessageReactions,
        Discord.GatewayIntentBits.GuildMessageTyping,
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.DirectMessageReactions,
        Discord.GatewayIntentBits.DirectMessageTyping,
        Discord.GatewayIntentBits.GuildScheduledEvents,
        Discord.GatewayIntentBits.MessageContent
    ],
    restTimeOffset: 0
});


const clientID = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
if (clientID && clientSecret) {
    // Lavalink client
    client.player = new Manager({
        plugins: [
            new AppleMusic(),
            new Deezer(),
            new Facebook(),
            new Spotify({
                clientID,
                clientSecret,
            })
        ],
        nodes: [
            {
                host: process.env.LAVALINK_HOST || "lava.link",
                port: parseInt(process.env.LAVALINK_PORT) || 80,
                password: process.env.LAVALINK_PASSWORD || "CorwinDev",
                secure: Boolean(process.env.LAVALINK_SECURE) || false
            },
            {
                host: "lavalink.techpoint.world",
                port: 80,
                password: "techpoint"
            },
            {
                host: "lavalink.teramont.net",
                port: 443,
                password: "eHKuFcz67k4lBS64",
                secure: true
            },
            {
                host: "lava-v3.ajieblogs.eu.org",
                port: 443,
                password: "https://dsc.gg/ajidevserver",
                secure: true
            },
            {
                host: "lava-v3.ajieblogs.eu.org",
                port: 80,
                password: "https://dsc.gg/ajidevserver",
                secure: false
            },
            {
                host: "node2.alfari.id",
                port: 6010,
                password: "youshallnotpass",
                secure: false
            },
            {
                host: "us1.lavalink.creavite.co",
                port: 20080,
                password: "auto.creavite.co",
                secure: false
            },
            {
                host: "node2.alfari.id",
                port: 6013,
                password: "youshallnotpass",
                secure: false
            },
            {
                host: "85.88.163.80",
                port: 3128,
                password: "saher.inzeworld.com",
                secure: false
            },
            {
                host: "eu-lavalink.lexnet.cc",
                port: 2333,
                password: "lexn3tl@val!nk",
                secure: false
            },
            {
                host: "oce-lavalink.lexnet.cc",
                port: 2333,
                password: "lexn3tl@val!nk",
                secure: false
            },
            {
                host: "lava1.horizxon.tech",
                port: 443,
                password: "horizxon.tech",
                secure: true
            },
            {
                host: "lava3.horizxon.tech",
                port: 443,
                password: "horizxon.tech",
                secure: true
            },
            {
                host: "51.161.130.134",
                port: 10449,
                password: "madebytragic",
                secure: false
            },
            {
                host: "lavalink.lexnet.cc",
                port: 2333,
                password: "lexn3tl@val!nk",
                secure: false
            },
            {
                host: "the-net.loves-genshin.lol",
                port: 2333,
                password: "eternal",
                secure: false
            },
            {
                host: "lava-vn.meowsmp.net",
                port: 2333,
                password: "meowicelava",
                secure: false
            },
            {
                host: "lavalink.rudracloud.com",
                port: 2333,
                password: "RudraCloud.com",
                secure: false
            },
            {
                host: "lava.horizxon.tech",
                port: 80,
                password: "horizxon.tech",
                secure: false
            },
            {
                host: "54.38.198.24",
                port: 88,
                password: "stonemusicgay",
                secure: false
            },
            {
                host: "89.58.5.180",
                port: 20906,
                password: "reedrouxv4lavalink",
                secure: false
            },
            {
                host: "lava-ge.meowsmp.net",
                port: 25579,
                password: "meowicelava",
                secure: false
            },
            {
                host: "lava2.horizxon.tech",
                port: 443,
                password: "horizxon.tech",
                secure: true
            },
            {
                host: "lavalink.akshtt.is-a.dev",
                port: 443,
                password: "admin",
                secure: true
            },
            {
                host: "lava.akshat.tech",
                port: 443,
                password: "admin",
                secure: true
            },
            {
                host: "129.154.47.57",
                port: 25997,
                password: "admin",
                secure: false
            },
            {
                host: "hanmetaforce.ddns.net",
                port: 7008,
                password: "hanmetaforce",
                secure: false
            },
            {
                host: "node1.paradisehost.xyz",
                port: 27185,
                password: "Lavalinkhoster123",
                secure: false
            },
            {
                host: "hk.aarubot.xyz",
                port: 57095,
                password: "Aaru-the-cutiepie",
                secure: false
            },
            {
                host: "nyc01.jxshua.dev",
                port: 4000,
                password: "youshallnotpass",
                secure: false
            }
        ],
        send(id, payload) {
            const guild = client.guilds.cache.get(id);
            if (guild) guild.shard.send(payload);
        },
    })

} else {
    // Lavalink client
    client.player = new Manager({
        plugins: [
            new AppleMusic(),
            new Deezer(),
            new Facebook(),
        ],
        nodes: [
            {
                host: process.env.LAVALINK_HOST || "lava.link",
                port: parseInt(process.env.LAVALINK_PORT) || 80,
                password: process.env.LAVALINK_PASSWORD || "CorwinDev",
                secure: Boolean(process.env.LAVALINK_SECURE) || false
            },
        ],
        send(id, payload) {
            const guild = client.guilds.cache.get(id);
            if (guild) guild.shard.send(payload);
        }
    })
}
const events = fs.readdirSync(`./src/events/music`).filter(files => files.endsWith('.js'));

for (const file of events) {
    const event = require(`./events/music/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client)).setMaxListeners(0);
};

// Connect to database
require("./database/connect")();

// Client settings
client.config = require('./config/bot');
client.changelogs = require('./config/changelogs');
client.emotes = require("./config/emojis.json");
client.webhooks = require("./config/webhooks.json");
const webHooksArray = ['startLogs', 'shardLogs', 'errorLogs', 'dmLogs', 'voiceLogs', 'serverLogs', 'serverLogs2', 'commandLogs', 'consoleLogs', 'warnLogs', 'voiceErrorLogs', 'creditLogs', 'evalLogs', 'interactionLogs'];
// Check if .env webhook_id and webhook_token are set
if (process.env.WEBHOOK_ID && process.env.WEBHOOK_TOKEN) {
    for (const webhookName of webHooksArray) {
        client.webhooks[webhookName].id = process.env.WEBHOOK_ID;
        client.webhooks[webhookName].token = process.env.WEBHOOK_TOKEN;
    }
}

client.commands = new Discord.Collection();
client.playerManager = new Map();
client.triviaManager = new Map();
client.queue = new Map();

// Webhooks
const consoleLogs = new Discord.WebhookClient({
    id: client.webhooks.consoleLogs.id,
    token: client.webhooks.consoleLogs.token,
});

const warnLogs = new Discord.WebhookClient({
    id: client.webhooks.warnLogs.id,
    token: client.webhooks.warnLogs.token,
});

// Load handlers
fs.readdirSync('./src/handlers').forEach((dir) => {
    fs.readdirSync(`./src/handlers/${dir}`).forEach((handler) => {
        require(`./handlers/${dir}/${handler}`)(client);
    });
});

client.login(process.env.DISCORD_TOKEN);

process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
    if (error) if (error.length > 950) error = error.slice(0, 950) + '... view console for details';
    if (error.stack) if (error.stack.length > 950) error.stack = error.stack.slice(0, 950) + '... view console for details';
    if(!error.stack) return
    const embed = new Discord.EmbedBuilder()
        .setTitle(`🚨・Unhandled promise rejection`)
        .addFields([
            {
                name: "Error",
                value: error ? Discord.codeBlock(error) : "No error",
            },
            {
                name: "Stack error",
                value: error.stack ? Discord.codeBlock(error.stack) : "No stack error",
            }
        ])
        .setColor(client.config.colors.normal)
    consoleLogs.send({
        username: 'Bot Logs',
        embeds: [embed],
    }).catch(() => {
        console.log('Error sending unhandledRejection to webhook')
        console.log(error)
    })
});

process.on('warning', warn => {
    console.warn("Warning:", warn);
    const embed = new Discord.EmbedBuilder()
        .setTitle(`🚨・New warning found`)
        .addFields([
            {
                name: `Warn`,
                value: `\`\`\`${warn}\`\`\``,
            },
        ])
        .setColor(client.config.colors.normal)
    warnLogs.send({
        username: 'Bot Logs',
        embeds: [embed],
    }).catch(() => {
        console.log('Error sending warning to webhook')
        console.log(warn)
    })
});

client.on(Discord.ShardEvents.Error, error => {
    console.log(error)
    if (error) if (error.length > 950) error = error.slice(0, 950) + '... view console for details';
    if (error.stack) if (error.stack.length > 950) error.stack = error.stack.slice(0, 950) + '... view console for details';
    if (!error.stack) return
    const embed = new Discord.EmbedBuilder()
        .setTitle(`🚨・A websocket connection encountered an error`)
        .addFields([
            {
                name: `Error`,
                value: `\`\`\`${error}\`\`\``,
            },
            {
                name: `Stack error`,
                value: `\`\`\`${error.stack}\`\`\``,
            }
        ])
        .setColor(client.config.colors.normal)
    consoleLogs.send({
        username: 'Bot Logs',
        embeds: [embed],
    });
});
