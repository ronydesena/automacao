import React, { createContext, useState } from 'react'
import type { FC } from 'react'

import type { IShippingInfo } from '../../interfaces/IShippingInfo'

interface IShippingCustomContext {
  shippingInfo: IShippingInfo
  setShippingInfo: (shippingInfo: IShippingInfo) => void
  isPostalCodeValid: boolean
  setIsPostalCodeValid: (isPostalCodeValid: boolean) => void
}

export const ShippingCustomContext = createContext({} as IShippingCustomContext)

export const ShippingCustomProvider: FC = ({ children }) => {
  const [shippingInfo, setShippingInfo] = useState<IShippingInfo>(
    {} as IShippingInfo
  )

  const [isPostalCodeValid, setIsPostalCodeValid] = useState(false)

  return (
    <ShippingCustomContext.Provider
      value={{
        shippingInfo,
        setShippingInfo,
        isPostalCodeValid,
        setIsPostalCodeValid,
      }}
    >
      {children}
    </ShippingCustomContext.Provider>
  )
}
