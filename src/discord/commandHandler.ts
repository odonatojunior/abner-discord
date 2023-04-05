import { Message } from 'discord.js'
import { abner, comandos, epic, paysandu } from './commands'
import commandParser from '@/utils/command'

const COMMAND_PREFIX = '!'

export type RegisteredCommands = 'abner' | 'paysandu' | 'comandos' | 'epic'

export type Command = (message: Message, param?: unknown) => unknown

type PrefixCommands = Record<
  `${typeof COMMAND_PREFIX}${RegisteredCommands}`,
  Command
>

const commandRecord: PrefixCommands = {
  '!abner': abner,
  '!paysandu': paysandu,
  '!comandos': comandos,
  '!epic': epic,
}

export default function (message: Message) {
  if (message.author.bot) return
  if (!message.content.startsWith(COMMAND_PREFIX)) return

  const { command } = commandParser(message.content)
  console.log(command)

  try {
    commandRecord[command[0] as keyof PrefixCommands](message, command[1])
  } catch (error) {
    console.log(`Command not implemented`)
  }
}
