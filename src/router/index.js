import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Profile from '@/pages/Profile'
import Applicants from '@/pages/Applicants'
import Projects from '@/pages/Projects'
import SignUp from '@/pages/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile/:id',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/applicants',
      name: 'Applicants',
      component: Applicants
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
