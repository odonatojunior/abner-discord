import { EpicFreeGames } from '@/types/EpicGames'
import fetcherClient from './fetcherClient'

export default async function getFreeGames() {
  const DEFAULT_PROMOTIONS_ROUTE =
    'https://store-site-backend-static-ipv4.ak.epicgames.com/freeGamesPromotions?locale=pt-BR&country=BR&allowCountries=BR'

  const { data } = await fetcherClient.get<EpicFreeGames>(
    DEFAULT_PROMOTIONS_ROUTE
  )
  const kappa: EpicFreeGames = JSON.parse(data as unknown as string)

  return kappa.data.Catalog.searchStore.elements
}
