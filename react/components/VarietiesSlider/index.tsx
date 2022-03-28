import React from 'react'

import styles from './styles.css'
import type { ComponentWithSchema } from '../../interfaces/ComponentsWithSchema'

interface IVarietiesSlider {
  varietiesItem?: Array<{
    url: string
    image: string
    imageTitle: string
  }>
  Slider: ({ children: ReactNode }) => JSX.Element
}

const VarietiesSlider: ComponentWithSchema<IVarietiesSlider> = ({
  varietiesItem,
  Slider,
}): JSX.Element => {
  return (
    <Slider>
      {!varietiesItem ? (
        <h1>Ainda não existem</h1>
      ) : (
        varietiesItem.map(({ url, image, imageTitle }) => {
          return (
            <a key={url} href={url} className={styles.varietiesItem}>
              <img
                src={image}
                alt={imageTitle}
                title={imageTitle}
                className={styles.varietiesItemImage}
              />
              <p className={styles.varietiesItemTitle}>{imageTitle}</p>
            </a>
          )
        })
      )}
    </Slider>
  )
}

VarietiesSlider.schema = {
  type: 'object',
  name: 'Ícones de Redes Sociais',
  title: 'Ícones de Redes Sociais',
  properties: {
    varietiesItem: {
      type: 'array',
      title: 'Ícones de Redes Sociais',
      items: {
        type: 'object',
        properties: {
          image: {
            type: 'string',
            title: 'Ícone',
            widget: {
              'ui:widget': 'image-uploader',
            },
          },
          imageTitle: {
            type: 'string',
            title: 'Título',
          },
          url: {
            type: 'string',
            title: 'URL',
          },
        },
      },
    },
  },
}

export default VarietiesSlider
