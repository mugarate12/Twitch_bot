import { Client } from 'tmi.js'
import types from './types'
import client from './../client'

export default (channel: string, comand: string) => {
  switch (comand) {
    case types.github:
      console.log('cheguei no comando')
      // console.log(client)
      client.say(
        channel,
        'github do criador do Bot: https://github.com/mugarate12'
      )
      return
    case types.commands:
      let commandsList = ''
      const typesKeys = Object.keys(types)
      
      typesKeys.forEach(keyName => {
        commandsList += `!${keyName} | `
      })

      client.say(
        channel,
        commandsList
      )

      return
  }
}