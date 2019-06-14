<template>
	<div>
		<!-- Navigation -->
		<b-nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<div class="container">
				<b-navbar-brand class="navbar-brand" href="/">YUKIYUKI CHATROOM</b-navbar-brand>
				<b-navbar-toggle class="navbar-toggler" type="button" data-toggle="collapse" target="navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</b-navbar-toggle>
				<b-collapse class="collapse navbar-collapse" id="navbarResponsive">
					<b-navbar-nav class="navbar-nav ml-auto">
            <b-nav-item class="active" href="/">메인</b-nav-item>
            <b-nav-item @click="logout" v-if="isAuthenticated">로그아웃</b-nav-item>
					</b-navbar-nav>
				</b-collapse>
			</div>
		</b-nav>
	</div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['isAuthenticated', 'myInfo'])
    },
    methods: {
      async logout() {
        await this.$auth.logout()
        this.$router.replace({ path: '/login' })
      }
    },
  }
</script>
