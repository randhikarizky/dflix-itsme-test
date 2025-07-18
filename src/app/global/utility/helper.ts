import { enqueueSnackbar } from "notistack";

export function isEqual(a: any, b: any): boolean {
  if (a === null || a === undefined || b === null || b === undefined) {
    return a === b;
  }

  if (typeof a !== typeof b) {
    return false;
  }

  if (
    typeof a === "string" ||
    typeof a === "number" ||
    typeof a === "boolean"
  ) {
    return a === b;
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }

    return a.every((item, index) => isEqual(item, b[index]));
  }

  if (typeof a === "object" && typeof b === "object") {
    const keysA = Object.keys(a!);
    const keysB = Object.keys(b!);

    if (keysA.length !== keysB.length) {
      return false;
    }

    return keysA.every((key) => isEqual(a[key], b[key]));
  }

  return false;
}

export function toSentenceCase(str: string) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (match) => match.toUpperCase());
}

export function toCamelCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[_-\s]+(.)?/g, (_, chr) => (chr ? chr.toUpperCase() : ""));
}

export const copy = (name: string, value: string) => {
  navigator.clipboard.writeText(value);

  return enqueueSnackbar(
    name ? `${name} berhasil disalin!` : "Berhasil disalin!",
    {
      variant: "success",
    },
  );
};

export const objectKeyRemover = (obj: any = {}, removeKey: any = []) => {
  //how to use? 1. insert your object to obj. then define what key(s) to remove in removeKey array
  var target: any = {};
  for (var i in obj) {
    if (removeKey.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
};

export const objectKeyConverter = (obj: any = {}) => {
  return Object.entries(obj).reduce(
    (acc, [key, value]) => {
      acc[toCamelCase(key)] = value;
      return acc;
    },
    {} as Record<string, any>,
  );
};
