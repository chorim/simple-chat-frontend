<template>
  <div>
    <div v-for="(item, index) in messages" :key="index">
      <div class="row msg_container base_sent" v-if="item.username === myInfo.username">
        <div class="col-md-10 col-xs-10">
          <div class="messages msg_sent">
            <p>{{ item.content }}</p>
            <time>Me • {{ new Date(item.datetime).toISOString().slice(0, 10) + " " + new Date(item.datetime).toLocaleTimeString() }}</time>
          </div>
        </div>
      </div>
      <div class="row msg_container base_receive" v-else>
        <div class="col-md-10 col-xs-10">
          <div class="messages msg_receive">
            <p>{{ item.content }}</p>
            <time>{{ item.username }} • {{ new Date(item.datetime).toISOString().slice(0, 10) + " " + new Date(item.datetime).toLocaleTimeString() }}</time>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    props: ["messages"],
    computed: {
      ...mapGetters(['myInfo'])
    }
  }
</script>

<style scoped>

</style>
