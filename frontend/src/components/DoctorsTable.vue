<script>

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
                <tr>
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
</template>