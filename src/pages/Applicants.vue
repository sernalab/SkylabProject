<template>
	<div id="all">
        <div class="container-fluid">
            <div class="row row-offcanvas row-offcanvas-left">
  				<asideMenu></asideMenu>
              <div class="col-xs-12 col-sm-8 col-md-9 scroll">
                <div class="thumbnails-box">
  				        <thumbnails></thumbnails>
                  <thumbnails></thumbnails>
                  <thumbnails></thumbnails>
                  <thumbnails></thumbnails>
                  <thumbnails></thumbnails>
                </div>
              </div>
  			</div>
		</div>
  	</div>
</template>

<script>
import thumbnails from '../components/Appli_thumb'
import asideMenu from '../components/Aside_Menu'

export default {
  name: 'applicants',
  data () {
    return {
    }
  },
  components: {
    thumbnails,
    asideMenu
  },
  props: [
    'users'
  ]
}
</script>
