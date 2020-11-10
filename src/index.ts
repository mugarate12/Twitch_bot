import dotenv from 'dotenv'
import { Client } from 'tmi.js'
import { fork } from 'child_process'
import client from './client'

import commands from './commands/index'

dotenv.config()

// let { BOT_NAME, AUTH_TOKEN, CHANNEL = '' } = process.env
// const client = Client({
//   connection: {
//     secure: true,
//     reconnect: true
//   },
//   identity: {
//     username: BOT_NAME,
//     password: AUTH_TOKEN
//   },
//   channels: [CHANNEL]
// })

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

  // DE ONDE VEM O MODULO
  // const child = fork(__dirname + '/readCommand', {
  //   env: {
  //     channel,
  //     message
  //   }
  // })

  // // O QUE DEVEMOS FAZER COM O RETORNO DO PROCESSO FILHO
  // child.on('message', (message) => {
  //   console.log('ok 2') 
  // })

  // // ENVIANDO A MENSAGEM PRA PRO PROCESSO EXECUTAR CAPTURANDO A MESSAGE
  // child.send('COMMAND')
})
