


const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, devGuildId, prodGuildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
    new SlashCommandBuilder().setName('test').setDescription('Roll several d6, then choose one result.').addIntegerOption(option => option.setName("count").setDescription("How much d6 to roll?").setMinValue(1).setMaxValue(100).setRequired(false)),
	new SlashCommandBuilder().setName('being').setDescription('Roll from a BEING table').addIntegerOption(option => option.setName("count").setDescription("How much symbols to roll?").setMinValue(1).setMaxValue(100).setRequired(false)),
	new SlashCommandBuilder().setName('doing').setDescription('Roll from a DOING table').addIntegerOption(option => option.setName("count").setDescription("How much symbols to roll?").setMinValue(1).setMaxValue(100).setRequired(false)),
    new SlashCommandBuilder().setName('fallout').setDescription('Roll from a FALLOUT table').addIntegerOption(option => option.setName("count").setDescription("How much symbols to roll?").setMinValue(1).setMaxValue(100).setRequired(false)),
    new SlashCommandBuilder().setName('format').setDescription('Roll from a FORMAT table').addIntegerOption(option => option.setName("count").setDescription("How much symbols to roll?").setMinValue(1).setMaxValue(100).setRequired(false)),
].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);
rest.put(Routes.applicationGuildCommands(clientId, devGuildId), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);
rest.put(Routes.applicationGuildCommands(clientId, prodGuildId), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);