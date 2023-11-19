const ACCESS_TOKEN_KEY = 'access_token';

export const setAccessToken = (token: string) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);

export const removeAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};

export const download = (file: File) => {
  const link = document.createElement('a');
  const url = URL.createObjectURL(file);

  link.href = url;
  link.download = file.name;
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

export type Swap = (record: Record<string, string | number>) => Record<string, string>;

export const swapKeysValues: Swap = (record) =>
  Object.fromEntries(Object.entries(record).map(([key, value]) => [value, key]));

export const calculateTotalPages = (total: number, pageSize: number) => Math.ceil(total / pageSize);

type Result<T> = {
  [K in keyof T]: T[K];
};

export const checkKeysNotNull = <T extends object, K extends keyof T>(
  obj: T,
  keysToCheck: K[],
): Result<T> | Error => {
  const result: Partial<Result<T>> = {};

  try {
    keysToCheck.forEach((key) => {
      if (obj[key] === null || obj[key] === undefined) {
        throw new Error(`Key '${String(key)}' is null or undefined.`);
      }
      result[key] = obj[key];
    });

    return result as Result<T>;
  } catch (error) {
    return error as Error;
  }
};

export const downloadFromURL = async (url: string, filename: string): Promise<void> => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const objectURL = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = objectURL;
    link.download = filename;
    link.click();

    URL.revokeObjectURL(objectURL);
  } catch (error) {
    console.error('Error downloading file:', error);
  }
};
type ReplaceNull<T> = {
  [K in keyof T]: T[K] extends null ? string : T[K];
};

export const replaceNullValues = <T>(obj: T, replacementValue: string): ReplaceNull<T> => {
  const result = {} as ReplaceNull<T>;

  Object.keys(obj as object).forEach((key) => {
    const value = obj[key as keyof T];

    if (value === null || value === undefined) {
      result[key as keyof T] = replacementValue as T[keyof T] extends null ? string : T[keyof T];
    } else if (typeof value === 'object' && !Array.isArray(value)) {
      result[key as keyof T] = replaceNullValues(value, replacementValue) as T[keyof T] extends null
        ? string
        : T[keyof T];
    } else {
      result[key as keyof T] = value as T[keyof T] extends null ? string : T[keyof T];
    }
  });

  return result;
};

export const removeCallingCodeAndFormat = (phoneNumber: string, countryCode: string): string => {
  // Remove all non-digit characters from the phone number
  let withoutCallingCode = phoneNumber.replace(countryCode, '');
  withoutCallingCode = phoneNumber.replace(/\D/g, '');
  // Check if the sanitized number starts with a valid country code
  if (withoutCallingCode.startsWith('+')) {
    // Remove the country code
    return withoutCallingCode.replace(countryCode, '');
  }
  return withoutCallingCode;
};

export function generateUniqueId(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let uniqueId = '';

  for (let i = 0; i < length; i += 1) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    uniqueId += characters.charAt(randomIndex);
  }

  return uniqueId;
}

export const copyTextToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};
