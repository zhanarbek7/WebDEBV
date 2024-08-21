import axios from "axios";

axios.get('https://reqres.in/api/users/2')
  .then((response) => {
    console.log('Response:', response.data);
  })
  .catch((error) => {
    console.error('Request Error:', error);
  });