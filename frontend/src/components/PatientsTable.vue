<script>
export default {
    props: ['patients']
}
</script>

<template>
    <div>
        <div>
            <h3 class="mt-5">Edit/Remove Patients</h3>
            <table class="table mt-3">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                        <th>Edit Patients</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(pat, i) in patients" :key="i">
                        <td>{{ pat.fname }} {{ pat.lname }}</td>
                        <td>{{ pat.phone }}</td>
                        <td>{{ pat.sex }}</td>
                        <td>{{ pat.dateofbirth }}</td>
                        <td>
                            <button @click="$emit('editPatient', pat._id, i)"
                                class="btn btn-warning px-4 me-4">Edit</button>
                            <button @click="$emit('deletePatient', pat._id, i)"
                                class="btn btn-danger ms-4">Remove</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>