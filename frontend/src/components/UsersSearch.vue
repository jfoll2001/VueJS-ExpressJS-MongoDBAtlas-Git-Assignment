<script>
export default {
    name: 'UsersSearch',
    data() {
        return {
            searchParam: ''
        }
    },
    methods: {
        searchUser() {
            this.$emit('searchUser', this.searchParam);
        }
    }
}
</script>

<template>
    <div>
        <div class="mt-5 mx-auto w-50">
            <h3 class="mb-4">Search Users</h3>
            <form>
                <input v-model="searchParam" type="text" class="form-control mb-3"
                    placeholder="Enter Search...">
                <button type="button" @click="searchUser" class="btn btn-success w-25">Search</button>
            </form>
        </div>
        <hr>
    </div>
</template>