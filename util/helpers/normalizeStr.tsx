export function strNormalize(str: string) {
  str = str.replace(/[.*+\-?^${}()_|[\]\\]/gi, " ");
  return str;
}
