import React, { useCallback, useState } from 'react'

import { IconArrowRight as IconArrow } from '../IconArrowRight'
import type { ComponentWithSchema } from '../../interfaces/ComponentsWithSchema'
import styles from './styles.css'

interface ITipBarProps {
  texts?: Array<{
    icon: string
    text: string
  }>
  isDesktop?: boolean
}

export const TipBar: ComponentWithSchema<ITipBarProps> = ({
  texts,
  isDesktop = false,
}) => {
  const [page, setPage] = useState(1)

  const SUM_REFERENCE = isDesktop ? 4 : 1

  const handlePrevious = useCallback(() => {
    setPage(page - 1)
  }, [page])

  const handleNext = useCallback(() => {
    setPage(page + 1)
  }, [page])

  return (
    <aside className={styles.tipBarWrapper}>
      <div className={styles.tipBarContainer}>
        <button
          type="button"
          className={styles.buttonNav}
          onClick={handlePrevious}
          disabled={page <= 1}
        >
          <IconArrow color="#fff" className={styles.tipBarLeftArrow} />
        </button>

        <section className={styles.itemsContainer}>
          {texts?.length && (
            <>
              {texts
                ?.slice(
                  SUM_REFERENCE * (page - 1),
                  SUM_REFERENCE + SUM_REFERENCE * (page - 1)
                )
                .map((text, index) => (
                  <>
                    <div className={styles.tipBarContent} key={text.text}>
                      <img
                        src={text.icon}
                        alt={text.text}
                        className={styles.tipBarImage}
                      />
                      <p className={styles.tipBarText}>{text.text}</p>
                    </div>
                    {isDesktop && index - SUM_REFERENCE * (page - 1) !== 3 && (
                      <div
                        className={styles.tipBarSpacer}
                        key={`spacer-${text.text}`}
                      />
                    )}
                  </>
                ))}
            </>
          )}
        </section>

        <button
          type="button"
          className={styles.buttonNav}
          onClick={handleNext}
          disabled={page * SUM_REFERENCE >= (texts?.length || 0)}
        >
          <IconArrow color="#fff" className={styles.tipBarRightArrow} />
        </button>
      </div>
    </aside>
  )
}

TipBar.schema = {
  type: 'object',
  name: 'Tip bar',
  title: 'Tip bar',
  properties: {
    texts: {
      type: 'array',
      title: 'Textos',
      items: {
        type: 'object',
        properties: {
          icon: {
            type: 'string',
            title: 'Ícone do texto (PNG|SVG, 18x18)',
            widget: {
              'ui:widget': 'image-uploader',
            },
          },
          text: {
            type: 'string',
            title: 'Texto',
          },
        },
      },
    },
  },
}
