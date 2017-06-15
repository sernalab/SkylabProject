<template>
  <div class="home">

    <!-- Start website -->
    <div id="fullpage">
        <!-- First section -->
        <div class="section">
            <h1><span>SKYLAB</span>PROJECTS</h1>
            <p>A RECRUITMENT SITE OF DEVELOPERS</p>
            <div class="main-buttons">
                <!-- <i class="fa-arrow-right"></i><router-link to="/projects">Projects</router-link> -->
                <i class="fa-arrow-right"></i><router-link to="/applicants">Applicants</router-link>
                <i class="fa-arrow-right"></i><router-link to="/SignUp">Alumni sign Up</router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>

<style src="../../static/css/main-app/examples.css" scoped></style>

<style src="../../static/css/main-app/main.css" scoped></style>

