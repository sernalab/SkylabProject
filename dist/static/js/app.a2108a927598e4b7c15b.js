webpackJsonp([1],[,,function(t,e,s){"use strict";var a=s(29),i=s.n(a),n="http://localhost:3000/api";e.a={addUser:function(t){return i.a.post(n+"/users/addUser",t).then(function(t){return console.log(t),t}).catch(function(t){console.log(t)})},getUsers:function(){return i.a.get(n+"/users/").then(function(t){return console.log(t),t}).catch(function(t){console.log(t)})},getUser:function(t){return i.a.get(n+"/users/getUser/"+t).then(function(t){return console.log(t),t}).catch(function(t){console.log(t)})}},i.a.get("https://api.github.com/users/sernalab").then(function(t){console.log(t.data),console.log(t.status)})},,,,,,,,function(t,e,s){var a=s(1)(s(49),s(118),null,null,null);t.exports=a.exports},,,,,,,,,,,,,,function(t,e,s){"use strict";var a=s(3),i=s(124),n=s(111),r=s.n(n),o=s(112),l=s.n(o),c=s(110),u=s.n(c),d=s(113),v=s.n(d),p=s(114),f=s.n(p);a.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Home",component:r.a},{path:"/profile/:id",name:"Profile",component:l.a},{path:"/applicants",name:"Applicants",component:u.a},{path:"/projects",name:"Projects",component:v.a},{path:"/signup",name:"SignUp",component:f.a}]})},function(t,e,s){"use strict";var a=s(3),i=s(22);a.a.use(i.a);var n=new i.a.Store({state:{projects:[{project_name:"Skylab Projects",description:"Library of projects from Skylab",user:{name:"Carles",promotion:"2017-04",email:"carles.serna@gmail.com",github:"@sernalab",description:""}}]},getters:{},mutations:{addProject:function(t,e){t.projects.push(e)}},addUser:function(t,e){t.users.push(e)},actions:{}});e.a=n},,function(t,e,s){function a(t){s(98),s(99),s(101),s(100),s(102)}var i=s(1)(s(47),s(121),a,null,null);t.exports=i.exports},,,,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"thumbnails",data:function(){return{}},props:["user"]}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"asideMenu",data:function(){return{}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"allProjects",data:function(){return{}},props:["user"]}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(108),i=s.n(a),n=s(10),r=s.n(n),o=(s(4),s(2));e.default={name:"applicants",data:function(){return{users:[]}},components:{thumbnails:i.a,asideMenu:r.a},mounted:function(){var t=this;o.a.getUsers().then(function(e){t.users=e.data})}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"home",data:function(){return{}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(10),i=s.n(a),n=s(2);s(4);e.default={name:"profile",data:function(){return{}},components:{asideMenu:i.a},mounted:function(){var t=this;n.a.getUsers().then(function(e){t.users=e.data})},props:["user"]}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(16),i=s.n(a),n=s(10),r=s.n(n),o=s(109),l=s.n(o),c=s(4),u=s(2);e.default={name:"projects",data:function(){return{}},computed:i()({},s.i(c.a)(["projects"])),components:{asideMenu:r.a,allProjects:l.a},mounted:function(){var t=this;u.a.getUser(this.$route.params.id).then(function(e){t.users=e.data})}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(16),i=s.n(a),n=s(107),r=s.n(n),o=s(28),l=s(22),c=s(2);o.a.use(r.a),e.default={components:{"vue-form-generator":r.a.component},data:function(){return{model:{name:"",project_name:"",github:"",heroku:""},schema:{fields:[{type:"input",inputType:"text",label:"Name",model:"name",placeholder:"Your name",featured:!0,required:!0},{type:"input",inputType:"text",label:"Project name",model:"project_name",placeholder:"Name project"},{type:"input",inputType:"text",label:"Github",model:"github",placeholder:"Insert your github repository"},{type:"input",inputType:"text",label:"Heroku",model:"heroku",placeholder:"Insert your url link project"}]},formOptions:{validateAfterLoad:!0,validateAfterChanged:!0}}},methods:i()({},s.i(l.b)(["addProject"]),{submit:function(){c.a.addUser(this.model),this.addProject(this.model),this.$router.push("/applicants")}})}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(3),i=s(27),n=s.n(i),r=s(25),o=s(26),l=s.n(o),c=s(24);a.a.config.productionTip=!1,new a.a({el:"#app",router:c.a,store:r.a,bootstrap:l.a,template:"<App/>",components:{App:n.a}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,s){var a=s(1)(s(48),s(119),null,null,null);t.exports=a.exports},function(t,e,s){var a=s(1)(s(50),s(117),null,null,null);t.exports=a.exports},function(t,e,s){var a=s(1)(s(51),s(116),null,null,null);t.exports=a.exports},function(t,e,s){function a(t){s(103),s(104)}var i=s(1)(s(52),s(122),a,"data-v-7d37e0ce",null);t.exports=i.exports},function(t,e,s){var a=s(1)(s(53),s(115),null,null,null);t.exports=a.exports},function(t,e,s){var a=s(1)(s(54),s(123),null,null,null);t.exports=a.exports},function(t,e,s){function a(t){s(97)}var i=s(1)(s(55),s(120),a,null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile"},[s("div",{attrs:{id:"all"}},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row row-offcanvas row-offcanvas-left"},[s("asideMenu"),t._v(" "),s("div",{staticClass:"col-xs-12 col-sm-8 col-md-9 content-column"},[t._m(0),t._v(" "),s("h1",[t._v("README of PROJECT")]),t._v(" "),s("p",[t._v("A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.")]),t._v(" "),t._m(1),t._v(" "),s("blockquote",[s("p",[t._v("The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.")])]),t._v(" "),s("h2",[t._v("Header Level 2")]),t._v(" "),s("p",[t._v("Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.")]),t._v(" "),s("p",[t._v("The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then")])],1)],1)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12 col-sm-6 col-md-4 col-lg-3 masonry-item"},[s("div",{staticClass:"box-masonry header-profile"},[s("img",{attrs:{src:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAr8AAAAJGJlYzQyM2E1LTIzOTgtNDE1My1hNjE2LTBiNTIyYjVmODUzZQ.jpg",alt:""}}),t._v(" "),s("div",{staticClass:"box-masonry-text"},[s("h4",[s("a",{attrs:{href:"#"}},[t._v("x")])]),t._v(" "),s("div",{staticClass:"working"},[s("i",{staticClass:"fa fa-briefcase",attrs:{"aria-hidden":"true"}}),t._v(" "),s("p",[t._v("Google Inc.")])]),t._v(" "),s("div",{staticClass:"location"},[s("i",{staticClass:"fa fa-map-marker",attrs:{"aria-hidden":"true"}}),t._v(" "),s("p",[t._v("Barcelona")])]),t._v(" "),s("div",{staticClass:"linkedin"},[s("i",{staticClass:"fa fa-linkedin",attrs:{"aria-hidden":"true"}}),t._v(" "),s("div",{staticClass:"linkedin-link"},[s("p",[t._v("https://www.linkedin.com/in/jaume-regas-486aa5129/")])])])])]),t._v(" "),s("div",{staticClass:"box-masonry header-profile"},[s("div",{staticClass:"box-masonry-text"},[s("h4",[s("a",{attrs:{href:"detail.html"}},[t._v("Looking for")])]),t._v(" "),s("div",{staticClass:"description"},[s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aut nulla eligendi hic, sit dolor. Nesciunt nam, assumenda quibusdam eos necessitatibus explicabo repellendus, facere laborum nostrum perferendis, at itaque sapiente!")])])])])]),t._v(" "),s("div",{staticClass:"col-xs-12 col-sm-9 col-md-8 masonry-item"},[s("div",{attrs:{id:"main-slider"}},[s("div",{staticClass:"item"},[s("img",{staticClass:"img-responsive",attrs:{alt:"",src:""}})]),t._v(" "),s("div",{staticClass:"item"},[s("img",{staticClass:"img-responsive",attrs:{alt:"",src:""}})]),t._v(" "),s("div",{staticClass:"item"},[s("img",{staticClass:"img-responsive",attrs:{alt:"",src:""}})])]),t._v(" "),s("div",{staticClass:"box-masonry header-profile"},[s("div",{staticClass:"box-masonry-text"},[s("h4",[s("a",{attrs:{href:"detail.html"}},[t._v("Repositories")])]),t._v(" "),s("div",{staticClass:"repo"},[s("i",{staticClass:"fa fa-arrow-circle-right",attrs:{"aria-hidden":"true"}}),t._v(" "),s("p",[t._v("First")])]),t._v(" "),s("div",{staticClass:"repo"},[s("i",{staticClass:"fa fa-arrow-circle-right",attrs:{"aria-hidden":"true"}}),t._v(" "),s("p",[t._v("Second")])]),t._v(" "),s("div",{staticClass:"repo"},[s("i",{staticClass:"fa fa-arrow-circle-right",attrs:{"aria-hidden":"true"}}),t._v(" "),s("p",[t._v("Thrid")])])])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),s("li",[t._v("Aliquam tincidunt mauris eu risus.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),s("li",[t._v("Aliquam tincidunt mauris eu risus.")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"all"}},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row row-offcanvas row-offcanvas-left"},[s("asideMenu"),t._v(" "),s("div",{staticClass:"col-xs-12 col-sm-8 col-md-9 scroll"},[s("div",{staticClass:"thumbnails-box"},t._l(t.users,function(t){return s("thumbnails",{attrs:{user:t}})}))])],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"allProjects"},[s("div",{staticClass:"col-xs-12 col-sm-6 col-md-4 col-lg-3 masonry-item"},[s("div",{staticClass:"box-masonry"},[s("router-link",{staticClass:"box-masonry-image with-hover-overlay with-hover-icon",attrs:{to:"/profile",title:""}},[s("img",{staticClass:"img-responsive",attrs:{src:"",alt:""}})]),t._v(" "),s("div",{staticClass:"box-masonry-text"},[s("h4",[s("router-link",{attrs:{to:"/profile"}},[t._v(t._s(t.project.project_name))])],1),t._v(" "),s("div",{staticClass:"box-masonry-desription"},[s("p",[t._v(" "+t._s(t.project.description))])])])],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"asideMenu"},[s("div",{staticClass:"col-xs-6 col-sm-4 col-md-3 sidebar-offcanvas",attrs:{id:"sidebar"}},[s("div",{staticClass:"sidebar-content"},[s("h1",{staticClass:"sidebar-heading"},[s("a",{attrs:{href:"index.html"}},[t._v(t._s(t.$route.name))])]),t._v(" "),s("p",{staticClass:"sidebar-p"},[t._v("All the projects made at the end of the course by students. ")]),t._v(" "),s("p",{staticClass:"sidebar-p"},[t._v("Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. ")]),t._v(" "),s("ul",{staticClass:"sidebar-menu"},[s("li",[s("router-link",{attrs:{to:"/applicants"}},[t._v("Applicants")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/"}},[t._v("Back")])],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"social"},[s("a",{staticClass:"external facebook",attrs:{href:"#","data-animate-hover":"pulse"}},[s("i",{staticClass:"fa fa-facebook"})]),s("a",{staticClass:"external twitter",attrs:{href:"#","data-animate-hover":"pulse"}},[s("i",{staticClass:"fa fa-twitter"})]),s("a",{staticClass:"external instagram",attrs:{href:"#",title:""}},[s("i",{staticClass:"fa fa-instagram"})]),s("a",{staticClass:"email",attrs:{href:"#","data-animate-hover":"pulse"}},[s("i",{staticClass:"fa fa-envelope"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"copyright"},[s("p",{staticClass:"credit"},[t._v("©2017 Carles Serna | "),s("a",{staticClass:"external",attrs:{href:"https://www.skylabcoders.com/"}},[t._v("Skylabcoders Academy")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"thumbnails"},[s("ul",{staticClass:"item"},[s("li",{staticClass:"span"},[s("div",{staticClass:"thumbnail"},[s("div",{staticClass:"header"},[s("a",{attrs:{href:"#/profile/"+t.user._id}},[s("img",{attrs:{src:t.user.img}})]),t._v(" "),s("h1",{staticClass:"students-header"},[s("a",{attrs:{href:"#/profile/"+t.user._id}},[t._v(t._s(t.user.user.name))])]),t._v(" "),s("div",{staticClass:"space"}),t._v(" "),s("div",{staticClass:"description-text"},[s("p",[t._v(t._s(t.user.project_name))])]),t._v(" "),s("div",{staticClass:"github-repo"},[s("a",{attrs:{href:t.user.github_repo,target:"_blank"}},[t._v(" Github Repository")])]),t._v(" "),s("div",{staticClass:"heroku"},[s("a",{attrs:{href:t.user.heroku_url,target:"_blank"}},[t._v(" Heroku ")])])])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t._m(0),t._v(" "),s("form",{staticClass:"col-md-6",attrs:{action:""},on:{submit:function(e){e.preventDefault(),t.submit(e)}}},[s("div",{staticClass:"panel-body"},[s("vue-form-generator",{attrs:{schema:t.schema,model:t.model,options:t.formOptions}}),t._v(" "),s("button",{staticClass:"b-pink",attrs:{type:"submit"}},[t._v("Send")])],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[s("span",[t._v("SKYLAB")]),t._v("PROJECTS")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{attrs:{id:"fullpage"}},[s("div",{staticClass:"section"},[t._m(0),t._v(" "),s("p",[t._v("A RECRUITMENT SITE OF DEVELOPERS")]),t._v(" "),s("div",{staticClass:"main-buttons"},[s("i",{staticClass:"fa-arrow-right"}),s("router-link",{attrs:{to:"/applicants"}},[t._v("Applicants")]),t._v(" "),s("i",{staticClass:"fa-arrow-right"}),s("router-link",{attrs:{to:"/SignUp"}},[t._v("Alumni sign Up")])],1)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",[s("span",[t._v("SKYLAB")]),t._v("PROJECTS")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"projects"},[s("div",{attrs:{id:"all"}},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row row-offcanvas row-offcanvas-left"},[s("asideMenu"),t._v(" "),s("div",{staticClass:"col-xs-12 col-sm-8 col-md-9 content-column"},[t._m(0),t._v(" "),s("div",{staticClass:"grid"},[s("div",{staticClass:"row"},t._l(t.projects,function(t){return s("allProjects",{attrs:{project:t}})}))])])],1)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"small-navbar visible-xs"},[s("button",{staticClass:"btn btn-ghost pull-left",attrs:{type:"button","data-toggle":"offcanvas"}},[s("i",{staticClass:"fa fa-align-left"}),t._v("Menu")]),t._v(" "),s("h1",{staticClass:"small-navbar-heading"},[s("a",{attrs:{href:"index.html"}},[t._v("Creative ")])])])}]}}],[56]);
//# sourceMappingURL=app.a2108a927598e4b7c15b.js.map