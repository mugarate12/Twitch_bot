import dotenv from 'dotenv'
import { Client } from 'tmi.js'

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

export default client
