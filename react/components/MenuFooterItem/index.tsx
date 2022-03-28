import React from 'react'

export interface IMenuFooterItem {
  icon: string
  text: string
  href: string
}

export const MenuFooterItem = ({ icon, text, href }: IMenuFooterItem) => {
  return (
    <div>
      <img src={icon} alt="Ícone do footer" />
      <a href={href}>{text}</a>
    </div>
  )
}
