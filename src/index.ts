import { Events } from 'discord.js'
import { config } from 'dotenv'
import { client } from '@/discord/client'
import commandHandler from '@/discord/commandHandler'

async function bootstrap() {
  config()

  client.once(Events.ClientReady, () => {
    console.log('Bot ready')
  })

  client.on(Events.MessageCreate, commandHandler)

  client.login(process.env.DISCORD_TOKEN)
}

bootstrap()
