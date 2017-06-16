<template>
    <div class="profile">
        <div id="all">
            <div class="container-fluid">
                <div class="row row-offcanvas row-offcanvas-left">
                    <asideMenu></asideMenu>
                    <div class="col-xs-12 col-sm-8 col-md-9 content-column">
                        <div class="grid">
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 masonry-item">
                                    <div class="box-masonry header-profile">
                                        <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAr8AAAAJGJlYzQyM2E1LTIzOTgtNDE1My1hNjE2LTBiNTIyYjVmODUzZQ.jpg" alt="">
                                        <div class="box-masonry-text">
                                            <h4><router-link to="#">x</router-link></h4>
                                            <div class="working">
                                                <i class="fa fa-briefcase" aria-hidden="true"></i>
                                                <p>Google Inc.</p>
                                            </div>
                                            <div class="location">
                                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                <p>Barcelona</p>
                                            </div>
                                            <div class="linkedin">
                                                <i class="fa fa-linkedin" aria-hidden="true"></i>
                                                <div class="linkedin-link">
                                                    <p>https://www.linkedin.com/in/jaume-regas-486aa5129/</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="box-masonry header-profile">
                                        <div class="box-masonry-text">
                                            <h4><a href="detail.html">Looking for</a></h4>
                                            <div class="description">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aut nulla eligendi hic, sit dolor. Nesciunt nam, assumenda quibusdam eos necessitatibus explicabo repellendus, facere laborum nostrum perferendis, at itaque sapiente!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-9 col-md-8 masonry-item">
                                    <div id="main-slider">
                                        <div class="item"><img alt="" src="" class="img-responsive"></div>
                                        <div class="item"><img alt="" src="" class="img-responsive"></div>
                                        <div class="item"><img alt="" src="" class="img-responsive"></div>
                                    </div>
                                    <div class="box-masonry header-profile">
                                        <div class="box-masonry-text">
                                            <h4><a href="detail.html">Repositories</a></h4>
                                            <div class="repo">
                                                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                                <p>First</p>
                                            </div>
                                            <div class="repo">
                                                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                                <p>Second</p>
                                            </div>
                                            <div class="repo">
                                                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                                <p>Thrid</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1>README of PROJECT</h1>
                        <!-- /#main-slider-->
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <ol>
                            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                            <li>Aliquam tincidunt mauris eu risus.</li>
                        </ol>
                        <blockquote>
                            <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                        </blockquote>
                        <h2>Header Level 2</h2>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                            <li>Aliquam tincidunt mauris eu risus.</li>
                        </ul>
                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>



<script>
import asideMenu from '../components/Aside_Menu'
import api from '../service/api'
import { mapState } from 'Vuex'

export default {
    name: 'profile',
    data () {
        return {
        }
    },
    components: {
        asideMenu
    },
    mounted() {
    api.getUsers()
        .then(response => {
          this.users = response.data
        })
    },
    props: [
    'user'
    ]
}
</script>
