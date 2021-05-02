/**
 * A nested object in which all leaf values are strings.
 */
export type DeepDictionary = {
  [name: string]: string | DeepDictionary;
};

/**
 * Flatten (un-nest) an object. Nested keys are replaced
 * by paths: `{ "a": { "b": "c" } }` becomes `{ "a.b": "c" }`.
 * @param dictionary The nested object to flatten
 * @param prefix A prefix used for recursion
 * @returns A flat object mapping strings to strings
 */
export const flatten = (
  dictionary: DeepDictionary,
  prefix = ''
): Record<string, string> =>
  Object.keys(dictionary).reduce((flat, name) => {
    const message = dictionary[name];
    if (typeof message === 'string') {
      flat[prefix + name] = message;
    } else {
      // assign is the fastest way to process recursion results
      Object.assign(flat, flatten(message, prefix + name + '.'));
    }
    return flat;
  }, Object.create(null));
