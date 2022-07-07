<script>
import PatientsForm from '@/components/PatientsForm.vue'
import PatientsTable from '@/components/PatientsTable.vue'
import PatientsSearch from '@/components/PatientsSearch.vue'
import PatientsModal from '@/components/PatientsModal.vue'

export default {
    components: {
        PatientsForm,
        PatientsSearch,
        PatientsTable,
        PatientsModal
    },
    data() {
        return {
            url: 'http://localhost:3001',
            patients: [],
            form: {
                fname: '',
                lname: '',
                sex: '',
                dateofbirth: '',
                phone: '',
                address: '',
                zipcode: ''
            },
            editModal: null,
            toUpdate: 0
        }
    },
    methods: {
        //Displays patient data
        getPatients() {
            fetch(`${this.url}/loadPatients`, {
                method: 'GET',
                success(data, status) {
                    if (status === 'success') {
                        JSON.parse(data)
                    };
                }
            })
                .then(response => response.json())
                .then(data => this.patients = data)
        },
        //Saves patient
        savePatientHandler(patient) {
            fetch(`${this.url}/savePatient`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(patient),
                success(status) {
                    if (status === 'success') {
                        alert("Patient added successfully");
                    };
                }
            })
        },
        //Opens patient editor
        editPatientHandler(id, i) {
            this.form.fname = this.patients[i].fname;
            this.form.lname = this.patients[i].lname;
            this.form.sex = this.patients[i].sex;
            this.form.dateofbirth = this.patients[i].dateofbirth;
            this.form.phone = this.patients[i].phone;
            this.form.address = this.patients[i].address;
            this.form.zipcode = this.patients[i].zipcode;
            this.toUpdate = id;
            this.editModal.show();
        },
        //Edits patient
        updateRow() {            
            fetch(`${this.url}/updatePatient/${this.toUpdate}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.form)
            })
        },
        //Deletes patient
        deletePatientHandler(id) {
            fetch(`${this.url}/deletePatient/${id}`, {
                method: 'DELETE'
            })
            this.getPatients();
        },
        //Searches patients
        searchPatientHandler(searchParam) {
            let param = searchParam;
            fetch(`${this.url}/searchPatient/${param}`, {
                method: 'GET',
                success(data, status) {
                    if (status === 'success') {
                        JSON.parse(data);
                    };
                }
            })
                .then(response => response.json())
                .then(data => this.patients = data)
        }
    },
    mounted() {
        this.getPatients();
        this.editModal = new bootstrap.Modal(document.querySelector('#edit-row'));
    }
}
</script>

<template>
    <title>Patients Page</title>
    <div class="container-fluid text-center">
        <!-- Return to Staff and Logn in Menus -->
        <div>
            <span>Return to Staff </span>
            <RouterLink to="/staff">Menu</RouterLink>
            <span> or </span>
            <RouterLink to="/">Logout</RouterLink>
        </div>

        <!-- Patient Form -->
        <PatientsForm @savePatient="savePatientHandler" />

        <!-- Patient Search -->
        <PatientsSearch @searchPatient="searchPatientHandler" />

        <!-- Patient Table -->
        <PatientsTable :patients="patients" @editPatient="editPatientHandler"  @deletePatient="deletePatientHandler"/>

        <!-- Patient Modal -->
        <PatientsModal id="edit-row">
            <template #modal-form>
                <form @submit.prevent="updateRow">
                    <div class="input-group mb-3">
                        <span class="input-group-text">First and last name:</span>
                        <input v-model="form.fname" type="text" class="form-control" placeholder="First Name" required>
                        <input v-model="form.lname" type="text" class="form-control" placeholder="Last Name" required>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Gender:</span>
                        <select v-model="form.sex" class="form-select" required>
                            <option value="Male" selected>Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Date of Birth:</span>
                        <input v-model="form.dateofbirth" type="date" class="form-control" required>
                        <span class="input-group-text">Phone:</span>
                        <input v-model="form.phone" type="text" class="form-control" placeholder="xxx-xxx-xxxx"
                            required>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Address:</span>
                        <input v-model="form.address" type="text" class="form-control" placeholder="Address" required>
                        <span class="input-group-text">Zip Code:</span>
                        <input v-model="form.zipcode" type="text" class="form-control" placeholder="xxxxxx" required>
                    </div>
                    <button type="submit" class="btn btn-primary mt-3 me-5" data-bs-dismiss="modal">Save
                        changes</button>
                    <button type="button" class="btn btn-secondary mt-3 ms-5 px-5"
                        data-bs-dismiss="modal">Close</button>
                </form>
            </template>
        </PatientsModal>
    </div>
</template>