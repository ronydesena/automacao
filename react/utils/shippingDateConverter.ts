export function shippingDateConverter(date: string) {
  if (date.includes('bd')) {
    const [dateNumber] = date.split('bd')

    if (Number(dateNumber) <= 1) {
      return `${dateNumber} dia útil`
    }

    return `${dateNumber} dias úteis`
  }

  if (date.includes('m')) {
    const [dateNumber] = date.split('m')

    if (Number(dateNumber) <= 1) {
      return `${dateNumber} mês`
    }

    return `${dateNumber} meses`
  }

  if (date.includes('h')) {
    const [dateNumber] = date.split('h')

    if (Number(dateNumber) <= 1) {
      return `${dateNumber} hora`
    }

    return `${dateNumber} horas`
  }

  return ''
}
