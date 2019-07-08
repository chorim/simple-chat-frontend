<template>
  <div>
    <div class="row msg_container base_sent" v-for="(item, index) in sentMessage" :key="index">
      <div class="col-md-10 col-xs-10">
        <div class="messages msg_sent">
          <p>{{ item.content }}</p>
          <time>Me • {{ item.datetime.toISOString().slice(0, 10) + " " + item.datetime.toLocaleTimeString() }}</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["sentMessage"]
  }
</script>

<style scoped>

</style>
