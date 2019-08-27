import { component } from 'picoapp'

export default component((node, ctx) => {
  console.log('christian-slater-welcome mounted')

  return node => {
    console.log('christian-slater-welcome unmounted')
  }
})
