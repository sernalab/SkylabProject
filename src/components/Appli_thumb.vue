<template>
  <div class="thumbnails">
    <ul class="item">
      <li class="span">
        <div class="thumbnail">
          <div class="header">
              <a :href="`#/profile/${user._id}`"><img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAs3AAAAJDEyZGIzODE3LWEwNWQtNDgyYS1hYmQ1LTM5MjM5NGUwNzY2Mw.jpg" alt=""></a>
              <h1 class="students-header"><a href="`#/profile/${user._id}`">{{ user.user.name }}</a></h1>
              <div class="tech">
                  <ul class="item bg-item">
                      <li class="tech-items">Bootstrap</li>
                      <li class="tech-items">CSS3</li>
                      <li class="tech-items">Vue</li>
                  </ul>
              </div>
              <div class="description">
                  <p class="description-text"> {{ user.user.description }}</p>
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
