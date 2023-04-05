export interface SteamWishlistReponse {
  name: string
  capsule: string
  review_score: number
  review_desc: string
  reviews_total: string
  reviews_percent: number
  release_date: string
  release_string: string
  platform_icons: string
  subs: Sub[]
  type: string
  screenshots: string[]
  review_css: string
  priority: number
  added: number
  background: string
  rank: number
  tags: string[]
  is_free_game: boolean
  deck_compat: string
  win: number
  mac?: number
  linux?: number
}

export interface Sub {
  id: number
  discount_block: string
  discount_pct: number
  price: number
}
