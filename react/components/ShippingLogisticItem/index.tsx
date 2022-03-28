import React from 'react'

import type { ISla } from '../../interfaces/IShippingInfo'
import { numberToCommaConverter } from '../../utils/numberToCommaConverter'
import { shippingDateConverter } from '../../utils/shippingDateConverter'
import styles from './styles.css'

interface IShippingLogisticItem {
  itemProps: ISla
}

export const ShippingLogisticItem = ({ itemProps }: IShippingLogisticItem) => {
  const price = numberToCommaConverter(itemProps.price)

  return (
    <div className={styles.shippingLogisticItemContainer}>
      <p className={styles.shippingLogisticItemTitle}>
        {itemProps.name.split('(')[0]}
      </p>

      <p className={styles.shippingLogisticItemValue}>
        {`${
          Number(price) > 0 ? `R$ ${price}` : 'Grátis,'
        } em até ${shippingDateConverter(itemProps.shippingEstimate)}`}
      </p>
    </div>
  )
}
