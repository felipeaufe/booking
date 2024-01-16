/**
 * Scrolls the document body to the top using smooth scrolling.
 *
 */
export function scrollToTop () {
  document.body.scrollIntoView({ behavior: "smooth" })
}