import React from 'react'

import { MenuFooterItem } from '../MenuFooterItem'
import { footerItems } from './footerItems'
import styles from './styles.css'

export const MenuFooter = () => {
  return (
    <footer className={styles.menuFooter}>
      {footerItems.map(item => (
        <MenuFooterItem
          key={item.href}
          icon={item.icon}
          text={item.text}
          href={item.href}
        />
      ))}
    </footer>
  )
}
