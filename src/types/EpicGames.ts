export interface EpicFreeGames {
  data: Data
  extensions: Extensions
}
export interface Data {
  Catalog: Catalog
}
export interface Catalog {
  searchStore: SearchStore
}
export interface SearchStore {
  elements?: ElementsEntity[] | null
  paging: Paging
}
export interface ElementsEntity {
  title: string
  id: string
  namespace: string
  description: string
  effectiveDate: string
  offerType: string
  expiryDate?: null
  viewableDate?: string | null
  status: string
  isCodeRedemptionOnly: boolean
  keyImages?: KeyImagesEntity[] | null
  seller: Seller
  productSlug?: string | null
  urlSlug: string
  url?: null
  items?: ItemsEntity[] | null
  customAttributes?: CustomAttributesEntity[] | null
  categories?: CategoriesEntity[] | null
  tags?: (TagsEntity | null)[] | null
  catalogNs: CatalogNs
  offerMappings?: (MappingsEntityOrOfferMappingsEntity | null)[] | null
  price: Price
  promotions?: Promotions | null
}
export interface KeyImagesEntity {
  type: string
  url: string
}
export interface Seller {
  id: string
  name: string
}
export interface ItemsEntity {
  id: string
  namespace: string
}
export interface CustomAttributesEntity {
  key: string
  value: string
}
export interface CategoriesEntity {
  path: string
}
export interface TagsEntity {
  id: string
}
export interface CatalogNs {
  mappings?: (MappingsEntityOrOfferMappingsEntity1 | null)[] | null
}
export interface MappingsEntityOrOfferMappingsEntity1 {
  pageSlug: string
  pageType: string
}
export interface MappingsEntityOrOfferMappingsEntity {
  pageSlug: string
  pageType: string
}
export interface Price {
  totalPrice: TotalPrice
  lineOffers?: LineOffersEntity[] | null
}
export interface TotalPrice {
  discountPrice: number
  originalPrice: number
  voucherDiscount: number
  discount: number
  currencyCode: string
  currencyInfo: CurrencyInfo
  fmtPrice: FmtPrice
}
export interface CurrencyInfo {
  decimals: number
}
export interface FmtPrice {
  originalPrice: string
  discountPrice: string
  intermediatePrice: string
}
export interface LineOffersEntity {
  appliedRules?: (AppliedRulesEntity | null)[] | null
}
export interface AppliedRulesEntity {
  id: string
  endDate: string
  discountSetting: DiscountSetting
}
export interface DiscountSetting {
  discountType: string
}
export interface Promotions {
  promotionalOffers?:
    | (UpcomingPromotionalOffersEntityOrPromotionalOffersEntity | null)[]
    | null
  upcomingPromotionalOffers?:
    | (UpcomingPromotionalOffersEntityOrPromotionalOffersEntity1 | null)[]
    | null
}
export interface UpcomingPromotionalOffersEntityOrPromotionalOffersEntity {
  promotionalOffers?: PromotionalOffersEntity[] | null
}
export interface PromotionalOffersEntity {
  startDate: string
  endDate: string
  discountSetting: DiscountSetting1
}
export interface DiscountSetting1 {
  discountType: string
  discountPercentage: number
}
export interface UpcomingPromotionalOffersEntityOrPromotionalOffersEntity1 {
  promotionalOffers?: PromotionalOffersEntity[] | null
}
export interface Paging {
  count: number
  total: number
}
export interface Extensions {
  empty?: unknown
}
