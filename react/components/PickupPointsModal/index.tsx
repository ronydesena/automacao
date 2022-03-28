import React, { useCallback, useEffect, useState } from 'react'
import { CloseButton } from 'vtex.modal-layout'

import { useShippingCustom } from '../../hooks/useShippingCustom'
import type { IPickupPoint } from '../../interfaces/IShippingInfo'
import { ShippingPickupPoints } from '../ShippingPickupPoints'
import styles from './styles.css'

interface IPickupPointsModal {
  title?: string
}

export const PickupPointsModal = ({ title }: IPickupPointsModal) => {
  const { shippingInfo } = useShippingCustom()
  const [lowerDistancePickupPoint, setLowerDistancePickupPoint] = useState<
    IPickupPoint | undefined
  >({} as IPickupPoint)

  const getPickupDistance = useCallback(
    (pickupId: string) => {
      const pickupSla = shippingInfo.logisticsInfo[0].slas.find(
        sla => sla.pickupPointId === pickupId
      )

      if (pickupSla?.pickupDistance) return pickupSla?.pickupDistance

      return undefined
    },
    [shippingInfo.logisticsInfo]
  )

  useEffect(() => {
    const filteredSlas = shippingInfo.logisticsInfo[0].slas.filter(
      item => item.deliveryChannel === 'pickup-in-point'
    )

    const pickupSla = filteredSlas.reduce((prev, curr) => {
      return prev.pickupDistance < curr.pickupDistance ? prev : curr
    })

    const pickupPoint = shippingInfo.pickupPoints.find(
      pickupPointItem => pickupPointItem.id === pickupSla.pickupPointId
    )

    setLowerDistancePickupPoint(pickupPoint)
  }, [getPickupDistance, shippingInfo.logisticsInfo, shippingInfo.pickupPoints])

  return (
    <div className={styles.pickupModalContainer}>
      <CloseButton />

      <h1 className={styles.pickupModalTitle}>{title || 'Modal title'}</h1>

      {lowerDistancePickupPoint &&
        !!Object.keys(lowerDistancePickupPoint).length && (
          <p className={styles.pickupPointsAddress}>
            {`Próximo a: ${lowerDistancePickupPoint?.address?.street} - ${lowerDistancePickupPoint?.address?.city} - ${lowerDistancePickupPoint?.address?.state}, ${lowerDistancePickupPoint?.address?.postalCode}`}
          </p>
        )}

      <hr />

      <div className={styles.shippingInfoItems}>
        {shippingInfo.pickupPoints?.map(pickupPoint => (
          <ShippingPickupPoints
            itemProps={pickupPoint}
            key={pickupPoint.id}
            pickupDistance={getPickupDistance(pickupPoint.id)}
          />
        ))}
      </div>
    </div>
  )
}
