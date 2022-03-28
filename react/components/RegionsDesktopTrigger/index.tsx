import React, { useCallback, useEffect, useRef, useState } from 'react'

import styles from './styles.css'
import { IconLocation } from '../IconLocation'

interface IRegionsDesktopTrigger {
  Regions: (handleCloseButtonClick) => JSX.Element
  label?: string
}

export const RegionsDesktopTrigger = ({
  Regions,
  label,
}: IRegionsDesktopTrigger) => {
  const wrapper = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = useCallback((e: MouseEvent) => {
    if (!wrapper.current?.contains(e.target as Node)) {
      setIsOpen(false)
    }
  }, [])

  const handleCloseButtonClick = useCallback(() => {
    setIsOpen(false)
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [handleClick])

  return (
    <div ref={wrapper} className={styles.regionsDesktopTriggerContainer}>
      <button
        className={styles.regionsDesktopTriggerButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <IconLocation
          color="#48494C"
          className={styles.regionsDesktopTriggerIcon}
        />

        <p className={styles.regionsDesktopTriggerLabel}>{label}</p>
      </button>

      {isOpen && (
        <aside className={styles.regionsDesktopTriggerAside}>
          <Regions handleCloseButtonClick={handleCloseButtonClick} />
        </aside>
      )}
    </div>
  )
}
