<script>
export default {
    props: ['users']
}
</script>

<template>
    <div>
        <h3 class="mt-5">Users Table</h3>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Admin</th>
                    <th>Password</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, i) in users" :key="i">
                    <td>{{ user.name }}</td>
                    <td>{{ user.admin }}</td>
                    <td>{{ user.password }}</td>
                    <td>
                        <button @click="$emit('editUser', user._id, i)" class="btn btn-warning px-4 me-4">Edit</button>
                        <button @click="$emit('deleteUser', user._id, i)" class="btn btn-danger ms-4">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>