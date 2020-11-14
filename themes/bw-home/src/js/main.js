import lazyLoader from './components/lazy-loader'
import scrollAnimator from './components/scroll-animator'
import './components/skip-links'

import '../css/main.css'

// Try to get hover effects working for touch devices
document.addEventListener('touchstart', function() {}, false)

lazyLoader()
scrollAnimator()
