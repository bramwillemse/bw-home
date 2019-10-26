const scrollAnimator = () => {
  // Animate in view images
  if ('IntersectionObserver' in window) {
    const elements = [...document.querySelectorAll('[data-animation]')]
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }

    const callback = function(entries) {
      entries.forEach(entry => {
        let elementAnimated = false

        if(entry.isIntersecting && !elementAnimated) {
          entry.target.classList.add('is-animated')
          elementAnimated = true
        }

      });
    };

    const observer = new IntersectionObserver(callback, options)

    elements.forEach(element => observer.observe(element))
  }
}

export default scrollAnimator;