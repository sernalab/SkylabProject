<template>
<div class="container">
	<div>
		<p>SKYLAB PROJECTS</p>
	</div>
	<form action="" @submit.prevent="submit" class="col-md-6">
		<div class="panel-body">
			<vue-form-generator 
				:schema="schema" 
				:model="model" 
				:options="formOptions">
			</vue-form-generator>
			<button type="submit">Send</button>
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
						name: "John Doe",
						password: "J0hnD03!x4",
						promotion: ["2016-04", "2016-07", "2016-9",  "2017-01", "2017-04", "2017-07"],
						made: ["Javascript", "VueJS"],
						email: "john.doe@gmail.com",
						github: "@sernlab",
						description_work: "start up",
						project_name: "Skylab Projects",
						description_project: "Library of projects from Skylab",
						working: true
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
							inputType: "password",
							label: "Password",
							model: "password",
							min: 6,
							required: true,
							hint: "Minimum 6 characters",
							validator: VueFormGenerator.validators.string
						},{
							type: "select",
							label: "Promotion",
							model: "promotion",      
							values: ["2016-04", "2016-07", "2016-09", "----" , "2017-01", "2017-04", "2017-07"],
						},{
							type: "select",
							label: "Project made with",
							model: "made",      
							values: ["Javascript", "VueJS", "CSS3", "HTML5"]
						},{
							type: "input",
							inputType: "email",
							label: "E-mail",
							model: "email",
							placeholder: "User's e-mail address"
						},{
							type: "input",
							inputType: "text",
							label: "Github",
							model: "github",
							placeholder: "Insert your github user"
						},
						{
							type: "input",
							inputType: "text",
							label: "Description Work",
							model: "description_work",
							placeholder: "Insert a description"
						},
						{
							type: "input",
							inputType: "text",
							label: "Project name",
							model: "project_name",
							placeholder: "Name project"
						},
						{
							type: "input",
							inputType: "text",
							label: "Description Project",
							model: "description_project",
							placeholder: "Insert a description"
						},
						{
							type: "checkbox",
							label: "Working",
							model: "working",
							default: true
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
				this.$router.push('/projects')
			}
		}  
};
</script>

<style src="../../static/css/signup-form.css"></style>
