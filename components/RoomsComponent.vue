<template>
  <div class="col-12">
    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">제목</th>
      </tr>
      </thead>
      <tbody id="roomList">
      <tr v-for="(item, index) in rooms" :key="index">
	      <td @click="joinRoom(item.title)">{{ item.title }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: ['rooms'],
    methods: {
      joinRoom(id) {
        if (confirm("Join Room? " + id)) {
          this.$router.push({ path: `/chat/${id}` })
        }
      }
    }
  }
</script>
