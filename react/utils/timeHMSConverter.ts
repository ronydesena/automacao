export function timeHMSConverter(time: string) {
  const [hours, minutes, seconds] = time.split(':')

  const timeInHours =
    Number(hours) + Number(minutes) / 60 + Number(seconds) / 3600

  return timeInHours
}
