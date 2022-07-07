<script setup>
defineProps({
    id: String
})
</script>

<template>
    <div>
        <div :id="id" class="modal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Edit Doctor</h5>
                    </div>
                    <div class="modal-body">
                        <slot name="modal-form">

                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>