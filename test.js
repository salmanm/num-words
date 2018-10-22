const { test } = require('tap')

const numWords = require('.')

test('Should convert numbers to words correctly', (t) => {
  const assertNum = (num, words) => {
    t.equal(numWords(num), words)
  }

  assertNum(1, 'one')
  assertNum(12, 'twelve')
  assertNum(123, 'one hundred and twenty three')
  assertNum(1234, 'one thousand two hundred and thirty four')
  assertNum(12345, 'twelve thousand three hundred and forty five')
  assertNum(123456, 'one lakh twenty three thousand four hundred and fifty six')
  assertNum(1234567, 'twelve lakh thirty four thousand five hundred and sixty seven')
  assertNum(12345678, 'one crore twenty three lakh forty five thousand six hundred and seventy eight')
  assertNum(123456789, 'twelve crore thirty four lakh fifty six thousand seven hundred and eighty nine')

  assertNum(2, 'two')
  assertNum(23, 'twenty three')
  assertNum(234, 'two hundred and thirty four')
  assertNum(2345, 'two thousand three hundred and forty five')
  assertNum(23456, 'twenty three thousand four hundred and fifty six')
  assertNum(234567, 'two lakh thirty four thousand five hundred and sixty seven')
  assertNum(2345678, 'twenty three lakh forty five thousand six hundred and seventy eight')
  assertNum(23456789, 'two crore thirty four lakh fifty six thousand seven hundred and eighty nine')
  assertNum(234567890, 'twenty three crore forty five lakh sixty seven thousand eight hundred and ninety')

  // add more

  t.end()
})
