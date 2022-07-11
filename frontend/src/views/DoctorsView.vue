<script>
import DoctorsForm from '@/components/DoctorsForm.vue'
import DoctorsTable from '@/components/DoctorsTable.vue'
import DoctorsModal from '@/components/DoctorsModal.vue'
import DoctorsSearch from '@/components/DoctorsSearch.vue'

export default {
    components: {
        DoctorsForm,
        DoctorsTable,
        DoctorsModal,
        DoctorsSearch
    },
    data() {
        return {
            url: 'http://localhost:3001',
            doctors: [],
            form: {
                fname: '',
                lname: '',
                phone: '',
                specialty: ''
            },
            editModal: null,
            toUpdate: 0
        }
    },
    methods: {
        //Loads Doctors
        getDoctors() {
            fetch(`${this.url}/loadDoctors`, {
                method: 'GET',
                success(data, status) {
                    if (status === 'success') {
                        JSON.parse(data);
                    };
                }
            })
                .then(response => response.json())
                .then(data => this.doctors = data)
        },
        //Saves Doctor
        saveDoctorHandler(doctor) {
            for (let i = 0; i < this.doctors.length; i++)
                if (this.doctors[i].lname == doctor.lname && this.doctors[i].fname == doctor.fname || this.doctors[i].phone == doctor.phone) {
                    alert('Doctor already in system or phone numbers match');
                    return;
                }
            fetch(`${this.url}/saveDoctor`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(doctor)
            })
            return;
        },
        //Opens Doctor editor with data
        editDoctorHandler(id, i) {
            this.form.fname = this.doctors[i].fname;
            this.form.lname = this.doctors[i].lname;
            this.form.phone = this.doctors[i].phone;
            this.form.specialty = this.doctors[i].specialty;
            this.toUpdate = id;
            this.editModal.show();
        },
        //Edits Doctor and Saves edited data
        updateRow() {
            var genralVal = /^[A-Za-z]+$/;
            var phoneVal = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
            if (!this.form.fname || !this.form.lname || !this.form.phone || !this.form.specialty) {
                alert("All fields need to filled out");
                return;
            } else if (!genralVal.test(this.form.fname) || !genralVal.test(this.form.lname) || !genralVal.test(this.form.specialty) || !phoneVal.test(this.form.phone)) {
                alert("One or more fields are wrong");
                return;
            }
            for (let i = 0; i < this.doctors.length; i++)
                if (this.doctors[i].lname == this.form.lname && this.doctors[i].fname == this.form.fname || this.doctors[i].phone == this.form.phone) {
                    alert('Doctor already in system, phone numbers match, or no changes made');
                    return;
                }
            fetch(`${this.url}/updateDoctor/${this.toUpdate}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.form)
            })
        },
        //Deletes Doctors
        deleteDoctorHandler(id) {
            fetch(`${this.url}/deleteDoctor/${id}`, {
                method: 'DELETE'
            })
            this.getDoctors();
        },
        //Searches Doctors
        searchDoctorHandler(searchParam) {
            let param = searchParam;
            fetch(`${this.url}/searchDoctor/${param}`, {
                method: 'GET',
                success(data, status) {
                    if (status === 'success') {
                        JSON.parse(data);
                    };
                }
            })
                .then(response => response.json())
                .then(data => this.doctors = data)
        }
    },

    mounted() {
        this.getDoctors();
        this.editModal = new bootstrap.Modal(document.querySelector('#edit-row'));
    }

}
</script>

<template>
    <title>Doctors Page</title>
    <div class="container-fluid text-center">
        <!-- Return to Admin and Login Menus -->
        <div>
            <span>Return to Admin </span>
            <RouterLink to="/admin">Menu</RouterLink>
            <span> or </span>
            <RouterLink to="/">Logout</RouterLink>
        </div>

        <!-- Doctors Form -->
        <DoctorsForm @saveDoctor="saveDoctorHandler" />

        <!-- Doctors Search -->
        <DoctorsSearch @searchDoctor="searchDoctorHandler" />

        <!-- Doctors Table -->
        <DoctorsTable :doctors="doctors" @editDoctor="editDoctorHandler" @deleteDoctor="deleteDoctorHandler" />

        <!-- Modal For Editing Doctors -->
        <DoctorsModal id="edit-row">
            <template #modal-form>
                <form @submit.prevent="updateRow">
                    <div class="input-group mb-3">
                        <span class="input-group-text">First and last name:</span>
                        <input v-model="form.fname" type="text" class="form-control" placeholder="First Name" required>
                        <input v-model="form.lname" type="text" class="form-control" placeholder="Last Name" required>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Phone:</span>
                        <input v-model="form.phone" type="text" class="form-control" placeholder="xxx-xxx-xxxx"
                            required>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Specialty:</span>
                        <input v-model="form.specialty" type="text" class="form-control" placeholder="Specialty"
                            required>
                    </div>
                    <button type="submit" class="btn btn-primary mt-3 me-5" data-bs-dismiss="modal">Save
                        changes</button>
                    <button type="button" class="btn btn-secondary mt-3 ms-5 px-5"
                        data-bs-dismiss="modal">Close</button>
                </form>
            </template>
        </DoctorsModal>
    </div>
</template>