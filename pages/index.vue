<template>
	<div>
		<div class="row">
      <h1 class="my-4 text-lg-left">Room ( Logged in <span style="color: #ff0000">{{ me.username }}</span> )</h1>
      <div class="col-12">
        <table class="table table-hover">
          <thead>
          <tr>
            <th scope="col">제목</th>
          </tr>
          </thead>
          <tbody id="roomList">
          </tbody>
        </table>
      </div>
      <div class="col-12">
        <button type="button" class="btn btn-primary btn-block" @click="requestRoom">Craete Room</button>
      </div>
		</div>
	</div>
</template>

<script>
  import socket from '~/plugins/socket.io'
  export default {
    middleware: 'auth',
    beforeMount() {
      this.requestRoom()
    },
    computed: {
      me () {
        return this.$auth.user
      }
    },
    methods: {
      requestRoom() {
        socket.emit('requestRoomList')

        var roomName = prompt('Please input room name to create')
        console.log('requestRoomList called')
      }
    }
  }
</script>
