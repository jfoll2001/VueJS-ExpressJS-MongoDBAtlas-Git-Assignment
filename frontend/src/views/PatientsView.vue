<script>
import PatientsForm from '@/components/PatientsForm.vue'
import PatientsTable from '@/components/PatientsTable.vue'
import PatientsSearch from '@/components/PatientsSearch.vue'
import PatientsModal from '@/components/PatientsModal.vue'

export default {
    components: {
        PatientsForm,
        PatientsSearch,
        PatientsTable,
        PatientsModal
    }
}
</script>

<template>
    <div class="container-fluid text-center">
        <!-- Return to Staff and Logn in Menus -->
        <div>
            <span>Return to Staff </span>
            <RouterLink to="/staff">Menu</RouterLink>
            <span> or </span>
            <RouterLink to="/">Logout</RouterLink>
        </div>

        <!-- Patient Form -->
        <PatientsForm></PatientsForm>

        <!-- Patient Search -->
        <PatientsSearch></PatientsSearch>

        <!-- Patient Table -->
        <PatientsTable></PatientsTable>

        <!-- Patient Modal -->
        <PatientsModal></PatientsModal>
    </div>
</template>