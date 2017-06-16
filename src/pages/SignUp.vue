<template>
<div class="container">
	<div>
		<h1><span>SKYLAB</span>PROJECTS</h1>
	</div>
	<form action="" @submit.prevent="submit" class="col-md-6">
		<div class="panel-body">
			<vue-form-generator 
				:schema="schema" 
				:model="model" 
				:options="formOptions">
			</vue-form-generator>
			<button type="submit" class="b-pink">Send</button>
		</div>
	</form>
</div>
</template>

<script>
import VueFormGenerator from "vue-form-generator";
import Vue from "Vue";
import { mapMutations } from 'vuex'
import api from '../service/api'

Vue.use(VueFormGenerator);

export default{
	components:{
			"vue-form-generator": VueFormGenerator.component
		},
		data() {
			return {
					model: {
						name: "",
						project_name: "",
						github: "",
						heroku: "",
					},
					schema: {
						fields: [{
							type: "input",
							inputType: "text",
							label: "Name",
							model: "name",
							placeholder: "Your name",
							featured: true,
							required: true
						},{
							type: "input",
							inputType: "text",
							label: "Project name",
							model: "project_name",
							placeholder: "Name project"
						},
						{
							type: "input",
							inputType: "text",
							label: "Github",
							model: "github",
							placeholder: "Insert your github repository"
						},{
							type: "input",
							inputType: "text",
							label: "Heroku",
							model: "heroku",
							placeholder: "Insert your url link project"
						}]
					},
					formOptions: {
						validateAfterLoad: true,
						validateAfterChanged: true
					}
				}
		},
		methods: {
			...mapMutations([
				'addProject'
			]), 
			submit() {
				api.addUser(this.model)
				this.addProject(this.model)
				this.$router.push('./applicants')
			}
		}  
};
</script>

<style src="../../static/css/signup-form.css"></style>
