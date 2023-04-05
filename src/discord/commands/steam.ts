import fetcherClient from '@/fetcher/fetcherClient'
import { Command } from '../commandHandler'
import { SteamWishlistReponse } from '@/types/Steam'

const steam: Command = async (message, param) => {
  if (!param) {
    message.reply('Inclua o ID da Steam na consulta')
    return
  }

  const WISHLIST_URL = `https://store.steampowered.com/wishlist/profiles/${param}/wishlistdata/?p=0`

  const { data } = await fetcherClient.get(WISHLIST_URL)

  const kappa = JSON.parse(data as unknown as string)

  const abc: SteamWishlistReponse[] = Object.keys(kappa).map((i) => {
    return kappa[i]
  })

  const xyz = abc.map(({ name, subs }) => ({
    title: name,
    price: (subs[0].price / 100).toFixed(2),
  }))

  message.channel.send(`${xyz[0].price}`)
}

export default steam
