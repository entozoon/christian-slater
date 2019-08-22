import { component } from 'picoapp'

export default component((node, ctx) => {
  console.log('dwadwadwa-welcome mounted')

  return node => {
    console.log('dwadwadwa-welcome unmounted')
  }
})
