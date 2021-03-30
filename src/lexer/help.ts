const LetterRE = /^[a-zA-Z]$/
const NumberRE = /^[0-9]$/
const LiteralRE = /^[_a-zA-Z0-9]$/
const OperatorRE = /^[+\-*/><=!&|^%,]$/

export const isLetter = (str: string) => LetterRE.test(str)
export const isNumber = (str: string) => NumberRE.test(str)
export const isLiteral = (str: string) => LiteralRE.test(str)
export const isOperator = (str: string) => OperatorRE.test(str)
