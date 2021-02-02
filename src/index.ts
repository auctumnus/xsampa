import replacers from './data/xsampa2ipa.json'

// from @developit/replaceall
// would just import it, but it refuses to work?
// @ts-ignore
const replaceAll = ''.replaceAll
  ? (str: string, find: string, rep: string) => str.replaceAll(find, rep)
  : (str: string, find: string, rep: string) => str.split(find).join(rep)

const replacer = (a: string, pair: string[]) => {
  const [xs, ipa] = pair
  return replaceAll(a, xs, ipa)
}

export const ipa = (xsampa: string) => replacers.reduce(replacer, xsampa)

