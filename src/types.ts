/**
 * Represents a mutable draft object that can be used to modify an immutable state.
 *
 * @template T - The type of the original immutable state.
 *
 * @typedef {Object} WritableDraft
 * @property {T} - The original immutable state object.
 *
 * @example
 * // Create a readonly property
 * interface User {
 *   readonly name: string;
 * }
 * 
 * Updating a property in the draft object
 * function updateUser(user: WritableDraft<User>, name: string) {
 *   user.name = name;
 * }
 */
export type WritableDraft<T> = {
  -readonly [P in keyof T]: WritableDraft<T[P]>;
};
