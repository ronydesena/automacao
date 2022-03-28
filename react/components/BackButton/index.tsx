import React, { useCallback } from 'react'

import { IconArrowRight } from '../IconArrowRight'
import styles from './styles.css'

interface IPosition {
  top?: number
  left?: number
  bottom?: number
  right?: number
}

interface IBackButton {
  label?: string
  position?: IPosition
  arrowColor?: string
}

export const BackButton = ({ label, position, arrowColor }: IBackButton) => {
  const handleClick = useCallback(() => {
    window.history.back()
  }, [])

  return (
    <button
      type="button"
      className={styles.backButton}
      style={position ? { position: 'absolute', ...position } : undefined}
      onClick={handleClick}
    >
      <IconArrowRight color={arrowColor || '#ff3333'} />
      <p>{label || 'Back'}</p>
    </button>
  )
}
