export function numberToCommaConverter(currency: number) {
  return `${Math.trunc(currency)},${Math.trunc(Number(currency % 1) * 100)}`
}
