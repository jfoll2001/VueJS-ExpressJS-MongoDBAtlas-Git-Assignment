<script>
export default {
    name: 'DoctorsSearch',
    data() {
        return {
            searchParam: ''
        }
    },
    methods: {
        searchDoctor() {
            this.$emit('searchDoctor', this.searchParam);
        }
    }
}
</script>

<template>
    <div>
        <div class="mt-5 mx-auto w-50">
            <h3 class="mb-4">Search Doctors</h3>
            <form>
                <input v-model="searchParam" @keypress.enter="searchDoctor" type="text" class="form-control mb-3"
                    placeholder="Enter Search...">
                <button type="button" @click="searchDoctor" class="btn btn-success w-25">Search</button>
            </form>
        </div>
        <hr>
    </div>
</template>