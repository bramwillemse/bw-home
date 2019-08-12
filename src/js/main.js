// get the element to animate
const elements = [...document.querySelectorAll('.a-figure')]

// listen for scroll event and call animate function
elements.forEach(element => element.addEventListener('scroll', animate(element)))

// animate element when it is in view
function animate(element) {
  const el = element
  let elementEnabled = false

  console.log(inView(el), elementEnabled)

  // is element in view?
  if (inView(el) && !elementEnabled) {
      // element is in view, add class to element
      element.classList.add('a-figure--is-animated')
      elementEnabled = true
  }
}

// check if element is in view
function inView(element) {
  const elementHeight = element.clientHeight

  // get window height
  var windowHeight = window.innerHeight
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset

  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight

  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true
  }
  return false
}