<script>
export default {
    props: ['appoints']
}
</script>

<template>
    <div>
        <div class="mt-4">
            <h3>Edit/Remove Appointments</h3>
            <table class="table mt-4">
                <thead>
                    <tr>
                        <th>Patient</th>
                        <th>Doctor</th>
                        <th>Status</th>
                        <th>Location</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(app, i) in appoints" :key="i">
                        <td>{{ app.patient }}</td>
                        <td>{{ app.doctor }}</td>
                        <td>{{ app.status }}</td>
                        <td>{{ app.location }}</td>
                        <td>{{ app.date }}</td>
                        <td>{{ app.time }}</td>
                        <td>
                            <button @click="$emit('editApoint', app._id, i)"
                                class="btn btn-warning px-4 me-4">Edit</button>
                            <button @click="$emit('deleteApoint', app._id, i)"
                                class="btn btn-danger ms-4">Remove</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>