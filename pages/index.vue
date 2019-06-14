<template>
	<div>
		<div class="row">
      <h1 class="my-4 text-lg-left">Room ( Logged in <span style="color: #ff0000">{{ me.username }}</span> )</h1>
		</div>
	</div>
</template>

<script>
  import socket from '~/plugins/socket.io'
  export default {
    middleware: 'auth',
    beforeMount() {
      socket.emit('requestRoomList')
      console.log('requestRoomList called')
    },
    computed: {
      me () {
        return this.$auth.user
      }
    }
  }
</script>
