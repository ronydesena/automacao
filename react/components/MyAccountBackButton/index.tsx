import React, { useCallback, useEffect, useState } from 'react'
import $ from 'jquery'

import { BUTTON_HTML } from './buttonHtml'
import { handleElement } from '../../utils/handleElement'

export const MyAccountBackButton = () => {
  const [hasBackButton, setHasBackButton] = useState(false)

  const navElement = document.querySelector('.vtex-my-account-1-x-menuLinks')

  const TITLE_CONTAINER = '.vtex-pageHeader__title span'

  const handleClick = useCallback(
    (e: MouseEvent) => {
      const titleContainerElement = document.querySelector(
        '.vtex-pageHeader__title'
      )

      if (!window.location.hash.includes('subscriptions')) {
        setHasBackButton(false)

        return
      }

      if (
        (!navElement?.contains(e.target as Node) &&
          titleContainerElement?.children.length === 0) ||
        hasBackButton
      ) {
        return
      }

      handleElement(TITLE_CONTAINER, () => {
        $('.vtex-pageHeader__container').prepend(BUTTON_HTML)

        $(
          '.vtex-pageHeader__container .vtex-pageHeader-link__container .vtex-button'
        ).on('click', () => {
          window.history.back()
        })

        setHasBackButton(true)
      })
    },
    [hasBackButton, navElement]
  )

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => document.removeEventListener('click', handleClick)
  }, [handleClick, navElement])

  useEffect(() => {
    if (!hasBackButton && window.location.hash.includes('subscriptions')) {
      setHasBackButton(true)

      handleElement(TITLE_CONTAINER, () => {
        $('.vtex-pageHeader__container').prepend(BUTTON_HTML)

        $(
          '.vtex-pageHeader__container .vtex-pageHeader-link__container .vtex-button'
        ).on('click', () => {
          window.history.back()
        })
      })
    }
  }, [hasBackButton, TITLE_CONTAINER])

  return <></>
}
