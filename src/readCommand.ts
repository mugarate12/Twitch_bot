import { Client } from 'tmi.js'
import commands from './commands'

const readCommand = (channel: string, message: string) => {
  commands.forEach(commandCase => {
    commandCase(channel, message)
  })
}

process.on('message', (message) => {
  if (message === 'COMMAND') {
    const channel = process.env.channel || '' 
    const message = process.env.message || ''
    
    console.log(channel, message)

    readCommand(
      channel,
      message
    )
    // olhar como passo argumentos pra ca
  }
})