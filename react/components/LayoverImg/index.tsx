import React, { useCallback, useState } from 'react'

import styles from './styles.css'

interface ILayoverImg {
  imageName?: string
  alt: string
}

export const LayoverImg = ({ alt, imageName }: ILayoverImg) => {
  const [hasImageError, setHasImageError] = useState(false)

  const handleImageError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      e.currentTarget.onerror = null
      setHasImageError(true)
    },
    []
  )

  return (
    <>
      {!!imageName && !hasImageError ? (
        <img
          className={styles.layoverImg}
          src={imageName}
          alt={alt}
          onError={handleImageError}
        />
      ) : (
        <div className={styles.imgNotFound}>
          <p className={styles.paragraph}>Image not found</p>
        </div>
      )}
    </>
  )
}
