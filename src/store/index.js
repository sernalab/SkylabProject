import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  	projects: [{
      project_name: "Skylab Projects",
      description: "Library of projects from Skylab",
      user: {
        name: "Carles",
        promotion: "2017-04",
        email: "carles.serna@gmail.com",
        github: "@sernalab",
        description : ""
      }
    }],
  },
  getters: {
  },
  mutations: {
  	addProject (state, project){
  		state.projects.push(project)
  	 }
    },
    addUser (state, user){
      state.users.push(user)
    },
  actions: {
  }
})

export default store;
