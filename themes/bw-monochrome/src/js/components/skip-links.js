const DATA_SKIP_LINKS = 'data-skip-links'
const DATA_SKIP_LINKS_CLOSE = 'data-skip-links-close'

/**
 * SKIP LINKS
 * ----------
 * Progressively enhanced accessible skip links. Add function to close panel
 * with ESC key and close button.
 */
class SkipLinks {
  constructor(element) {
    this.element = element
    this.closeButton = this.element.querySelector(`[${DATA_SKIP_LINKS_CLOSE}]`)
    this.hasFocus = false

    this.setupEventHandlers()
  }

  setupEventHandlers() {
    this.element.addEventListener('focus', event => this.handleFocus(event), true)
    this.element.addEventListener('blur', event => this.handleBlur(event), true)
    this.element.addEventListener('keydown', event => this.handleKeydown(event), true)
  }

  handleFocus(event) {
    this.hasFocus = event.target ? event.target.dataset.hasOwnProperty('skipLinksElement') : false
  }

  handleBlur(event) {
    this.hasFocus = event.relatedTarget ? event.relatedTarget.dataset.hasOwnProperty('skipLinksElement') : false
  }

  handleKeydown(event) {
    if(event.key === "Escape" && this.hasFocus) this.close()
  }

  close() {
    this.element.nextElementSibling.querySelector('a').focus()
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector(`[${DATA_SKIP_LINKS}]`)
  new SkipLinks(element)
})