import React from 'react'
import { useProduct } from 'vtex.product-context'

import styles from './styles.css'

export const ProductBrand = () => {
  const productContextValue = useProduct()

  return (
    <p className={styles.productBrandName}>
      {productContextValue?.product?.brand || ''}
    </p>
  )
}
