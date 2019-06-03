<template>
	<div>
		<div class="row">
			<h1 class="my-4 text-center text-lg-left">Login</h1>
			<b-form @submit.prevent="onSubmit" class="form-horizontal col-12">
				<div class="form-group">
          <div>
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
          <div class="mt-2">
            <b-col sm="12">
              <b-form-input
                v-model="form.password"
                name="password"
                id="password"
                class="form-control input-lg"
                placeholder="Password"
                required></b-form-input>
            </b-col>
          </div>
				</div>

				<div class="form-group">
          <div>
            <b-col sm="12">
              <b-button variant="primary" class="btn-block" id="loginBtn" type="submit">Login</b-button>
            </b-col>
          </div>
					<div class="mt-2">
            <b-col sm="12">
              <b-button variant="primary" @click="goRegisterForm" class="btn-block" id="registerBtn" type="button">Register</b-button>
            </b-col>
          </div>
				</div>
			</b-form>
		</div>
	</div>
</template>

<script>
import socket from '~/plugins/socket.io'
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit() {
      try {
        const auth = await this.$axios.$post('/auth/login', {
          username: this.form.username,
          password: this.form.password
        })
        socket.emit('login', {username: this.form.username})
      } catch (e) {
        if (e.response.status === 401) {
          alert('Login failed. Please confirm your username or password')
        } else if (e.response.status === 403) {
          alert('Forbidden request')
        }
      }
    },
    goRegisterForm() {
      this.$router.replace('/register')
    }
  }
}
</script>


