interface IItem {
  id: string
  requestIndex: number
  quantity: number
  seller: string
  sellerChain: string[]
  tax: number
  priceValidUntil: string
  price: number
  listPrice: number
  rewardValue: number
  sellingPrice: number
  offerings: string[]
  priceTags: string[]
  measurementUnit: string
  unitMultiplier: number
  parentItemIndex: any
  parentAssemblyBinding: any
  availability: string
  catalogProvider: string
  priceDefinition: {
    calculatedSellingPrice: number
    total: number
    sellingPrices: [
      {
        value: number
        quantity: number
      }
    ]
  }
}

interface IDeliveryChannel {
  id: string
}

export interface ISla {
  id: string
  deliveryChannel: string
  name: string
  deliveryIds: IDeliveryIds[]
  shippingEstimate: string
  shippingEstimateDate: any
  lockTTL: any
  availableDeliveryWindows: any[]
  deliveryWindow: any
  price: number
  listPrice: number
  tax: number
  pickupStoreInfo: {
    isPickupStore: boolean
    friendlyName: any
    address: any
    additionalInfo: any
    dockId: any
  }
  pickupPointId: any
  pickupDistance: number
  polygonName: string
  transitTime: string
}

interface IBusinessHour {
  DayOfWeek: number
  OpeningTime: string
  ClosingTime: string
}

export interface IPickupPoint {
  friendlyName: string
  address: {
    addressType: string
    receiverName: null
    addressId: string
    isDisposable: true
    postalCode: string
    city: string
    state: string
    country: string
    street: string
    number: string
    neighborhood: string
    complement: string
    reference: null
    geoCoordinates: number[]
  }
  additionalInfo: string
  id: string
  businessHours: IBusinessHour[]
}

interface ITotals {
  id: string
  name: string
  value: number
}

interface IDeliveryIds {
  courierId: string
  warehouseId: string
  dockId: string
  courierName: string
  quantity: number
  kitItemDetails: any[]
}

interface IItemPurchaseConditions {
  id: string
  seller: string
  sellerChain: string[]
  slas: ISla[]
  price: number
  listPrice: number
}

interface ILogisticsInfo {
  itemIndex: number
  addressId: any
  selectedSla: any
  selectedDeliveryChannel: any
  quantity: number
  shipsTo: string[]
  slas: ISla[]
  deliveryChannels: IDeliveryChannel[]
}

export interface IShippingInfo {
  items: IItem[]
  ratesAndBenefitsData: {
    rateAndBenefitsIdentifiers: any[]
    teaser: any[]
  }
  paymentData: {
    installmentOptions: any[]
    paymentSystems: any[]
    payments: any[]
    giftCards: any[]
    giftCardMessages: any[]
    availableAccounts: any[]
    availableTokens: any[]
  }
  selectableGifts: any[]
  marketingData: any
  postalCode: string
  country: string
  logisticsInfo: ILogisticsInfo[]
  messages: any[]
  purchaseConditions: {
    itemPurchaseConditions: IItemPurchaseConditions[]
  }
  pickupPoints: IPickupPoint[]
  subscriptionData: any
  totals: ITotals[]
  itemMetadata: any
}
