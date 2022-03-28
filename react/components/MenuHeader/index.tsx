import React, { useCallback } from 'react'
import { useRuntime } from 'vtex.render-runtime'

import userIcon from '../../../assets/icons/custom-user.svg'
import styles from './styles.css'

interface IMenuHeader {
  title: string
}

export const MenuHeader = ({ title }: IMenuHeader) => {
  const { navigate } = useRuntime()

  const handleClick = useCallback(() => {
    navigate({ to: '/login' })
  }, [navigate])

  return (
    <header className={styles.menuHeader}>
      <button
        type="button"
        className={styles.menuHeaderButton}
        onClick={handleClick}
      >
        <img
          src={userIcon}
          alt="Ícone de usuário"
          className={styles.menuUserIcon}
        />
        <h1 className={styles.menuHeaderTitle}>{title}</h1>
      </button>
    </header>
  )
}
