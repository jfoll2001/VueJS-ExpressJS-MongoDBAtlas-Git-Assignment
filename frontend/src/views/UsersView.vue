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
        //Edits user
        editUserHandler() {

        },
        //Deletes user
        deleteUserHandler() {

        }
    },
    mounted() {
        this.getUsers();
    }
}
</script>

<template>
    <div class="container-fluid text-center">
        <!-- Return to Admin and Logn in Menus -->
        <div>
            <span>Return to Admin </span>
            <RouterLink to="/admin">Menu</RouterLink>
            <span> or </span>
            <RouterLink to="/">Logout</RouterLink>
        </div>

        <!-- User Form -->
        <UsersForm @saveUser="saveUserHandler" />

        <!-- User Search -->
        <UsersSearch />

        <!-- User Table -->
        <UsersTable :users="users" @editUser="editUserHandler" @deleteUser="deleteUserHandler" />

        <!-- User Modal -->
        <UsersModal></UsersModal>
    </div>
</template>