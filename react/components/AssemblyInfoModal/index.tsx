import React from 'react'
import { CloseButton } from 'vtex.modal-layout'

import type { ComponentWithSchema } from '../../interfaces/ComponentsWithSchema'
import styles from './styles.css'

interface IAssemblyInfoModalProps {
  modalTitle?: string
  rules?: Array<{
    ruleTitle?: string
    ruleDescription?: string
  }>
}

export const AssemblyInfoModal: ComponentWithSchema<IAssemblyInfoModalProps> = ({
  rules,
  modalTitle,
}) => {
  return (
    <div className={styles.assemblyInfoContainer}>
      <CloseButton />

      <h1 className={styles.assemblyInfoTitle}>
        {modalTitle || 'Como funciona?'}
      </h1>

      <div className={styles.assemblyInfoContent}>
        {rules?.map(({ ruleTitle, ruleDescription }) => (
          <>
            <h2
              className={styles.assemblyInfoRuleTitle}
              key={`title-${ruleTitle}`}
            >
              {ruleTitle}
            </h2>

            <p
              className={styles.assemblyInfoRuleDescription}
              key={`description-${ruleTitle}`}
            >
              {ruleDescription}
            </p>
          </>
        ))}
      </div>
    </div>
  )
}

AssemblyInfoModal.schema = {
  type: 'object',
  name: 'Regras das assinaturas',
  title: 'Regras das assinaturas',
  properties: {
    modalTitle: {
      type: 'string',
      title: 'Título do modal',
    },
    rules: {
      type: 'array',
      title: 'Regras',
      items: {
        type: 'object',
        properties: {
          ruleTitle: {
            type: 'string',
            title: 'Título',
          },
          ruleDescription: {
            type: 'string',
            title: 'Descrição',
          },
        },
      },
    },
  },
}
