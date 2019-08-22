import sliced from 'sliced'

window.christian-slater = Object.assign(window.christian-slater || {}, {
  qs (q, ctx) {
    return (ctx || document).querySelector(q)
  },
  qsa (q, ctx) {
    return sliced((ctx || document).querySelectorAll(q))
  },
  gebtn (q, ctx) {
    return sliced((ctx || document).getElementsByTagName(q))
  },
  gebi (q) {
    return document.getElementById(q)
  }
})
