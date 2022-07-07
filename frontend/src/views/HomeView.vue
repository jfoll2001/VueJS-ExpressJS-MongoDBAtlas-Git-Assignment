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
      fetch(`${this.url}/loginUsers`, {
        method: 'GET',
        success(data, status) {
          if (status === 'success') {
            this.users = JSON.parse(data);
          };
        }
      })
        .then(response => response)
    },
    testUserHandler(user) {
      console.log(this.users)
      
    }
  },
  mounted() {
    this.testCollection();
    this.getUsers();
  }
}

</script>

<template>
  <Login @testUser="testUserHandler" />
</template>
