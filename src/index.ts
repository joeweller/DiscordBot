import { ConfigFile } from './interfaces'
import * as fs from 'fs'
import * as Discord from 'discord.js'

const configPath = __dirname + "/../config.json"

const config: ConfigFile = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

const client:Discord.Client = new Discord.Client();


client.on('message', (message) => {
    console.log(message)
    message.channel.send(message.content);
})

client.once('ready', () => {
	console.log('Ready!');
});

client.login(config.token);