import lazyLoader from './components/lazy-loader'
import scrollAnimator from './components/scroll-animator'
import './components/skip-links'

document.addEventListener('touchstart', function() {}, false)

lazyLoader()
scrollAnimator()
