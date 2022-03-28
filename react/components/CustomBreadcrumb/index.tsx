import React, { useEffect, useState } from 'react'
import produce from 'immer'
import { StoreLink } from 'vtex.store-link'

import aroow from '../../../assets/icons/custom-arrow-right.svg'
import styles from './styles.css'

interface StructureLinks {
  href: string
  name: string
}

const CustomBreadcrumb = () => {
  const url = window.location
  const [paths, setPaths] = useState<StructureLinks[]>([
    { href: '/', name: 'Home' },
  ])

  useEffect(() => {
    setPaths(
      produce(paths, draft => {
        const arrayPaths = url.pathname.split('/')
        let currentLink = ''
        const pathsList = arrayPaths.filter(item => item !== '')

        const listLinks = pathsList.map(item => {
          currentLink = `${currentLink}/${item}`

          return { name: item, href: currentLink }
        })

        draft.push(...listLinks)
      })
    )
  }, [])

  return (
    <div className={styles.containerBreadcrumb}>
      <ul className={styles.wrapperBreadcrumb}>
        {paths.map((item: StructureLinks) => (
          <li key={item.href}>
            <img src={aroow} alt="" />
            <StoreLink href={item.href}>
              {item.name.replace(/-/g, ' ')}
            </StoreLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CustomBreadcrumb
