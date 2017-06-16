<template>
  <div class="thumbnails">
    <ul class="item">
      <li class="span">
        <div class="thumbnail">
          <div class="header">
              <a :href="`#/profile/${user._id}`"><img :src="user.img"></a>
              <h1 class="students-header"><a :href="`#/profile/${user._id}`">{{ user.user.name }}</a></h1>
              
              <div class="space"></div>
              
              <div class="description-text">
                  <p>{{ user.project_name }}</p>
              </div>
              <div class="github-repo">
                  <i class="fa fa-github-alt" aria-hidden="true"></i><a :href="user.github_repo" target="_blank"> Github Repository</a>
              </div>
              <div class="heroku">
                  <i class="fa fa-globe" aria-hidden="true"></i><a :href="user.heroku_url" target="_blank"> Heroku </a>
              </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'thumbnails',
  data () {
    return {
    }
  },
  props: [
  'user'
  ]
}
</script>
