import { useContext } from 'react'

import { ShippingCustomContext } from '../components/ShippingCustomContext'

export const useShippingCustom = () => {
  const context = useContext(ShippingCustomContext)

  if (!context) {
    throw new Error(
      'useShippingCustom hook needs to be withen a ShippingCustomProvider'
    )
  }

  return context
}
