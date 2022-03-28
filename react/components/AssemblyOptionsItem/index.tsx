import React from 'react'

import { translateWord } from './translateWord'
import { numberToWeekDay } from './numberToWeekDay'
import styles from './styles.css'

interface IAssemblyOptionsItem {
  label: string
  value: string
  setValue: (value: { id: string; value: string }) => void
  currentValue: {
    id: string
    value: string
  }
  id: string
  isPurchaseDay?: boolean
}

export const AssemblyOptionsItem = ({
  label,
  value,
  setValue,
  currentValue,
  id,
  isPurchaseDay,
}: IAssemblyOptionsItem) => {
  return (
    <button
      type="button"
      onClick={() => setValue({ value, id })}
      className={styles.assemblyOptionsItemContainer}
    >
      <aside
        className={
          currentValue.value === value
            ? styles.assemblyOptionsItemSelectActive
            : styles.assemblyOptionsItemSelect
        }
      >
        <div />
      </aside>

      <label className={styles.assemblyOptionsItemLabel}>
        {isPurchaseDay && id === 'vtex.subscription.assinatura-semanal'
          ? numberToWeekDay(label)
          : translateWord(id, label)}
      </label>
    </button>
  )
}
