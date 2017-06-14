<template>
	<div id="all">
        <div class="container-fluid">
            <div class="row row-offcanvas row-offcanvas-left">
  				<asideMenu></asideMenu>
              <div class="col-xs-12 col-sm-8 col-md-9 scroll">
                
                <div class="thumbnails-box">
  				        <thumbnails v-for="user in users" :user="user"></thumbnails>
                </div>
              </div>
  			</div>
		</div>
  	</div>
</template>

<script>
import thumbnails from '../components/Appli_thumb'
import asideMenu from '../components/Aside_Menu'
import { mapState } from 'Vuex'
import api from '../service/api'

export default {
  name: 'applicants',
  data () {
    return {
      users: []
    }
  },
  components: {
    thumbnails,
    asideMenu
  },
  mounted() {
    api.getUsers()
        .then(response => {
          this.users = response.data
        })
  }
}
</script>
