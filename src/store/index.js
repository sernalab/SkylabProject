import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  	projects: [{
      id: 1,
      project_name: "Skylab Projects",
      description: "Library of projects from Skylab",
      img: "http://i.imgur.com/busAqYz.png",
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
