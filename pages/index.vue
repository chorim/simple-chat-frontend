<template>
	<div>
		<div class="row">
			<h1 class="my-4 text-center text-lg-left">Login</h1>
			<b-form @submit.prevent="onSubmit" class="form-horizontal col-12">
				<div class="form-group">
					<b-col sm="12">
						<b-form-input
							v-model="form.username"
							name="username"
							id="username"
							class="form-control input-lg"
							placeholder="Username"
							required></b-form-input>
					</b-col>
				</div>

				<div class="form-group">
					<b-col sm="12">
						<b-button variant="primary" class="btn-block" id="loginBtn" type="submit">Login</b-button>
					</b-col>
				</div>
			</b-form>
		</div>
	</div>
</template>

<script>
import socket from '~/plugins/socket.io'

export default {
  data() {
    return {
      form: {
        username: ''
      }
    }
  },
  methods: {
    onSubmit() {

	    socket.emit('login', {username: this.form.username})
	    this.$router.replace('/list')

    }
  }
}
</script>


