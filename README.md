# num-words

An simple module to convert numbers to words for South Asian numbering system. e.g. Two crore four lakh.

# Install

```js
npm i num-words
```

# Example

```js
1          ->  one
12         ->  twelve
123        ->  one hundred and twenty three
1234       ->  one thousand two hundred and thirty four
12345      ->  twelve thousand three hundred and forty five
123456     ->  one lakh twenty three thousand four hundred and fifty six
```

# Usage

```js
const numWords = require('num-words')

const amountInWords = numWords(12345) // twelve thousand three hundred and forty five
```

_Note: This module only supports 9 digits input. A typical usecase for such convertion is in tax invoices or charts etc. For that more than 9 digits input is not very common (and also not very readable)._

# Contributing

In case you notice a bug, please open an issue mentioning the input that has caused an incorrect conversion.
