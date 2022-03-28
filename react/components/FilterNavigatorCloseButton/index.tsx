import React, { useCallback, useEffect } from 'react'
import $ from 'jquery'

import { handleElement } from '../../utils/handleElement'
import { BUTTON_HTML } from './buttonHtml'

export const FilterNavigatorCloseButton = () => {
  const FILTERS_TRIGGER = '.vtex-search-result-3-x-filterPopupButton'
  const HEADER_CONTAINER = '.vtex-search-result-3-x-filterAccordionBreadcrumbs'
  const SIDE_BAR = '.vtex-search-result-3-x-sidebar'

  const handleClick = useCallback((e: MouseEvent) => {
    const filtersTrigger = document.querySelector(FILTERS_TRIGGER)

    if (!filtersTrigger?.contains(e.target as Node)) return

    handleElement(HEADER_CONTAINER, () => {
      const hasButton = document
        .querySelector(HEADER_CONTAINER)
        ?.children.namedItem('filterCloseBtn')

      if (hasButton) return

      $(HEADER_CONTAINER).append(BUTTON_HTML)

      $(`${HEADER_CONTAINER} #filterCloseBtn`).on('click', () => {
        $(SIDE_BAR).prev().click()
      })
    })
  }, [])

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => document.removeEventListener('click', handleClick)
  }, [handleClick])

  return <></>
}
