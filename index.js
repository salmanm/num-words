/* eslint-disable eqeqeq */

const a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen ']
const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

const regex = /^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/

module.exports = function numWords (input) {
  const num = Number(input)
  if (isNaN(num)) return ''
  if (num === 0) return 'zero'

  const numStr = num.toString()
  if (numStr.length > 9) {
    throw new Error('overflow') // Does not support converting more than 9 digits yet
  }

  const [, n1, n2, n3, n4, n5] = ('000000000' + numStr).substr(-9).match(regex) // left pad zeros

  let str = ''
  str += (n1 != 0) ? (a[Number(n1)] || b[n1[0]] + ' ' + a[n1[1]]) + 'crore ' : ''
  str += (n2 != 0) ? (a[Number(n2)] || b[n2[0]] + ' ' + a[n2[1]]) + 'lakh ' : ''
  str += (n3 != 0) ? (a[Number(n3)] || b[n3[0]] + ' ' + a[n3[1]]) + 'thousand ' : ''
  str += (n4 != 0) ? a[Number(n4)] + 'hundred ' : ''
  str += (n5 != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n5)] || b[n5[0]] + ' ' + a[n5[1]]) : ''

  return str.trim()
}
