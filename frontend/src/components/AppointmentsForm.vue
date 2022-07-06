<script>

</script>

<template>
    <div>
        <h3 class="mt-4">Appointments Form</h3>
        <form class="w-50 mx-auto">
            <div class="input-group mb-3">
                <span class="input-group-text">Patient:</span>
                <select class="form-select" required></select>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Doctor:</span>
                <select class="form-select" required></select>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Location:</span>
                <input type="text" class="form-control" required>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Date and Time:</span>
                <input type="date" class="form-control" required>
                <input type="time" class="form-control" required>
            </div>
            <button class="btn btn-primary w-25">Submit</button>
        </form>
        <hr>
    </div>
</template>