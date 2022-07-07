<script>
export default {
    data() {
        return {
            searchParam: ''
        }
    },
    methods: {
        searchPatient() {
            this.$emit('searchPatient', this.searchParam);
        }
    }
}
</script>

<template>
    <div>
        <div class="mt-5 mx-auto w-50">
            <h3 class="mb-4">Search Patients</h3>
            <form>
                <input v-model="searchParam" type="text" class="form-control mb-3" placeholder="Enter Search...">
                <button type="button" @click="searchPatient" class="btn btn-success w-25">Search</button>
            </form>
        </div>
        <hr>
    </div>
</template>