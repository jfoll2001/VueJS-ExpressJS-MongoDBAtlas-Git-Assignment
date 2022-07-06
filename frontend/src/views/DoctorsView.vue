<script>
import DoctorsForm from '@/components/DoctorsForm.vue'
import DoctorsTable from '@/components/DoctorsTable.vue'
import DoctorsModal from '@/components/DoctorsModal.vue'
import DoctorsSearch from '@/components/DoctorsSearch.vue'

export default {
    components: {
        DoctorsForm,
        DoctorsTable,
        DoctorsModal,
        DoctorsSearch
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

        <!-- Doctors Form -->
        <DoctorsForm>

        </DoctorsForm>

        <!-- Doctors Search -->
        <DoctorsSearch>

        </DoctorsSearch>

        <!-- Doctors Table -->
        <DoctorsTable>

        </DoctorsTable>

        <!-- Modal For Editing Doctors -->
        <DoctorsModal>


        </DoctorsModal>
    </div>
</template>