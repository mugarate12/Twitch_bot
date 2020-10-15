import dotenv from 'dotenv'
import { Client } from 'tmi.js'
import commands from './commands/index'

dotenv.config()

let { BOT_NAME, AUTH_TOKEN, CHANNEL = '' } = process.env
const client = Client({
  connection: {
    secure: true,
    reconnect: true
  },
  identity: {
    username: BOT_NAME,
    password: AUTH_TOKEN
  },
  channels: [CHANNEL]
})

client.connect()

client.on('connected', (adress, port) => {
  console.log(`listening on adress ${adress}:${port}`)
})

client.on('message', (channel, userState, message, isBot) => {
  if (isBot) {
    return
  }

  commands.forEach(commandCase => {
    commandCase(client, channel, message)
  })
})
