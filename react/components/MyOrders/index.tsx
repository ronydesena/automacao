import React, { useCallback } from 'react'
import { useRuntime } from 'vtex.render-runtime'

import { IconBox } from '../IconBox'
import styles from './styles.css'

interface IMyOrders {
  label?: string
}

export const MyOrders = ({ label }: IMyOrders) => {
  const { navigate } = useRuntime()

  const handleClick = useCallback(() => {
    navigate({ to: '/account#/orders' })
  }, [navigate])

  return (
    <div className={styles.regionsDesktopTriggerContainer}>
      <button
        className={styles.regionsDesktopTriggerButton}
        onClick={handleClick}
      >
        <IconBox color="#48494C" className={styles.regionsDesktopTriggerIcon} />

        <p className={styles.regionsDesktopTriggerLabel}>{label}</p>
      </button>
    </div>
  )
}
