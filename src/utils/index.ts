export const keysOf = <T extends string>(
  obj: { [key in T]: unknown }
): ReadonlyArray<T> => {
  const keys: Array<T> = [];

  for (const i in obj) {
    keys.push(i);
  }

  return keys;
};
