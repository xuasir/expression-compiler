function* arraryToGenerator(arr) {
  for (const val of arr) {
    yield val
  }
}

export { arraryToGenerator }
