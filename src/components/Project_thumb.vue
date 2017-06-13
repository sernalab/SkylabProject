<template>
  <div class="allProjects">
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 masonry-item">
      <div class="box-masonry">
        <router-link to="/profile" title="" class="box-masonry-image with-hover-overlay with-hover-icon"><img src="" alt="" class="img-responsive"></router-link>
        <div class="box-masonry-text">
          <h4> <router-link to="/profile">{{ project.project_name }}</router-link></h4>
          <div class="box-masonry-desription">
              <p> {{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'allProjects',
  data () {
    return {
    }
  },
  props: [
  'user'
  ]
}
</script>
