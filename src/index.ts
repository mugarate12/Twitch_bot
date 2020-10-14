import dotenv from 'dotenv'
import { Client } from 'tmi.js'

dotenv.config()

let { BOT_NAME, AUTH_TOKEN, CHANNEL } = process.env
let client

if (!!BOT_NAME && !!AUTH_TOKEN && !!CHANNEL) {
  client = Client({
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
}

client?.connect()

client?.on('connected', (adress, port) => {
  console.log(`listening on adress ${adress}:${port}`)
})
