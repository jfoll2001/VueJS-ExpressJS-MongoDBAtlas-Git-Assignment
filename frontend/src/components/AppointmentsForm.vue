<script>
export default {
    data() {
        return {
            appointment: {
                status: 'Open',
                location: '',
                doctor: '',
                patient: '',
                date: '',
                time: ''
            }
        }
    },
    props: ['patients', 'doctors'],
    methods: {
        saveAppoint() {
            this.$emit('saveAppoint', this.appointment);
        }
    }
}
</script>

<template>
    <div>
        <h3 class="mt-4">Appointments Form</h3>
        <form class="w-50 mx-auto">
            <div class="input-group mb-3">
                <span class="input-group-text">Patient:</span>
                <select v-model="appointment.patient" class="form-select" required>
                    <option v-for="patient in patients">{{ patient.fname }} {{ patient.lname }}</option>
                </select>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Doctor:</span>
                <select v-model="appointment.doctor" class="form-select" required>
                    <option v-for="doctor in doctors">{{ doctor.fname }} {{ doctor.lname }}</option>
                </select>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Location:</span>
                <input v-model="appointment.location" type="text" class="form-control" required>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Date and Time:</span>
                <input v-model="appointment.date" type="date" class="form-control" required>
                <input v-model="appointment.time" type="time" class="form-control" required>
            </div>
            <button @click="saveAppoint" class="btn btn-primary w-25">Submit</button>
        </form>
        <hr>
    </div>
</template>