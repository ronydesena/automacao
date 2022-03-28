export function isOnlyNumbers(text: string) {
  const regex = /^[0-9]*$/ // only accept numbers

  return regex.test(text)
}
