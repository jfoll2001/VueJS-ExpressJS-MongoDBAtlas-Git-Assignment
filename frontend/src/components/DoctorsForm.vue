<script>

</script>

<template>
    <div>        
        <div class="mt-4">
            <h3>Add Doctors</h3>
            <form class="w-50 mx-auto">
                <div class="input-group mb-3">
                    <span class="input-group-text">First and last name:</span>
                    <input type="text" class="form-control" placeholder="First Name" required>
                    <input type="text" class="form-control" placeholder="Last Name" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Phone:</span>
                    <input type="text" class="form-control" placeholder="xxx-xxx-xxxx" required>
                    <span class="input-group-text">Specialty:</span>
                    <input type="text" class="form-control" placeholder="Specialty" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Password:</span>
                    <input type="password" class="form-control" placeholder="Password" required>
                    <span class="input-group-text">Re-enter Password:</span>
                    <input type="password" class="form-control" placeholder="Re-enter Password" required>
                </div>
                <button class="btn btn-primary w-25">Submit</button>
            </form>
            <hr>
        </div>
    </div>
</template>