<script>
import UsersTable from '@/components/UsersTable.vue'
import UsersModal from '@/components/UsersModal.vue'
import UsersSearch from '@/components/UsersSearch.vue'
import UsersForm from '@/components/UsersForm.vue'

export default {
    components: {
        UsersTable,
        UsersModal,
        UsersSearch,
        UsersForm
    },
    data() {
        return {
            url: 'http://localhost:3001',
            users: [],
            form: {
                name: '',
                admin: '',
                password: ''
            },
            passwordVal: '',
            editModal: null,
            toUpdate: 0
        }
    },
    methods: {
        //Gets all of the users
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
        //Saves user
        saveUserHandler(user) {
            fetch(`${this.url}/saveUser`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            })
        },
        //Opens user editor
        editUserHandler(id, i) {
            this.form.name = this.users[i].name;
            this.form.admin = this.users[i].admin;
            this.form.password = this.users[i].password;
            this.toUpdate = id;
            this.editModal.show();
        },
        //Edits user
        updateRow() {
            if (!this.form.name || !this.form.password) {
                alert("All fields need to filled out");
                return;
            } else if (this.form.password != this.passwordVal) {
                alert("Passwords need to match");
                return;
            }
            fetch(`${this.url}/updateUser/${this.toUpdate}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.form)
            })
            this.getUsers();
        },
        //Deletes user
        deleteUserHandler(id) {
            fetch(`${this.url}/deleteUser/${id}`, {
                method: 'DELETE'
            })
            this.getUsers();
        },
        //Searches users
        searchUserHandler(searchParam) {
            let param = searchParam;
            fetch(`${this.url}/searchUser/${param}`, {
                method: 'GET',
                success(data, status) {
                    if (status === 'success') {
                        JSON.parse(data);
                    };
                }
            })
                .then(response => response.json())
                .then(data => this.users = data)
            console.log(this.users)
        }
    },
    mounted() {
        this.getUsers();
        this.editModal = new bootstrap.Modal(document.querySelector('#edit-row'));
    }
}
</script>

<template>
    <title>Users Page</title>
    <div class="container-fluid text-center">
        <!-- Return to Admin and Login Menus -->
        <div>
            <span>Return to Admin </span>
            <RouterLink to="/admin">Menu</RouterLink>
            <span> or </span>
            <RouterLink to="/">Logout</RouterLink>
        </div>

        <!-- User Form -->
        <UsersForm @saveUser="saveUserHandler" />

        <!-- User Search -->
        <UsersSearch @searchUser="searchUserHandler" />

        <!-- User Table -->
        <UsersTable :users="users" @editUser="editUserHandler" @deleteUser="deleteUserHandler" />

        <!-- User Modal -->
        <UsersModal id="edit-row">
            <template #modal-form>
                <form @submit.prevent="updateRow">
                    <div class="input-group mb-3">
                        <span class="input-group-text">Username:</span>
                        <input v-model="form.name" type="text" class="form-control" placeholder="Username" required>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Password:</span>
                        <input v-model="form.password" type="password" class="form-control" placeholder="Password"
                            required>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Confirm Password:</span>
                        <input v-model="this.passwordVal" type="password" class="form-control"
                            placeholder="Confirm Password" required>
                    </div>
                    <div class="mb-3">
                        <input v-model="form.admin" type="checkbox" class="form-check-input">
                        <label class="form-check-label">&nbsp; Admin?</label>
                    </div>
                    <button type="submit" class="btn btn-primary mt-3 me-5" data-bs-dismiss="modal">Save
                        changes</button>
                    <button type="button" class="btn btn-secondary mt-3 ms-5 px-5"
                        data-bs-dismiss="modal">Close</button>
                </form>
            </template>
        </UsersModal>
    </div>
</template>