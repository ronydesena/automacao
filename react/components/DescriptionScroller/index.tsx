import React, { useCallback } from 'react'

import { IconArrowRight as IconArrowDown } from '../IconArrowRight'
import styles from './styles.css'

interface IDescriptionScroller {
  label?: string
}

if (window?.HTMLElement) {
  window.HTMLElement.prototype.scrollIntoView = function () {}
}

export const DescriptionScroller = ({ label }: IDescriptionScroller) => {
  const handleScroll = useCallback(() => {
    const element = document.getElementsByClassName(
      'vtex-store-components-3-x-productDescriptionTitle'
    )

    const elementDistanceToTop =
      window.pageYOffset + element[0].getBoundingClientRect().top

    window.scrollTo(0, elementDistanceToTop - 150)
  }, [])

  return (
    <button
      type="button"
      className={styles.descriptionScroller}
      onClick={handleScroll}
    >
      <p className={styles.descriptionScrollerText}>
        {label || 'Descrição do produto'}
      </p>
      <IconArrowDown
        color="#FF3333"
        className={styles.descriptionScrollerIcon}
      />
    </button>
  )
}
