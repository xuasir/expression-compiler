import { Enum } from '../../src/helper/enum'

test('test Enum class', () => {
  const testEnum = new Enum('TEST', 'test')
  expect(testEnum.type).toBe('TEST')
  expect(testEnum.value).toBe('test')
})
