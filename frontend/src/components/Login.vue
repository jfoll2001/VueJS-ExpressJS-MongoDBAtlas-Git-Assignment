<script>
export default {
    name: 'Login',
    data() {
        return {
            user: {
                name: '',
                password: ''
            }
        }
    },
    methods: {
        testUser() {
            this.$emit('testUser', this.user);
        }
    }
}
</script>

<template>
    <div>
        <div class="container-fluid">
            <div class="card mt-5 w-25 text-center mx-auto">
                <div class="card-body">
                    <h3 class="mb-5">Login</h3>
                    <form>
                        <div class="input-group mb-3 w-75 mx-auto">
                            <span class="input-group-text">User:</span>
                            <input v-model="user.name" type="text" class="form-control" placeholder="Enter User"
                                required>
                        </div>
                        <div class="input-group mb-5 w-75 mx-auto">
                            <span class="input-group-text">Password:</span>
                            <input v-model="user.password" type="password" class="form-control"
                                placeholder="Enter Password" required>
                        </div>                        
                        <button type="button" @click="testUser" class="btn btn-success w-25">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>