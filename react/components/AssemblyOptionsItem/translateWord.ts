interface ISubscriptionReplacement {
  [key: string]: {
    _replace: string
    _for: {
      _singular: string
      _plural: string
    }
  }
}

export function translateWord(name: string, option: string) {
  const subscriptionParsingOptions = {
    'vtex.subscription.assinatura-anual': {
      _replace: 'year',
      _for: {
        _singular: 'ano',
        _plural: 'anos',
      },
    },
    'vtex.subscription.assinatura-mensal': {
      _replace: 'month',
      _for: {
        _singular: 'mês',
        _plural: 'meses',
      },
    },
    'vtex.subscription.assinatura-semanal': {
      _replace: 'week',
      _for: {
        _singular: 'semana',
        _plural: 'semanas',
      },
    },
    'vtex.subscription.assinatura-diaria': {
      _replace: 'day',
      _for: {
        _singular: 'dia',
        _plural: 'dias',
      },
    },
  } as ISubscriptionReplacement

  const { _replace, _for } = subscriptionParsingOptions[name]
  const num = Number(option.replace(/\D/g, ''))
  const _forWithNumber = num > 1 ? _for._plural : _for._singular

  return option.replace(_replace, _forWithNumber)
}
