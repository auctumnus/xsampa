# xsampa
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@auctumnus/xsampa?style=flat-square)](https://bundlephobia.com/result?p=@auctumnus/xsampa)
[![license](https://img.shields.io/github/license/auctumnus/xsampa?style=flat-square)](https://github.com/auctumnus/xsampa/blob/main/LICENSE)

Converts [X-SAMPA](https://en.wikipedia.org/wiki/X-SAMPA) to 
[IPA](https://en.wikipedia.org/wiki/International_Phonetic_Alphabet). 
Includes types and hopefully fully correct conversion.

## Installation

```sh
$ yarn add @auctumnus/xsampa
or
$ npm install @auctumnus/xsampa
```

## Usage

```typescript
import { ipa } from '@auctumnus/xsampa'
ipa('aI_^ pi: eI_^') // = 'aɪ̯ piː eɪ̯'
```

## License
MIT. Includes data from 
[conniebot](https://github.com/xsduan/conniebot/blob/44d917dbbc5a8ab56ea6e87499b00e8a7ee9adb2/x2i-data/x2i.yaml#L1).

