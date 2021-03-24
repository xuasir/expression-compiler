function* toGenerator<T>(source: T[]) {
  for (const y of source) {
    yield y
  }
}

export function string2it(source: string) {
  const s = [...source]
  return toGenerator(s)
}
