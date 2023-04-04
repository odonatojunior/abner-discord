import { Message } from 'discord.js'
import { abner, paysandu } from './commands'

const COMMAND_PREFIX = '!'

type Commands =
  | `${typeof COMMAND_PREFIX}abner`
  | `${typeof COMMAND_PREFIX}paysandu`

const commandRecord: Record<Commands, (message: Message) => void> = {
  '!abner': abner,
  '!paysandu': paysandu,
}

export default function (message: Message) {
  if (message.author.bot) return
  if (!message.content.startsWith(COMMAND_PREFIX)) return

  try {
    commandRecord[message.content as Commands](message)
  } catch (error) {
    console.log(`Command not implemented`)
  }
}
