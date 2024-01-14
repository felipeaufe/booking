export type WritableDraft<T> = {
  -readonly [P in keyof T]: WritableDraft<T[P]>;
};