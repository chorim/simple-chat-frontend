<template>
  <div>
    <h1 class="my-4 text-center text-lg-left">Chat</h1>
    <div class="row">
      <div class="col-12">
        <div class="chatbody">
          <div class="panel panel-primary">
            <div class="panel-body msg_container_base">
              <BaseMessageSentComponent :sentMessage="sentMessages"/>
              <BaseMessageReceiveComponent :receiveMessage="receiveMessages"/>
            </div>
            <div class="panel-footer">
              <div class="input-group">
                <input id="btn-input" v-model="messageText" @keyup.enter="sendMessage" type="text" class="form-control input-sm chat_input" placeholder="Write your message here..."/>
                <span class="input-group-btn">
                  <button @click="sendMessage()" class="btn btn-primary btn-sm" id="btn-chat">
                    <font-awesome-icon :icon="['fas', 'paper-plane']" />
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BaseMessageReceiveComponent from '~/components/BaseMessageReceiveComponent'
  import BaseMessageSentComponent from '~/components/BaseMessageSentComponent'
  export default {
    middleware: 'auth',
    data() {
      return {
        messageText: null,
        sentMessages: [],
        receiveMessages: []
      }
    },
    components: { BaseMessageReceiveComponent, BaseMessageSentComponent },
    beforeMount() {
      this.$socket.emit('saved-message', {id: this.$nuxt._route.params.id})
      this.$socket.on('exit-room', () => { this.$router.go(-1) })
      this.$socket.on('receive-message', (message) => {
        console.log(message)
      })
    },
    methods: {
      sendMessage() {
        if (this.messageText !== null) {
          this.$socket.emit('sent-message', {
            roomId: this.$nuxt._route.params.id,
            content: this.messageText
          })
          this.sentMessages.push({
            content: this.messageText,
            datetime: new Date()
          })
          this.messageText = null
        }
      }
    }
  }
</script>

<style scoped>

/**
* simple chat css
* @ref https://bootsnipp.com/snippets/5MrA7
*/
.chatperson{
    display: block;
    border-bottom: 1px solid #eee;
    width: 100%;
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 15px;
    padding: 4px;
  }
.chatperson:hover{
  text-decoration: none;
  border-bottom: 1px solid orange;
}
.namechat {
  display: inline-block;
  vertical-align: middle;
}
.chatperson .chatimg img{
  width: 40px;
  height: 40px;
  background-image: url('http://i.imgur.com/JqEuJ6t.png');
}
.chatperson .pname{
  font-size: 18px;
  padding-left: 5px;
}
.chatperson .lastmsg{
  font-size: 12px;
  padding-left: 5px;
  color: #ccc;
}

.col-md-2, .col-md-10{
  padding:0;
}
.panel{
  margin-bottom: 0px;
}
.chat-window{
  bottom:0;
  position:fixed;
  float:right;
  margin-left:10px;
}
.chat-window > div > .panel{
  border-radius: 5px 5px 0 0;
}
.icon_minim{
  padding:2px 10px;
}
.msg_container_base{
  background: #e5e5e5;
  margin: 0;
  padding: 0 10px 10px;
  max-height:300px;
  overflow-x:hidden;
}
.top-bar {
  background: #666;
  color: white;
  padding: 10px;
  position: relative;
  overflow: hidden;
}
.msg_receive{
  padding-left:0;
  margin-left:0;
}
.msg_sent{
  padding-bottom:20px !important;
  margin-right:0;
}
.messages {
  background: white;
  padding: 10px;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  max-width:100%;
}
.messages > p {
  font-size: 13px;
  margin: 0 0 0.2rem 0;
}
.messages > time {
  font-size: 11px;
  color: #ccc;
}
.msg_container {
  padding: 10px;
  overflow: hidden;
  display: flex;
}
img {
  display: block;
  width: 100%;
}
.avatar {
  position: relative;
}
.base_receive > .avatar:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border: 5px solid #FFF;
  border-left-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
}

.base_sent {
  justify-content: flex-end;
  align-items: flex-end;
}
.base_sent > .avatar:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 0;
  border: 5px solid white;
  border-right-color: transparent;
  border-top-color: transparent;
  box-shadow: 1px 1px 2px rgba(0,0,0 , 0.2);
}

.msg_sent > time{
  float: right;
}



.msg_container_base::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  background-color: #F5F5F5;
}

.msg_container_base::-webkit-scrollbar
{
  width: 12px;
  background-color: #F5F5F5;
}

.msg_container_base::-webkit-scrollbar-thumb
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #555;
}

.btn-group.dropup{
  position:fixed;
  left:0;
  bottom:0;
}

</style>
