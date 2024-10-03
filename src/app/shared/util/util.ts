export class Util {
  static getStatus(value): number {
    if (Array.isArray(value)) {
      return Util.getArrayStatus(value);
    }

    return value != null ? 1 : -1;
  }

  static getArrayStatus(array): number {
    const numberOfNulls = array.filter(v => v == null).length;

    return numberOfNulls === 0 ? 1 : numberOfNulls === array.length ? -1 : 0;
  }
}
