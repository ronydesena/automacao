import React from 'react'

import styles from './styles.css'
import { ShippingForm } from '../ShippingForm'
import { ShippingItems } from '../ShippingItems'
import { useShippingCustom } from '../../hooks/useShippingCustom'

interface IShippingCustom {
  Trigger: () => JSX.Element
}

export const ShippingCustom = ({ Trigger }: IShippingCustom) => {
  const { shippingInfo, isPostalCodeValid } = useShippingCustom()

  return (
    <div className={styles.shippingContainer}>
      <ShippingForm />

      {isPostalCodeValid && !!Object.keys(shippingInfo).length && (
        <>
          <hr />

          <ShippingItems deliveryTitle="Entrega" withdrawalTitle="Retirada" />
        </>
      )}

      {isPostalCodeValid && shippingInfo.pickupPoints?.length > 3 && (
        <Trigger />
      )}
    </div>
  )
}
