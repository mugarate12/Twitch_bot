import { Client } from 'tmi.js'
import commands from './commands'
import client from './client'

const readCommand = (client: Client, channel: string, message: string) => {
  commands.forEach(commandCase => {
    commandCase(client, channel, message)
  })
}

process.on('message', (message) => {
  if (message === 'COMMAND') {
    const channel = process.env.channel || '' 
    const message = process.env.message || ''
    
    console.log(channel, message)

    readCommand(
      client,
      channel,
      message
    )
    // olhar como passo argumentos pra ca
  }
})