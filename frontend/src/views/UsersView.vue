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
    }
}
</script>

<template>
    <div class="container-fluid text-center">
        <!-- Return to Admin and Logn in Menus -->
        <div>
            <span>Return to Admin Menu: </span>
            <RouterLink to="/admin">Return</RouterLink>
            <span> or</span>
            <RouterLink to="/"> Logout</RouterLink>
        </div>

        <!-- User Form -->
        <UsersForm></UsersForm>

        <!-- User Search -->
        <UsersSearch></UsersSearch>

        <!-- User Table -->
        <UsersTable></UsersTable>

        <!-- User Modal -->
        <UsersModal></UsersModal>
    </div>
</template>