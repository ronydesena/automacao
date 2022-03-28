interface ReplaceParams {
  phrase: string
  patterToRemove: RegExp | string
  patternToReplace: string
}

export function removeHyphen({
  phrase,
  patterToRemove,
  patternToReplace,
}: ReplaceParams): string {
  return phrase.replace(patterToRemove, patternToReplace)
}
