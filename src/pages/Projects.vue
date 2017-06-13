<template>
	<div class="projects">
    <div id="all">
      <div class="container-fluid">
          <div class="row row-offcanvas row-offcanvas-left">
            <asideMenu></asideMenu>
             <div class="col-xs-12 col-sm-8 col-md-9 content-column">
                <div class="small-navbar visible-xs">
                    <button type="button" data-toggle="offcanvas" class="btn btn-ghost pull-left"> <i class="fa fa-align-left"> </i>Menu</button>
                    <h1 class="small-navbar-heading"> <a href="index.html">Creative </a></h1>
                </div>
                <div class="grid">
                  <div class="row">
                    <allProjects v-for="project in projects" :project="project"></allProjects>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import asideMenu from '../components/Aside_Menu'
import allProjects from '../components/Project_thumb'
import { mapState } from 'Vuex'
import api from '../service/api'

export default {
  name: 'projects',
  data () {
    return {
    }
  },
  computed:{
    ...mapState([
      'projects'
      ])
  },
  components: {
    asideMenu,
    allProjects
  },
  mounted() {
    api.getUser(this.$route.params.id)
        .then(response => {
          this.users = response.data
        })
  }
}
</script>
