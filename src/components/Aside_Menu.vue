<template>
	<div class="asideMenu">
    	<div id="sidebar" class="col-xs-6 col-sm-4 col-md-3 sidebar-offcanvas">
            <div class="sidebar-content">
                <h1 class="sidebar-heading"> <a href="index.html">{{ $route.name }}</a></h1>
                <p class="sidebar-p">All the projects made at the end of the course by students. </p>
                <p class="sidebar-p">Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. </p>
                <ul class="sidebar-menu">
                    <li><router-link to="/projects">Projects</router-link></li>
                    <li><router-link to="/applicants">Applicants</router-link></li>
                    <li><a href="#/more">More</a></li>
                </ul>
                <p class="social"><a href="#" data-animate-hover="pulse" class="external facebook"><i class="fa fa-facebook"></i></a><a href="#" data-animate-hover="pulse" class="external gplus"><i class="fa fa-google-plus"></i></a><a href="#" data-animate-hover="pulse" class="external twitter"><i class="fa fa-twitter"></i></a><a href="#" title="" class="external instagram"><i class="fa fa-instagram"></i></a><a href="#" data-animate-hover="pulse" class="email"><i class="fa fa-envelope"></i></a></p>
                <div class="copyright">
                    <p class="credit">&copy;2017 Carles Serna | <a href="https://www.skylabcoders.com/" class="external">Skylabcoders Academy</a></p>
                </div>
            </div>
        </div>
  	</div>
</template>


<script>
export default {
  name: 'asideMenu',
  data () {
    return {
    }
  }
}
</script>
