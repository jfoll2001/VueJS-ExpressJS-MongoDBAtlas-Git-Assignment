<script>
import AppointmentsForm from '@/components/AppointmentsForm.vue'
import AppointmentsSearch from '@/components/AppointmentsSearch.vue'
import AppointmentsTable from '@/components/AppointmentsTable.vue'
import AppointmentsModal from '@/components/AppointmentsModal.vue'

export default {
    components: {
        AppointmentsForm,
        AppointmentsSearch,
        AppointmentsTable,
        AppointmentsModal
    }
}
</script>

<template>
    <div class="container-fluid text-center">
        <!-- Return to Staff and Logn in Menus -->
        <div>
            <span>Return to Staff Menu: </span>
            <RouterLink to="/staff">Return</RouterLink>
            <span> or</span>
            <RouterLink to="/"> Logout</RouterLink>
        </div>

        <!-- Appointment Form -->
        <AppointmentsForm></AppointmentsForm>

        <!-- Appointment Seach -->
        <AppointmentsSearch></AppointmentsSearch>

        <!-- Appointment Table -->
        <AppointmentsTable></AppointmentsTable>

        <!-- Appointment Modal -->
        <AppointmentsModal></AppointmentsModal>
    </div>
</template>