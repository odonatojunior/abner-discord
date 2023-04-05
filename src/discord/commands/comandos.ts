import { EmbedBuilder, Message } from 'discord.js'

export default function ({ channel }: Message) {
  const exampleEmbed = new EmbedBuilder()
    .setColor(0x0099ff)
    .setTitle('Comandos')
    .setAuthor({
      name: 'Abner',
      iconURL: 'https://i.imgur.com/G94YEq1.jpeg',
    })
    .setDescription('Últimos comandos adicionados')
    .setThumbnail('https://i.imgur.com/G94YEq1.jpeg')
    .addFields(
      { name: '\u200B', value: '\u200B' },
      { name: '!abner', value: 'Te responde com "Abner"' },
      { name: '!paysandu', value: 'Te responde com "PAYSANDUUUUUUUUU"' },
      { name: '!epic', value: 'Pega os últimos jogos gratis da Epic' }
    )
  channel.send({ embeds: [exampleEmbed] })
}
