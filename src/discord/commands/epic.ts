import getFreeGames from '@/fetcher/getFreeGames'
import { APIEmbedField, EmbedBuilder, Message } from 'discord.js'

export default async function (message: Message) {
  const allGames = await getFreeGames()

  const isActiveGame = allGames?.filter((g) => g.promotions)

  const kappa = isActiveGame?.map(({ title, description }) => {
    const shorterDescription = description.slice(0, 80)
    return {
      name: title,
      value: `${shorterDescription}... \u200B \n`,
    } satisfies APIEmbedField
  })

  const exampleEmbed = new EmbedBuilder()
    .setColor(0xea2509)
    .setURL('https://store.epicgames.com/pt-BR/free-games')
    .setTitle('Epic Games - Grátis')
    .setAuthor({
      name: 'Abner',
      iconURL: 'https://i.imgur.com/G94YEq1.jpeg',
    })
    .setDescription('Últimos jogos grátis adicionados')
    .setThumbnail('https://i.imgur.com/9ijrX38.png')
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    .addFields({ name: '\u200B', value: ' ' }, ...kappa!)
    .setFooter({ text: 'Abner' })
    .setTimestamp(new Date())

  message.channel.send({ embeds: [exampleEmbed] })
}
