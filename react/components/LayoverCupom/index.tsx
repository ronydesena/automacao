import React, { useCallback, useEffect, useState } from 'react'
import { CloseButton } from 'vtex.modal-layout'

import { LayoverImg } from '../LayoverImg'
import { LayoverInput } from '../LayoverInput'
import { validateEmail } from '../../utils/validateEmail'
import httpPostClient from '../../services/httpPostClient'
import type { RequestParams } from '../../services/httpPostClient'
import type { ComponentWithSchema } from '../../interfaces/ComponentsWithSchema'
import styles from './styles.css'

interface ILayoverCupom {
  paragraphFirst?: string
  paragraphSecond?: string
  cuponCode?: string
  cuponImg?: string
}

export const LayoverCupom: ComponentWithSchema<ILayoverCupom> = ({
  paragraphFirst,
  paragraphSecond,
  cuponCode,
  cuponImg,
}): JSX.Element => {
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isRegistered, setIsRegistered] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isCopying, setIsCopying] = useState(false)

  const loadItems = useCallback(() => {
    const body = {
      name: nameValue,
      email: emailValue,
      couponCode: cuponCode,
      layoverType: 'promotion',
    }

    const requestParams: RequestParams = {
      url: '/api/dataentities/LO/documents',
      body,
    }

    httpPostClient(requestParams)
  }, [cuponCode, emailValue, nameValue])

  const handleSubmit = useCallback(() => {
    setIsLoading(true)

    if (!nameValue || !emailValue) {
      setErrorMessage('Preencha os campos')
      setIsLoading(false)

      return
    }

    if (!validateEmail(emailValue)) {
      setErrorMessage('E-mail inválido!')
      setIsLoading(false)

      return
    }

    setErrorMessage('')
    setIsLoading(false)
    setIsRegistered(true)
    loadItems()
  }, [nameValue, emailValue, loadItems])

  const handleCopy = useCallback(() => {
    setIsCopying(true)
    if (cuponCode) {
      navigator.clipboard.writeText(cuponCode)
    }
  }, [cuponCode])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCopying(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [isCopying])

  return (
    <aside className={styles.layoverContainer}>
      <CloseButton />

      <LayoverImg alt="Aoba" imageName={cuponImg} />

      {!isRegistered ? (
        <div className={styles.layoverForm}>
          <div className={styles.layoverTextContainer}>
            <p className={styles.layoverFirstText}>
              {paragraphFirst || 'Insira o texto através do Site Editor'}
            </p>

            {errorMessage && (
              <span className={styles.layoverErrorMessage}>{errorMessage}</span>
            )}
          </div>

          <LayoverInput
            placeholder="Seu nome"
            onChangeText={setNameValue}
            value={nameValue}
            className={styles.layoverInput}
          />

          <LayoverInput
            type="email"
            placeholder="Seu email"
            onChangeText={setEmailValue}
            value={emailValue}
            className={styles.layoverInput}
          />

          <button
            type="button"
            className={styles.layoverButton}
            onClick={handleSubmit}
          >
            {isLoading ? '. . .' : 'Ganhar desconto'}
          </button>
        </div>
      ) : (
        <div className={styles.layoverForm}>
          <div className={styles.layoverTextContainer}>
            <span className={styles.layoverGreenText}>Cupom resgatado!</span>

            <p className={styles.layoverSecondText}>
              {paragraphSecond || 'Insira o texto através do Site Editor'}
            </p>
          </div>

          <span className={styles.layoverCuponLabel}>{cuponCode}</span>

          <button
            type="button"
            className={styles.layoverCuponButton}
            onClick={handleCopy}
            disabled={isCopying}
          >
            {isCopying ? 'Copiado!' : 'Copiar cupom'}
          </button>
        </div>
      )}
    </aside>
  )
}

LayoverCupom.schema = {
  type: 'object',
  name: 'Layover Cupom',
  title: 'Layover Cupom',
  properties: {
    paragraphFirst: {
      type: 'string',
      title: 'Texto de cadastro',
    },
    paragraphSecond: {
      type: 'string',
      title: 'Texto de cupom',
    },
    cuponCode: {
      type: 'string',
      title: 'Código do cupom',
    },
    cuponImg: {
      type: 'string',
      title: 'Imagem do cupom (260x375)',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
  },
}
