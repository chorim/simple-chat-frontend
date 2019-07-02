<template>
	<div>
		<div class="row">
      <h1 class="my-4 text-lg-left">Room ( Logged in <span style="color: #ff0000">{{ myInfo.username }}</span> )</h1>
      <rooms-component :rooms="rooms"/>
      <div class="col-12">
        <button type="button" class="btn btn-primary btn-block" @click="createRoom">Craete Room</button>
      </div>
		</div>
	</div>
</template>

<script>
  import socket from '~/plugins/socket.io'
  import RoomsComponent from '~/components/RoomsComponent.vue'
  import { mapGetters } from 'vuex'
  export default {
    middleware: 'auth',
    data() {
      return {
        rooms: []
      }
    },
    components: { RoomsComponent },
    beforeMount() {
      this.requestRoom()
	    console.log(this.$socket)
      this.$socket.on('newRoom', (message) => {

      })
    },
    computed: {
      ...mapGetters(['myInfo', 'getToken', 'getSocket'])
    },
    methods: {
      requestRoom() {
        this.$socket.emit('requestRoomList')
        console.log('requestRoomList called')
      },
      createRoom() {
        var roomName = prompt('Please input room name to create')
        this.$socket.emit('createRoom', {name: roomName})
        console.log('createRoom called', {name: roomName})
      }
    }
  }
</script>
