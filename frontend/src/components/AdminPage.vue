<script>

</script>

<template>
    <div>
        <div class="container-fluid">
            <div class="card mt-5 w-25 text-center mx-auto">
                <div class="card-body">
                    <h2>Admin System</h2>
                    <div class="mt-4">
                        <RouterLink to="/doctors" class="btn btn-secondary me-5">Manage Doctors</RouterLink>
                        <RouterLink to="/users" class="btn btn-secondary">Manage Users</RouterLink>
                    </div>
                    <div class="mt-5">
                        <RouterLink to="/" class="btn btn-danger">Log Out</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>