import { Client } from 'tmi.js'
import types from './types'

export default (client: Client, channel: string, comand: string) => {
  switch (comand) {
    case types.github:
      client.say(
        channel, 
        'github do criador do Bot: https://github.com/mugarate12')
    
    case types.commands:
      let commandsList = ''
      const typesKeys = Object.keys(types)
      
      typesKeys.forEach(keyName => {
        commandsList += `!${keyName} |`
      })

      client.say(
        channel,
        commandsList
      )
  }
}