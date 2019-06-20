import io from 'socket.io-client'

export default (context, inject) => {
  const cookie = context.app.$cookies.get("auth._token.local")
  const token = cookie ? cookie.slice(7) : ""
  inject('socket', io(process.env.SOCKET_HOST_URL, {'query': 'token=' + token}))
}
