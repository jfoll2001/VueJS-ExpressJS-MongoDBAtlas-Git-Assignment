<script>
import Login from "@/components/Login.vue"

export default {
  components: {
    Login
  },
  data() {
    return {
      url: 'http://localhost:3001',
      users: []
    }
  },
  methods: {
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
    getUsers() {
      fetch(`${this.url}/loadUsers`, {
        method: 'GET',
        success(data, status) {
          if (status === 'success') {
            JSON.parse(data);
          };
        }
      })
        .then(response => response.json())
        .then(data => this.users = data)
    },
    testUserHandler(user) {
      for (var i = 0; i < this.users.length; i++) {
        if (this.users[i].name == user.name && this.users[i].password == user.password) {
          if (this.users[i].admin == 'no') {
            open(`http://localhost:3000/staff`, '_self');
            return;
          } else {
            open(`http://localhost:3000/admin`, '_self');
            return;
          }
        } else {
          open(`http://localhost:3000/`, '_self');
        };
      };
    }
  },
  mounted() {
    this.testCollection();
    this.getUsers();
  }
}

</script>

<template>
  <title>Login</title>
  <Login @testUser="testUserHandler" />
</template>
