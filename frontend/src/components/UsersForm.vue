<script>
export default {
    data() {
        return {
            user: {
                name: '',
                admin: 'false',
                password: ''
            },
            passwordVal: ''
        }
    },
    methods: {
        saveUser() {
            var usernameVal = /[a-zA-Z0-9]/;
            var passwordVal2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            if (!this.user.name || !this.user.password) {
                alert("All fields need to filled out");
                return;
            } else {
                if (!usernameVal.test(this.user.name)) {
                    alert("Incorrect format for username");
                    return;
                } else if (!passwordVal2.test(this.user.password)) {
                    alert("Incorrect format for password");
                    return;
                } else if (this.user.password != this.passwordVal) {
                    alert("Passwords need to match");
                    return;
                }
            }
            this.$emit('saveUser', this.user);
        }
    }
}
</script>


<template>
    <div>
        <div class="mt-4">
            <form class="w-25 mx-auto">
                <div class="input-group mb-3">
                    <span class="input-group-text">Username:</span>
                    <input v-model="user.name" type="text" class="form-control" placeholder="Username" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Password:</span>
                    <input v-model="user.password" type="password" class="form-control" placeholder="Password" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Confirm Password:</span>
                    <input v-model="passwordVal" type="password" class="form-control" placeholder="Confirm Password"
                        required>
                </div>
                <div class="mb-3">
                    <input v-model="user.admin" type="checkbox" class="form-check-input">
                    <label class="form-check-label">&nbsp; Admin?</label>
                </div>
                <button @click="saveUser" class="btn btn-primary mb-3 w-50">Add User</button>
            </form>
        </div>
    </div>
</template>