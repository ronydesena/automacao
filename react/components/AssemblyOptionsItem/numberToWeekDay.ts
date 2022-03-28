interface IWeekDayReplacement {
  [key: string]: string
}

export function numberToWeekDay(value: string) {
  const numberParsingOptions = {
    '0': 'Domingo',
    '1': 'Segunda-feira',
    '2': 'Terça-feira',
    '3': 'Quarta-feira',
    '4': 'Quinta-feira',
    '5': 'Sexta-feira',
    '6': 'Sábado',
  } as IWeekDayReplacement

  return numberParsingOptions[value] ?? 'null'
}
