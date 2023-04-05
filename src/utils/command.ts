import { RegisteredCommands } from '@/discord/commandHandler'

export type CommandParserReturn = {
  command: [command: RegisteredCommands, params: unknown[]] | string[]
}

export default function commandParser(content: string): CommandParserReturn {
  return { command: content.slice(0).trim().split(/ +/g) }
}
