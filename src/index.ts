import replacers from './data/xsampa2ipa.json'

const replacer = (a: string, pair: string[]) => {
  const [xs, ipa] = pair
  return a.replaceAll(xs, ipa)
}

export const ipa = (xsampa: string) => replacers.reduce(replacer, xsampa)

