<script>
import Login from "@/components/Login.vue"

export default {
  components: {
    Login
  },
  data() {
    return {
      url: 'http://localhost:3001'
    }
  },
  methods: {
    //Tests to see if collections exist
    testCollection() {
      fetch(`${this.url}/testCollections`, {
        method: 'GET',
        success(data, status) {
          if (status === 'success') {
            alert(data);
          }
        }
      })
    },
    //Searches users
    testUserHandler(user, pass) {
      let param = user;
      fetch(`${this.url}/searchUser/${param}`, {
        method: 'GET',
        success(data, status) {
          if (status === 'success') {
            JSON.parse(data);
          };
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          if (data[0].name === user && data[0].password === pass) {
            if (data[0].admin === 'false') {
              open(`http://localhost:3000/staff`, '_self');
              return;
            } else {
              open(`http://localhost:3000/admin`, '_self');
              return;
            }
          };
          alert('Username or Password incorrect');
          open(`http://localhost:3000/`, '_self');
        })
    }
  },
  mounted() {
    this.testCollection();
  }
}

</script>

<template>
  <title>Login</title>
  <Login @testUser="testUserHandler" />
</template>
