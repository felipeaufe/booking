/**
 * Subtracts a specified number of days from a given date and returns the resulting date.
 *
 * @param {Date} date - The date to subtract from.
 * @param {number} days - The number of days to subtract.
 * @return {Date} The resulting date after subtracting the specified number of days.
 */
export function subDays(date: Date, days: number){
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() - days);

  return newDate
}

/**
 * Adds a specified number of days to a given date and returns the resulting date.
 *
 * @param {Date} date - The date to which days will be added.
 * @param {number} days - The number of days to add to the date.
 * @return {Date} The resulting date after adding the specified number of days.
 */
export function addDays(date: Date, days: number){
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  
  return newDate
}

/**
 * Formats a given date into a string representation.
 *
 * @param {Date} date - The date object to be formatted.
 * @return {string} The formatted date string in the format "dd/mm/yyyy".
 */
export function formatDate(date: Date) {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}