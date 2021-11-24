type Dictionary = { [Key: string]: unknown };

export function isObject(item: unknown) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

export default function mergeDict(target: Dictionary, source: Dictionary) {
  const output = Object.assign({}, target);

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = mergeDict(
            target[key] as Dictionary,
            source[key] as Dictionary,
          );
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
}
