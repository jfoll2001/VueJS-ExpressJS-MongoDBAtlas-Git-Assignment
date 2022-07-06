<script>

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
                    <tr>
                        <td>{{}}</td>
                        <td>{{}}</td>
                        <td>{{}}</td>
                        <td>{{}}</td>
                        <td>{{}}</td>
                        <td>{{}}</td>
                        <td>
                            <button class="btn btn-warning px-4 me-4">Edit</button>
                            <button class="btn btn-danger ms-4">Remove</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>