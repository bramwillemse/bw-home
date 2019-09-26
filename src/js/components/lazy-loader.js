import LazyLoad from 'vanilla-lazyload'

const lazyLoader = () => {
  const options = {
    elements_selector: '[loading="lazy"]',
    class_loading: 'is-loading',
    class_loaded: 'is-loaded',
    class_error: 'has-error',
    user_native: true
  }
  const lazyLoadInstance = new LazyLoad(options)

  if (lazyLoadInstance) {
    lazyLoadInstance.update()
  }
};

export default lazyLoader;