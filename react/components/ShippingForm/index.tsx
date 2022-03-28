import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { useProduct } from 'vtex.product-context'

import { isOnlyNumbers } from '../../utils/isOnlyNumbers'
import styles from './styles.css'
import { getDefaultSeller } from '../../utils/getDefaultSeller'
import viacep from '../../services/viacep'
import type { IViacepResponse } from '../../interfaces/IViacepResponse'
import { useShippingCustom } from '../../hooks/useShippingCustom'

export const ShippingForm = () => {
  const productContextValue = useProduct()
  const { setShippingInfo, setIsPostalCodeValid } = useShippingCustom()

  const [loading, setLoading] = useReducer(s => !s, false)
  const [cep, setCep] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [address, setAddress] = useState<IViacepResponse>({})

  const handleCalculateShipping = useCallback(async () => {
    setLoading()

    const defaultSeller = getDefaultSeller(
      productContextValue?.selectedItem?.sellers
    )

    const dataToSend = {
      items: [
        {
          quantity: 1,
          id: productContextValue?.selectedItem?.itemId,
          seller: defaultSeller?.sellerId,
        },
      ],
      postalCode: cep,
      country: 'BRA',
    }

    await fetch('/api/checkout/pub/orderForms/simulation/?sc=1', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then(rawResponse => rawResponse.json())
      .then(response => {
        setShippingInfo(response)
      })
      .catch(() => setErrorMessage('Ocorreu um erro, tente novamente'))

    if (!errorMessage.length) {
      await viacep
        .get<IViacepResponse & { erro?: string }>(`/${cep}/json`)
        .then(({ data }) => {
          setAddress({
            localidade: data.localidade,
            logradouro: data.logradouro,
            uf: data.uf,
            erro: data.erro,
          })
        })
        .catch(() => {
          setErrorMessage('Ocorreu um erro, tente novamente')
        })
    }

    setCep('')
    setLoading()
  }, [productContextValue, errorMessage, cep, setShippingInfo])

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const incommingCep = e.target.value

      if (incommingCep.length > 8) return

      if (!isOnlyNumbers(incommingCep)) {
        setErrorMessage('Por favor, insira apenas números')

        return
      }

      setErrorMessage('')
      setCep(incommingCep)
    },
    []
  )

  useEffect(() => {
    if (cep.length !== 8) return

    handleCalculateShipping()
  }, [cep, handleCalculateShipping])

  useEffect(() => {
    setIsPostalCodeValid(!!Object.keys(address).length && !address?.erro)
  }, [address, setIsPostalCodeValid])

  return (
    <div className={styles.shippingFormContainer}>
      <h1 className={styles.shippingTitle}>Onde você está ?</h1>

      <p className={styles.shippingDescription}>
        Informe sua localização para calcularmos os valores de frete e
        localizarmos possíveis pontos de retirada.
      </p>

      <div className={styles.shippingCepContainer}>
        <input
          className={styles.shippingCepInput}
          placeholder="Digite o seu cep"
          value={loading ? '. . .' : cep}
          onChange={handleInputChange}
          disabled={loading}
        />

        {!address.erro ? (
          <>
            {address.localidade && (
              <p
                className={styles.shippingDescription}
              >{`${address.logradouro} - ${address.localidade} - ${address.uf}`}</p>
            )}
          </>
        ) : (
          <p className={styles.shippingDescription}> Endereço não encontrado</p>
        )}
      </div>

      {!!errorMessage.length && (
        <span className={styles.shippingErrorMessage}>{errorMessage}</span>
      )}
    </div>
  )
}
