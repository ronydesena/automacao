import React, { useCallback } from 'react'

import type { IPickupPoint } from '../../interfaces/IShippingInfo'
import { numberToCommaConverter } from '../../utils/numberToCommaConverter'
import { timeHMSConverter } from '../../utils/timeHMSConverter'
import { IconLocation } from '../IconLocation'
import styles from './styles.css'

interface IShippingPickupPoints {
  itemProps: IPickupPoint
  pickupDistance?: number
}

export const ShippingPickupPoints = ({
  itemProps,
  pickupDistance,
}: IShippingPickupPoints) => {
  const {
    address: { street, number, neighborhood, city, state, postalCode },
    businessHours,
  } = itemProps

  const currentDate = new Date()

  const handleRemainingHours = useCallback(() => {
    const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:00`

    const timeRemaining = Math.ceil(
      timeHMSConverter(businessHours[currentDate.getDay()].ClosingTime) -
        timeHMSConverter(currentTime)
    )

    return `${timeRemaining < 0 ? timeRemaining + 24 : timeRemaining} ${
      timeRemaining <= 1 && timeRemaining >= -1 ? 'hora' : 'horas'
    }`
  }, [businessHours, currentDate])

  return (
    <div className={styles.pickupPointsContainer}>
      <div className={styles.pickupRow}>
        <IconLocation
          color="#48494C"
          className={styles.pickupPointsLocationIcon}
        />
        <p className={styles.pickupPointsAddress}>
          {`${street}, ${number} - ${neighborhood}, ${city} - ${state}, ${postalCode}`}
        </p>
      </div>

      <div className={styles.pickupRow}>
        {pickupDistance && (
          <p className={styles.pickupPointsDistance}>{`${numberToCommaConverter(
            pickupDistance
          )} km`}</p>
        )}

        <p className={styles.pickupPointsTimeRemaining}>
          {`Grátis, em até ${handleRemainingHours()}`}
        </p>
      </div>
    </div>
  )
}
