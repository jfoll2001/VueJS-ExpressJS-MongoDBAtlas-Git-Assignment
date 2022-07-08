<script>
import AppointmentsForm from '@/components/AppointmentsForm.vue'
import AppointmentsSearch from '@/components/AppointmentsSearch.vue'
import AppointmentsTable from '@/components/AppointmentsTable.vue'
import AppointmentsModal from '@/components/AppointmentsModal.vue'

export default {
    components: {
        AppointmentsForm,
        AppointmentsSearch,
        AppointmentsTable,
        AppointmentsModal
    },
    data() {
        return {
            url: 'http://localhost:3001',
            appoints: [],
            form: {
                status: '',
                location: '',
                doctor: '',
                patient: '',
                date: '',
                time: ''
            },
            editModal: null,
            toUpdate: 0,
            doctors: [],
            patients: []
        }
    },
    methods: {
        //Gets all of the appointments
        getAppionts() {
            fetch(`${this.url}/loadAppoints`, {
                method: 'GET',
                success(data, status) {
                    if (status === 'status') {
                        JSON.parse(data);
                    };
                }
            })
                .then(response => response.json())
                .then(data => this.appoints = data)
        },
        //Gets patients and doctors for the form 
        getDocPatient() {
            fetch(`${this.url}/loadDoctors`, {
                method: 'GET',
                success(data, status) {
                    if (status === 'status') {
                        JSON.parse(data);
                    };
                }
            })
                .then(response => response.json())
                .then(data => this.doctors = data)

            fetch(`${this.url}/loadPatients`, {
                method: 'GET',
                success(data, status) {
                    if (status === 'status') {
                        JSON.parse(data);
                    };
                }
            })
                .then(response => response.json())
                .then(data => this.patients = data)
        },
        //Saves appointment
        saveAppointHandler(appointment) {
            fetch(`${this.url}/saveAppoint`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(appointment)
            })
        },
        //Opens appointment editor
        editApointsHandler(id, i) {
            this.form.date = this.appoints[i].date;
            this.form.doctor = this.appoints[i].doctor;
            this.form.location = this.appoints[i].location;
            this.form.patient = this.appoints[i].patient;
            this.form.status = this.appoints[i].status;
            this.form.time = this.appoints[i].time;
            this.toUpdate = id;
            this.editModal.show();
        },
        //Edits appointment
        updateRow() {
            fetch(`${this.url}/updateAppoint/${this.toUpdate}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.form)
            })
            this.getAppionts();
        },
        //Deletes appointment
        deleteApointsHandler(id) {
            fetch(`${this.url}/deleteAppoint/${id}`, {
                method: 'DELETE'
            })
            this.getAppionts();
        },
        //Searches appointments
        searchAppointHandler(searchParam) {
            let param = searchParam;
            fetch(`${this.url}/searchAppoint/${param}`, {
                method: 'GET',
                success(data, status) {
                    if (status === 'status') {
                        JSON.parse(data);
                    };
                }
            })
                .then(response => response.json())
                .then(data => this.appoints = data)
        }
    },
    mounted() {
        this.getAppionts();
        this.getDocPatient();
        this.editModal = new bootstrap.Modal(document.querySelector('#edit-row'));
    }
}
</script>

<template>
    <title>Appointments Page</title>
    <div class="container-fluid text-center">
        <!-- Return to Staff and Logn in Menus -->
        <div>
            <span>Return to Staff </span>
            <RouterLink to="/staff">Menu</RouterLink>
            <span> or </span>
            <RouterLink to="/">Logout</RouterLink>
        </div>

        <!-- Appointment Form -->
        <AppointmentsForm :doctors="doctors" :patients="patients" @saveAppoint="saveAppointHandler" />

        <!-- Appointment Seach -->
        <AppointmentsSearch @searchAppoint="searchAppointHandler" />
        <!-- Appointment Table -->
        <AppointmentsTable :appoints="appoints" @editApoint="editApointsHandler" @deleteApoint="deleteApointsHandler" />

        <!-- Appointment Modal -->
        <AppointmentsModal id="edit-row">
            <template #modal-form>
                <form @submit.prevent="updateRow">
                    <div class="input-group mb-3">
                        <span class="input-group-text">Doctor:</span>
                        <select v-model="form.doctor" class="form-select" required>
                            <option v-for="doctor in doctors">{{ doctor.fname }} {{ doctor.lname }}</option>
                        </select>
                    </div>
                    <div class="input-group mb-3">
                        <select v-model="form.status" class="form-select" required>
                            <option value="Open">Open</option>
                            <option value="Closed">Closed</option>
                            <option value="Delayed">Delayed</option>
                            <option value="Missed">Missed</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Location:</span>
                        <input v-model="form.location" type="text" class="form-control" required>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Date and Time:</span>
                        <input v-model="form.date" type="date" class="form-control" required>
                        <input v-model="form.time" type="time" class="form-control" required>
                    </div>
                    <button type="submit" class="btn btn-primary mt-3 me-5" data-bs-dismiss="modal">Save
                        changes</button>
                    <button type="button" class="btn btn-secondary mt-3 ms-5 px-5"
                        data-bs-dismiss="modal">Close</button>
                </form>
            </template>
        </AppointmentsModal>
    </div>
</template>