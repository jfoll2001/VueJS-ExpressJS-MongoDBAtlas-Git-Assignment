<script>

</script>

<template>
    <div>
        <div class="mt-4">
            <h3>Patient Form</h3>
            <form class="w-50 mx-auto">
                <div class="input-group mb-3">
                    <span class="input-group-text">First and last name:</span>
                    <input type="text" class="form-control" placeholder="First Name" required>
                    <input type="text" class="form-control" placeholder="Last Name" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Gender:</span>
                    <select class="form-select">
                        <option value="Male" selected>Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <span class="input-group-text">Date of Birth:</span>
                    <input type="date" class="form-control" required>
                    <span class="input-group-text">Phone:</span>
                    <input type="text" class="form-control" placeholder="xxx-xxx-xxxx" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Address:</span>
                    <input type="text" class="form-control" placeholder="Address" required>
                    <span class="input-group-text">Zip Code:</span>
                    <input type="text" class="form-control" placeholder="xxxxxx" required>
                </div>
                <button class="btn btn-primary w-25">Submit</button>
            </form>
            <hr>
        </div>
    </div>
</template>