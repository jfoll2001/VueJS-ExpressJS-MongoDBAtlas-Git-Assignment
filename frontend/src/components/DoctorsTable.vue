<script>
export default {
    props: ['doctors']
}
</script>

<template>
    <div>
        <h3 class="mt-5">Edit/Remove Doctors</h3>
        <table class="table mt-3">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Specialty</th>
                    <th>Edit Doctor</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(doctor, i) in doctors" :key="i">
                    <td>{{ doctor.fname }} {{ doctor.lname }}</td>
                    <td>{{ doctor.phone }}</td>
                    <td>{{ doctor.specialty }}</td>
                    <td>
                        <button @click="$emit('editDoctor', doctor._id, i)"
                            class="btn btn-warning px-4 me-4">Edit</button>
                        <button @click="$emit('deleteDoctor', doctor._id, i)"
                            class="btn btn-danger ms-4">Remove</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>