<template>
	<div>
		<div class="row">
      <h1 class="my-4 text-lg-left">Room ( Logged in <span style="color: #ff0000">{{ myInfo.username }}</span> )</h1>
      <div class="col-12">
        {{ getToken }}
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
        <button type="button" class="btn btn-primary btn-block" @click="createRoom">Craete Room</button>
      </div>
		</div>
	</div>
</template>

<script>
  import socket from '~/plugins/socket.io'
  import { mapGetters } from 'vuex'
  export default {
    middleware: 'auth',
    beforeMount() {
      this.requestRoom()
    },
    computed: {
      ...mapGetters(['myInfo', 'getToken'])
    },
    methods: {
      requestRoom() {
        socket.emit('requestRoomList')
        console.log('requestRoomList called')
      },
      createRoom() {
        var roomName = prompt('Please input room name to create')
        socket.emit('createRoom', {name: roomName})
        console.log('createRoom called', {name: roomName})
      }
    }
  }
</script>
