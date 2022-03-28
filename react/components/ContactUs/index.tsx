import React, { useCallback, useState } from 'react'

import type { RequestParams } from '../../services/httpPostClient'
import httpPostClient from '../../services/httpPostClient'
import styles from './styles.css'
import { validateEmail } from '../../utils/validateEmail'

interface IContactUs {
  BackButton?: () => JSX.Element
}

const ContactUs = ({ BackButton }: IContactUs) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [showInformationMessage, setShowInformationMessage] = useState(false)

  const [informationMessageType, setInformationMessageType] = useState(
    'success'
  )

  const [informationMessage, setInformationMessage] = useState(
    'Mensagem enviado com sucesso !'
  )

  const formatPhone = useCallback((phoneValue: string) => {
    const regexPhone = new RegExp(/^(\d{2})(\d{5})/g)

    return phoneValue.replace(regexPhone, '($1) $2-')
  }, [])

  const handleChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value)
    },
    []
  )

  const handleChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value)
    },
    []
  )

  const handleChangeSubject = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSubject(e.target.value)
    },
    []
  )

  const handleChangePhone = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPhone(formatPhone(e.target.value))
    },
    [formatPhone]
  )

  const handleChangeMessage = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(e.target.value)
    },
    []
  )

  const clearInputs = useCallback(() => {
    setEmail('')
    setName('')
    setPhone('')
    setMessage('')
    setSubject('')
  }, [])

  const clearFormatPhone = useCallback((phoneValue: string) => {
    return phoneValue.replace(/[()-\s]/g, '')
  }, [])

  const validatePhone = useCallback((currentPhone: string) => {
    const notDigit = new RegExp(/\D/g)

    return currentPhone.length === 11 && !notDigit.test(currentPhone)
  }, [])

  const runShowInformationMessage = useCallback(
    (
      currentInformationMessage: string,
      currentInformationMessageType: string
    ) => {
      setInformationMessage(currentInformationMessage)
      setInformationMessageType(currentInformationMessageType)
      setShowInformationMessage(true)
      setTimeout(() => {
        setShowInformationMessage(false)
      }, 5000)
    },
    []
  )

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const currentData = [name, email, message, subject, phone]

      const isEmpty = currentData.some(item => item.trim().length === 0)

      if (isEmpty) {
        runShowInformationMessage('Prencha os campos corretamente', 'error')

        return
      }

      if (!validateEmail(email)) {
        runShowInformationMessage('Email inválido !', 'error')

        return
      }

      if (!validatePhone(clearFormatPhone(phone))) {
        runShowInformationMessage('Telefone inválido !', 'error')

        return
      }

      const body = {
        name,
        email,
        subject,
        clearPhone: clearFormatPhone(phone),
        message,
      }

      const requestParams: RequestParams = {
        url: '/api/dataentities/CP/documents',
        body,
      }

      await httpPostClient(requestParams)

      runShowInformationMessage('Mensagem enviada com sucesso !', 'success')

      clearInputs()
    },
    [
      clearFormatPhone,
      clearInputs,
      email,
      message,
      name,
      phone,
      runShowInformationMessage,
      subject,
      validatePhone,
    ]
  )

  return (
    <section className={styles.contactUs}>
      <article className={styles.headerContactUs}>
        <h1 className={styles.headerContactUs__title}>Fale Conosco</h1>

        {BackButton && <BackButton />}

        <p className={styles.headerContactUs__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus,
          tortor sit amet accumsan rhoncus, est risus porttitor sapien, sit amet
          aliquet orci tellus vitae tellus.
        </p>
      </article>
      <form className={styles.conatctUsForm} onSubmit={handleSubmit}>
        <div className={styles.contatctUsForm__inputGroup}>
          <input
            type="text"
            className={styles.contactUsForm__inputText}
            placeholder="Nome"
            onChange={handleChangeName}
            value={name}
          />
        </div>
        <div className={styles.contatctUsForm__inputGroup}>
          <input
            type="text"
            className={styles.contactUsForm__inputText}
            placeholder="Email"
            onChange={handleChangeEmail}
            value={email}
          />
        </div>
        <div className={styles.contatctUsForm__inputGroup}>
          <select
            className={styles.contactUsForm__inputSelect}
            placeholder="Assunto"
            onChange={handleChangeSubject}
            value={subject}
            style={{ color: !subject.length ? '#787A7F' : '#000' }}
          >
            <option
              className={styles.contactUsForm__inputSelectOption}
              value=""
              disabled
            >
              Assunto
            </option>
            <option
              className={styles.contactUsForm__inputSelectOption}
              value="Assunto 1"
            >
              Assunto 1
            </option>
          </select>
        </div>
        <div className={styles.contatctUsForm__inputGroup}>
          <input
            type="text"
            className={styles.contactUsForm__inputText}
            placeholder="Telefone"
            onChange={handleChangePhone}
            value={phone}
            maxLength={15}
          />
        </div>
        <div className={styles.contatctUsForm__inputGroup}>
          <textarea
            className={styles.contactUsForm__inputTextarea}
            placeholder="Mensagem"
            onChange={handleChangeMessage}
            value={message}
          />
        </div>
        {showInformationMessage ? (
          <div
            className={styles[`informationMessage--${informationMessageType}`]}
          >
            <p className={styles.informationMessage__text}>
              {informationMessage}
            </p>
          </div>
        ) : null}
        <div className={styles.contatctUsForm__inputGroup}>
          <input type="submit" className={styles.contactUsForm__inputSubmit} />
        </div>
      </form>
    </section>
  )
}

export default ContactUs
