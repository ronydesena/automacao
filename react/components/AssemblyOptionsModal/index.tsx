/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useCallback, useEffect, useState } from 'react'
import { CloseButton } from 'vtex.modal-layout'
import { useProduct } from 'vtex.product-context'
// @ts-ignore
import { useProductDispatch } from 'vtex.product-context/ProductDispatchContext'
// @ts-ignore
import { useModalDispatch } from 'vtex.modal-layout/ModalContext'
// @ts-ignore
import { Spinner } from 'vtex.styleguide'

import type { ComponentWithSchema } from '../../interfaces/ComponentsWithSchema'
import { AssemblyOptionsItem } from '../AssemblyOptionsItem'
import styles from './styles.css'

interface IAssemblyOptionsModalProps {
  modalTitle?: string
  modalDescription?: string
  modalFrequency?: string
  modalPurchaseDay?: string
  buttonLabel?: string
}

export const AssemblyOptionsModal: ComponentWithSchema<IAssemblyOptionsModalProps> = ({
  modalTitle,
  modalDescription,
  buttonLabel,
  modalFrequency,
  modalPurchaseDay,
}) => {
  const productContextValue = useProduct()
  const productDispatch = useProductDispatch()
  const modalDispatch = useModalDispatch()
  const subscriptionsList =
    productContextValue?.product?.itemMetadata?.items[0].assemblyOptions

  const [isLoading, setIsLoading] = useState(false)
  const [hasPurchaseDay, setHasPurchaseDay] = useState(false)
  const [selectedFrequency, setSelectedFrequency] = useState({
    id: '',
    value: '',
  })

  const [selectedPurchaseDay, setSelectedPurchaseDay] = useState({
    id: '',
    value: '',
  })

  const handleSelectFrequency = useCallback(
    (item: { id: string; value: string }) => {
      setSelectedPurchaseDay({ id: '', value: '' })
      setSelectedFrequency(item)
    },
    []
  )

  const addToCart = useCallback(() => {
    document
      .querySelector(
        '.promofarma-store-theme-0-x-addToCartButtonContainer button'
      )
      // @ts-ignore
      ?.click()
  }, [])

  const createSignature = useCallback(() => {
    setIsLoading(true)

    productDispatch({
      type: 'SET_ASSEMBLY_OPTIONS',
      args: {
        groupId: selectedFrequency.id,
        groupInputValues: {
          'vtex.subscription.key.frequency': selectedFrequency.value,
          ...(hasPurchaseDay && {
            'vtex.subscription.key.purchaseday': selectedPurchaseDay.value,
          }),
        },
        isValid: true,
      },
    })

    setTimeout(() => {
      addToCart()
      setIsLoading(false)
      modalDispatch({ type: 'CLOSE_MODAL' })
    }, 1000)
  }, [
    addToCart,
    hasPurchaseDay,
    modalDispatch,
    productDispatch,
    selectedFrequency,
    selectedPurchaseDay,
  ])

  const showSubmitButton = useCallback(() => {
    if (!hasPurchaseDay && !!selectedFrequency.value.length) return true

    if (
      hasPurchaseDay &&
      !!selectedFrequency.value.length &&
      !!selectedPurchaseDay.value.length
    ) {
      return true
    }

    return false
  }, [hasPurchaseDay, selectedFrequency, selectedPurchaseDay])

  useEffect(() => {
    setHasPurchaseDay(
      !!subscriptionsList
        ?.find(element => element.id === selectedFrequency.id)
        ?.inputValues.find(
          element => element.label === 'vtex.subscription.key.purchaseday'
        )
    )
  }, [subscriptionsList, selectedFrequency])

  return (
    <div className={styles.assemblyOptionsContainer}>
      <CloseButton />

      <h1 className={styles.assemblyOptionsTitle}>
        {modalTitle || 'Assinar este produto'}
      </h1>

      {!!modalDescription?.length && (
        <p className={styles.assemblyOptionsDescription}>{modalDescription}</p>
      )}

      <hr />

      <p className={styles.assemblyOptionsDescription}>
        {modalFrequency || 'Frequência de entrega:'}
      </p>

      <form className={styles.assemblyOptionsForm}>
        {subscriptionsList?.map(subscription => (
          <>
            {subscription.inputValues
              .find(
                element => element.label === 'vtex.subscription.key.frequency'
              )
              ?.domain?.map(frequency => (
                <AssemblyOptionsItem
                  key={frequency}
                  label={frequency}
                  value={frequency}
                  setValue={handleSelectFrequency}
                  currentValue={selectedFrequency}
                  id={subscription.id}
                />
              ))}
          </>
        ))}
      </form>

      {!!selectedFrequency.value.length && hasPurchaseDay && (
        <>
          <hr />

          <p className={styles.assemblyOptionsDescription}>
            {modalPurchaseDay || 'Data de pagamento:'}
          </p>

          <form className={styles.assemblyOptionsForm}>
            {subscriptionsList
              ?.find(element => element.id === selectedFrequency.id)
              ?.inputValues.find(
                element => element.label === 'vtex.subscription.key.purchaseday'
              )
              ?.domain?.map(purchaseDay => (
                <AssemblyOptionsItem
                  key={purchaseDay}
                  label={purchaseDay}
                  value={purchaseDay}
                  setValue={setSelectedPurchaseDay}
                  currentValue={selectedPurchaseDay}
                  id={selectedFrequency.id}
                  isPurchaseDay
                />
              ))}
          </form>
        </>
      )}

      {showSubmitButton() && (
        <button
          type="button"
          className={styles.assemblyOptionsSubmitButton}
          onClick={createSignature}
        >
          {isLoading ? (
            <Spinner color="#fff" size={24} />
          ) : (
            buttonLabel || 'Assinar'
          )}
        </button>
      )}
    </div>
  )
}

AssemblyOptionsModal.schema = {
  type: 'object',
  name: 'Modal de assinaturas',
  title: 'Modal de assinaturas',
  properties: {
    modalTitle: {
      type: 'string',
      title: 'Título do modal',
    },
    modalDescription: {
      type: 'string',
      title: 'Descrição do modal',
    },
    modalFrequency: {
      type: 'string',
      title: 'Texto de frequência de entrega',
    },
    modalPurchaseDay: {
      type: 'string',
      title: 'Texto de data de pagamento',
    },
    buttonLabel: {
      type: 'string',
      title: 'Texto do botão',
    },
  },
}
