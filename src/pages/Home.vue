<template>
  <div class="home">
     <ul id="menu">
        <!-- <li data-menuanchor="firstPage" ><a href="#firstPage">Projects</a></li>
        <li data-menuanchor="secondPage" class="students-menu"><a href="#/applicants">Applicants</a></li> -->
        <!-- <li data-menuanchor="3rdPage" class="companies-menu"><a href="#3rdPage">Companies</a></li> -->
        <li class="right-menu">
            <a class="open-login" data-toggle="modal" data-target="#myModal"><i class="fa fa-sign-in" aria-hidden="true"></i>Alumni login</a>
        </li>
    </ul>

    <!-- Login -->
    
    <!-- Modal -->
    <div class="modal" id="myModal" role="dialog">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Sign in</h4>
                    <h4 class="modal-title"><a href="#/SignUp">Sign Up</a></h4>
                </div>
                <div class="modal-body">
                    <div class="container-login">
                        <form class="form">
                            <input type="text" placeholder="Username">
                            <input type="password" placeholder="Password">
                            <button type="submit" id="login-button">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End login -->

    <!-- Start website -->
    <div id="fullpage">
        <!-- First section -->
        <div class="section">
            <h1><span>SKYLAB</span>PROJECTS</h1>
            <p>A RECRUITMENT SITE OF DEVELOPERS</p>
            <div class="main-buttons">
                <i class="fa-arrow-right"></i><router-link to="/projects">Projects</router-link>
                <i class="fa-arrow-right"></i><router-link to="/applicants">Applicants</router-link>
                <i class="fa-arrow-right"></i><router-link to="/SignUp">Alumni sign Up</router-link>
            </div>
        </div>
        <!-- End section 1 -->
        <!-- Second section APPLICANTS -->
       <!--  <div class="section" id="section1">
            <div class="slide" id="slide2">
                <h1 class="apply">APPLICANTS</h1>
                <div class="container first-container">
                    <ul class="item">
                        <li class="span">
                            <div class="thumbnail">
                                <div class="header">
                                    <a href="profile.html"><img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAs3AAAAJDEyZGIzODE3LWEwNWQtNDgyYS1hYmQ1LTM5MjM5NGUwNzY2Mw.jpg" alt="">
                                    </a>
                                    <h1 class="students-header"><a href="profile.html">Students 1</a></h1>
                                    <div class="tech">
                                        <ul class="item bg-item">
                                            <li class="tech-items">Bootstrap</li>
                                            <li class="tech-items">CSS3</li>
                                            <li class="tech-items">Vue</li>
                                        </ul>
                                    </div>
                                    <div class="description">
                                        <p class="description-text"> vitae natus, aspernatur nam a porro officiis nobis, harum incidunt? Molestiae tenetur, beatae?</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="span">
                            <div class="thumbnail">
                                <div class="header">
                                    <a href="profile.html"><img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAs3AAAAJDEyZGIzODE3LWEwNWQtNDgyYS1hYmQ1LTM5MjM5NGUwNzY2Mw.jpg" alt="">
                                    </a>
                                    <h1 class="students-header"><a href="profile.html">Students 2</a></h1>
                                    <div class="tech">
                                        <ul class="item bg-item">
                                            <li class="tech-items">Bootstrap</li>
                                            <li class="tech-items">CSS3</li>
                                            <li class="tech-items">Vue</li>
                                        </ul>
                                    </div>
                                    <div class="description">
                                        <p class="description-text"> vitae natus, aspernatur nam a porro officiis nobis, harum incidunt? Molestiae tenetur, beatae?</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="span">
                            <div class="thumbnail">
                                <div class="header">
                                    <a href="profile.html"><img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAs3AAAAJDEyZGIzODE3LWEwNWQtNDgyYS1hYmQ1LTM5MjM5NGUwNzY2Mw.jpg" alt="">
                                    </a>
                                    <h1 class="students-header"><a href="profile.html">Students 3</a></h1>
                                    <div class="tech">
                                        <ul class="item bg-item">
                                            <li class="tech-items">Bootstrap</li>
                                            <li class="tech-items">CSS3</li>
                                            <li class="tech-items">Vue</li>
                                        </ul>
                                    </div>
                                    <div class="description">
                                        <p class="description-text"> vitae natus, aspernatur nam a porro officiis nobis, harum incidunt? Molestiae tenetur, beatae?</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="see-applicants-button">
                    <button class="see-all"><a href="applicants.html" target="_blank">More applicants</a></button>
                </div>
            </div>
            <div class="slide" id="slide3">
                <div class="container">
                    <ul class="item">
                        <li class="span">
                            <div class="thumbnail">
                                <div class="header">
                                    <a href="profile.html"><img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAs3AAAAJDEyZGIzODE3LWEwNWQtNDgyYS1hYmQ1LTM5MjM5NGUwNzY2Mw.jpg" alt="">
                                    </a>
                                    <h1 class="students-header"><a href="profile.html">Students 4</a></h1>
                                    <div class="tech">
                                        <ul class="item bg-item">
                                            <li class="tech-items">Bootstrap</li>
                                            <li class="tech-items">CSS3</li>
                                            <li class="tech-items">Vue</li>
                                        </ul>
                                    </div>
                                    <div class="description">
                                        <p class="description-text"> vitae natus, aspernatur nam a porro officiis nobis, harum incidunt? Molestiae tenetur, beatae?</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="span">
                            <div class="thumbnail">
                                <div class="header">
                                    <a href="profile.html"><img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAs3AAAAJDEyZGIzODE3LWEwNWQtNDgyYS1hYmQ1LTM5MjM5NGUwNzY2Mw.jpg" alt="">
                                    </a>
                                    <h1 class="students-header"><a href="profile.html">Students 5</a></h1>
                                    <div class="tech">
                                        <ul class="item bg-item">
                                            <li class="tech-items">Bootstrap</li>
                                            <li class="tech-items">CSS3</li>
                                            <li class="tech-items">Vue</li>
                                        </ul>
                                    </div>
                                    <div class="description">
                                        <p class="description-text"> vitae natus, aspernatur nam a porro officiis nobis, harum incidunt? Molestiae tenetur, beatae?</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="span">
                            <div class="thumbnail">
                                <div class="header">
                                    <a href="profile.html"><img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAs3AAAAJDEyZGIzODE3LWEwNWQtNDgyYS1hYmQ1LTM5MjM5NGUwNzY2Mw.jpg" alt="">
                                    </a>
                                    <h1 class="students-header"><a href="profile.html">Students 6</a></h1>
                                    <div class="tech">
                                        <ul class="item bg-item">
                                            <li class="tech-items">Bootstrap</li>
                                            <li class="tech-items">CSS3</li>
                                            <li class="tech-items">Vue</li>
                                        </ul>
                                    </div>
                                    <div class="description">
                                        <p class="description-text"> vitae natus, aspernatur nam a porro officiis nobis, harum incidunt? Molestiae tenetur, beatae?</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="slide" id="slide5">
                <div class="container">
                    <ul class="item">
                        <li class="span">
                            <div class="thumbnail">
                                <div class="header">
                                    <a href="profile.html"><img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAs3AAAAJDEyZGIzODE3LWEwNWQtNDgyYS1hYmQ1LTM5MjM5NGUwNzY2Mw.jpg" alt="">
                                    </a>
                                    <h1 class="students-header"><a href="profile.html">Students 7</a></h1>
                                    <div class="tech">
                                        <ul class="item bg-item">
                                            <li class="tech-items">Bootstrap</li>
                                            <li class="tech-items">CSS3</li>
                                            <li class="tech-items">Vue</li>
                                        </ul>
                                    </div>
                                    <div class="description">
                                        <p class="description-text"> vitae natus, aspernatur nam a porro officiis nobis, harum incidunt? Molestiae tenetur, beatae?</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="span">
                            <div class="thumbnail">
                                <div class="header">
                                    <a href="profile.html"><img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAs3AAAAJDEyZGIzODE3LWEwNWQtNDgyYS1hYmQ1LTM5MjM5NGUwNzY2Mw.jpg" alt="">
                                    </a>
                                    <h1 class="students-header"><a href="profile.html">Students 8</a></h1>
                                    <div class="tech">
                                        <ul class="item bg-item">
                                            <li class="tech-items">Bootstrap</li>
                                            <li class="tech-items">CSS3</li>
                                            <li class="tech-items">Vue</li>
                                        </ul>
                                    </div>
                                    <div class="description">
                                        <p class="description-text"> vitae natus, aspernatur nam a porro officiis nobis, harum incidunt? Molestiae tenetur, beatae?</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="span">
                            <div class="thumbnail">
                                <div class="header">
                                    <a href="profile.html"><img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAs3AAAAJDEyZGIzODE3LWEwNWQtNDgyYS1hYmQ1LTM5MjM5NGUwNzY2Mw.jpg" alt="">
                                    </a>
                                    <h1 class="students-header"><a href="profile.html">Students 9</a></h1>
                                    <div class="tech">
                                        <ul class="item bg-item">
                                            <li class="tech-items">Bootstrap</li>
                                            <li class="tech-items">CSS3</li>
                                            <li class="tech-items">Vue</li>
                                        </ul>
                                    </div>
                                    <div class="description">
                                        <p class="description-text"> vitae natus, aspernatur nam a porro officiis nobis, harum incidunt? Molestiae tenetur, beatae?</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div> -->
        <!-- End second section  -->
        <!-- Last section -->
        <!-- <div class="section" id="section2">
            <div class="intro">
                <h1>Companies</h1>
                <p></p>
            </div>
        </div> -->
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

