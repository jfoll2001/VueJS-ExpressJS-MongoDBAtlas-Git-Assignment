<script>

</script>

<template>
    <div>
        <div class="container-fluid">
            <div class="card mt-5 w-25 text-center mx-auto">
                <div class="card-body">
                    <h2>Staff Home</h2>
                    <div class="mt-4 mb-4">
                        <RouterLink to="/patients" class="btn btn-secondary">Manage Patients</RouterLink>
                    </div>
                    <RouterLink to="/appointments" class="btn btn-secondary">Manage Appointments</RouterLink>
                    <div class="mt-4">
                        <RouterLink to="/" class="btn btn-danger">Log Out</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>