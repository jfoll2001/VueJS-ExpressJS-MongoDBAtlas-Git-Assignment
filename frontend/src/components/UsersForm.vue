<script>

</script>


<template>
    <div>
        <button class="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Admin</button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Admin Form</h5>
                    </div>
                    <div class="modal-body">
                        <form>
                            <p class="mb-1">Admin Name</p>
                            <input type="text" class="form-control mb-3" placeholder="Admin Name" required>
                            <p class="mb-1">Password</p>
                            <input type="password" class="form-control mb-3" placeholder="Password" required>
                            <p class="mb-1">Re-enter Password</p>
                            <input type="password" class="form-control mb-3" placeholder="Re-enter Password" required>
                            <button class="btn btn-primary mb-3 px-3">Save changes</button>
                        </form>
                        <button type="button" class="btn btn-danger px-5" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>