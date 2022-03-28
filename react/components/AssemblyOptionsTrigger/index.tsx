import React from 'react'
import { useProduct } from 'vtex.product-context'

import styles from './styles.css'

interface IAssemblyOptionsTrigger {
  Triggers: () => JSX.Element
}

export const AssemblyOptionsTrigger = ({
  Triggers,
}: IAssemblyOptionsTrigger) => {
  const productContextValue = useProduct()

  return (
    <>
      {!!productContextValue?.product?.itemMetadata?.items?.[0].assemblyOptions
        ?.length && (
        <div className={styles.assemblyTriggerContainer}>
          <Triggers />

          <hr className={styles.assemblySeparator} />
        </div>
      )}
    </>
  )
}
