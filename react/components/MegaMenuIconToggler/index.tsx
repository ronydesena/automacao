import React, { useCallback, useEffect, useState } from 'react'
import $ from 'jquery'

import { ICON_HTML } from './iconHtml'

export const MegaMenuIconToggler = () => {
  const [isOpen, setIsOpen] = useState(false)

  const MENU_TRIGGER = '.vtex-mega-menu-2-x-triggerContainer'
  const MENU_ICON_HAMBURGUER = '.vtex-mega-menu-2-x-triggerButtonIcon'
  const MENU_ICON_CLOSE = '.vtex-mega-menu-2-x-triggerButtonCloseIcon'
  const MENU_CONTAINER = '.vtex-mega-menu-2-x-menuContainerNav'

  const handleTriggerClick = useCallback(
    (e: MouseEvent) => {
      const menuTrigger = document.querySelector(MENU_TRIGGER)

      if (menuTrigger?.contains(e.target as Node)) {
        setIsOpen(!isOpen)
      }
    },
    [isOpen]
  )

  const handleMenuClick = useCallback((e: MouseEvent) => {
    const menuTrigger = document.querySelector(MENU_TRIGGER)
    const menuContainer = document.querySelector(MENU_CONTAINER)

    if (
      !menuContainer?.contains(e.target as Node) &&
      !menuTrigger?.contains(e.target as Node)
    ) {
      setIsOpen(false)
    }
  }, [])

  useEffect(() => {
    const menuIconClose = document.querySelector(MENU_ICON_CLOSE)

    if (menuIconClose) return

    $(MENU_TRIGGER).append(ICON_HTML)
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', handleTriggerClick)

    return () => {
      document.removeEventListener('mousedown', handleTriggerClick)
    }
  }, [handleTriggerClick])

  useEffect(() => {
    if (!isOpen) return

    document.addEventListener('mousedown', handleMenuClick)

    return () => {
      document.removeEventListener('mousedown', handleMenuClick)
    }
  }, [handleMenuClick, isOpen])

  useEffect(() => {
    if (isOpen) {
      $(`${MENU_TRIGGER} ${MENU_ICON_HAMBURGUER}`).hide()
      $(`${MENU_TRIGGER} ${MENU_ICON_CLOSE}`).show()
    } else {
      $(`${MENU_TRIGGER} ${MENU_ICON_HAMBURGUER}`).show()
      $(`${MENU_TRIGGER} ${MENU_ICON_CLOSE}`).hide()
    }
  }, [isOpen])

  return <></>
}
