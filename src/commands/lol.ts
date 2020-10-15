import { Client } from 'tmi.js'
import types from './types'


export default (client: Client, channel: string, comand: string) => {
  switch (comand) {
    case types.duo:
      client.say(
        channel, 
        'Te dou o mundo e quantas kills quiser, meu amor!')
    
    case types.alves:
      client.say(
        channel,
        `O Alves já morreu ${Math.round(Math.random() * 20)} enquanto você digitava`)
  }
}