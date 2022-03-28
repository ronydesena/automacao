import React from 'react'

import styles from './styles.css'

interface IPickupPointsTrigger {
  text: string
}

export const PickupPointsTrigger = ({ text }: IPickupPointsTrigger) => {
  return <p className={styles.pickupTriggerText}>{text}</p>
}
