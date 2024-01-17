/**
 * Sets a value in the local storage with the specified key.
 *
 * @param {string} key - The key used to identify the value in the local storage.
 * @param {object | string | number} value - The value to be stored in the local storage.
 */
export function set(key: string, value: unknown) {
  localStorage.setItem(
    key,
    typeof value === 'string' ? value : JSON.stringify(value),
  );
}

/**
 * Retrieves a value from the local storage based on the specified key.
 *
 * @param {string} key - The key used to retrieve the value from the local storage.
 * @return {T | string | null} - The retrieved value from the local storage, or null if the key does not exist.
 */
export function get<T>(key: string): T | string | null {
  const data = localStorage.getItem(key);

  try {
    return JSON.parse(data || 'null') as T | string | null;
  } catch (error) {
    return data as string;
  }
}

/**
 * Retrieves the value associated with the specified key from the local storage.
 *
 * @param {string} key - The key to retrieve the value for.
 */
export function remove(key: string): void {
  localStorage.removeItem(key);
}

export const store = { set, get, remove };
