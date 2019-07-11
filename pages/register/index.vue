<template>
  <div>
    <div class="row">
      <h1 class="my-4 text-center text-lg-left">Register</h1>
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
              <b-button variant="primary" class="btn-block" id="loginBtn" type="submit">Register</b-button>
            </b-col>
          </div>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
  export default {
    middleware: 'isGuest',
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
          const auth = await this.$axios.$post('/auth/register', {
            username: this.form.username,
            password: this.form.password
          })
          if (auth.user) {
            alert("Register success")

	          await this.$auth.loginWith('local', {
	            data: {
	              username: this.form.username,
		            password: this.form.password
	            }
	          })
            this.$router.replace('/')
          }

        } catch (e) {
          alert("Register failed\nRejected reason : " + e.response.data.messages)
        }

      },
    }
  }
</script>

<style scoped>

</style>
