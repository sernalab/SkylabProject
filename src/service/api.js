import axios from 'axios'

const host = 'http://localhost:3000/api'

export default {
  addUser(user) {
    return axios.post(`${host}/users/addUser`, user)
      .then(function (response) {
      	console.log(response)
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  getUsers() {
    return axios.get(`${host}/users/`)
      .then(function (response) {
      	console.log(response)
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  getUser(userId) {
    return axios.get(`${host}/users/getUser/${userId}`)
      .then(function (response) {
      	console.log(response)
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
