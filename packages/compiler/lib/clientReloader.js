module.exports = function clientReloader (port) {
  return `
    (function (global) {
      try {
        var ls = global.localStorage
        var scrollPos = ls.getItem('dwadwadwa-scroll')

        if (scrollPos) global.scrollTo(0, scrollPos)

        const socketio = document.createElement('script')
        socketio.src = 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.slim.js'
        socketio.onload = function init () {
          var disconnected = false
          var socket = io('https://localhost:${port}', {
            reconnectionAttempts: 1
          })
          socket.on('connect', () => console.log('dwadwadwa connected'))
          socket.on('refresh', () => {
            ls.setItem('dwadwadwa-scroll', global.scrollY)
            global.location.reload()
          })
          socket.on('disconnect', () => {
            disconnected = true
          })
          socket.on('reconnect_failed', e => {
            if (disconnected) return
            console.group("dwadwadwa - %cconnection to server at ${port} failed", "color: red")
            console.info("try visiting https://localhost:${port} and creating a security exception")
            console.log("for more info see https://github.com/the-couch/dwadwadwa#live-reloading--https")
            console.groupEnd()
          })
        }
        document.head.appendChild(socketio)
      } catch (e) {}
    })(this);
  `
}
