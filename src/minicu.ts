import { DeepDictionary, flatten } from './utils';

/**
 * The place where dictionaries are stored.
 *
 * Plain objects should be more faster than JS maps to retrieve data.
 * Creating an object from the null prototype appears to be safer than `{}`.
 */
const store: Record<string, Record<string, string>> = Object.create(null);

/**
 * Register a dictionary of messages for the given language.
 * If the dictionary is nested, it will be flattened, so that
 * `{ "a": { "b": "c" } }` becomes `{ "a.b": "c" }`.
 * @param language A {@link https://www.ietf.org/rfc/bcp/bcp47.txt BCP47}-compliant language code
 * @param dictionary The dictionary of messages to register
 */
export const register = (
  language: string,
  dictionary: DeepDictionary
): void => {
  store[language] = flatten(dictionary);
};

/**
 * Read a message from the dictionary.
 * @param language A {@link https://www.ietf.org/rfc/bcp/bcp47.txt BCP47}-compliant language code
 * @param name The message name
 * @returns The message, or undefined if it doesn't exist for the given language
 */
export const _ = (name: string, language: string): string | undefined =>
  store[language]?.[name];
