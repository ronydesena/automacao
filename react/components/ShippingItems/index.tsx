import React, { useCallback } from 'react'

import { useShippingCustom } from '../../hooks/useShippingCustom'
import { ShippingLogisticItem } from '../ShippingLogisticItem'
import { ShippingPickupPoints } from '../ShippingPickupPoints'
import styles from './styles.css'

interface IShippingItems {
  deliveryTitle: string
  withdrawalTitle: string
}

export const ShippingItems = ({
  deliveryTitle,
  withdrawalTitle,
}: IShippingItems) => {
  const { shippingInfo } = useShippingCustom()

  const getPickupDistance = useCallback(() => {
    const pickupSla = shippingInfo.logisticsInfo[0].slas.find(
      sla => sla.deliveryChannel === 'pickup-in-point'
    )

    if (pickupSla?.pickupDistance) return pickupSla?.pickupDistance

    return undefined
  }, [shippingInfo])

  return (
    <div>
      <h1 className={styles.shippingInfoTitle}>{deliveryTitle}</h1>

      <div className={styles.shippingInfoItems}>
        {shippingInfo.logisticsInfo[0]?.slas.length > 0 ? (
          <>
            {shippingInfo.logisticsInfo[0]?.slas.map(sla => (
              <ShippingLogisticItem itemProps={sla} key={sla.id} />
            ))}
          </>
        ) : (
          <p className={styles.shippingInfoNotFound}>
            Não há opções de entrega para este endereço.
          </p>
        )}
      </div>

      <h1 className={styles.shippingInfoTitle}>{withdrawalTitle}</h1>

      <div className={styles.shippingInfoItems}>
        {shippingInfo.pickupPoints.length > 0 ? (
          <>
            {shippingInfo.pickupPoints.slice(0, 3).map(pickupPoint => (
              <ShippingPickupPoints
                itemProps={pickupPoint}
                key={pickupPoint.id}
                pickupDistance={getPickupDistance()}
              />
            ))}
          </>
        ) : (
          <p className={styles.shippingInfoNotFound}>
            Não há pontos de retirada para este endereço.
          </p>
        )}
      </div>
    </div>
  )
}
