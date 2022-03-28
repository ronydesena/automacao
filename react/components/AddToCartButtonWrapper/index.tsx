import React, { useCallback, useEffect, useState } from 'react'

import styles from './styles.css'

interface IAddToCartButtonWrapper {
  AddToCartButton: () => JSX.Element
}

export const AddToCartButtonWrapper = ({
  AddToCartButton,
}: IAddToCartButtonWrapper) => {
  const [scrollTop, setScrollTop] = useState(0)

  const SCROLL_TO_CHANGE = 700
  const BREAKPOINT = 640

  const onScroll = useCallback((e: Event) => {
    setScrollTop((e.target as Document)?.documentElement.scrollTop)
  }, [])

  useEffect(() => {
    if (window.innerWidth > BREAKPOINT) return

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll, scrollTop])

  return (
    <div
      className={
        scrollTop > SCROLL_TO_CHANGE
          ? styles.addToCartButtonWrapperFixed
          : styles.addToCartButtonWrapper
      }
    >
      <div
        className={
          scrollTop > SCROLL_TO_CHANGE
            ? styles.addToCartButtonContainerFixed
            : styles.addToCartButtonContainer
        }
      >
        <AddToCartButton />
      </div>
    </div>
  )
}
