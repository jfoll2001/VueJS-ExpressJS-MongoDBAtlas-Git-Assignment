<script>
export default {
    data() {
        return {
            patient: {
                fname: '',
                lname: '',
                sex: '',
                dateofbirth: '',
                phone: '',
                address: '',
                zipcode: ''
            }
        }
    },
    methods: {
        savePatient() {
            var p = this.patient;
            var genralVal = /^[A-Za-z]+$/;
            var phoneVal = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
            var zipVal = /^[0-9]{6}$/;
            if (!p.fname || !p.lname || !p.sex || !p.dateofbirth || !p.phone || !p.address || !p.zipcode) {
                alert("All fields need to be filled out");
                return;
            } else if (!genralVal.test(p.fname) || !genralVal.test(p.lname) || !phoneVal.test(p.phone) || !zipVal.test(p.zipcode)) {
                alert("One or more fields are wrong");
                return;
            }
            this.$emit('savePatient', this.patient);
        }
    }
}
</script>

<template>
    <div>
        <div class="mt-4">
            <h3>Patient Form</h3>
            <form class="w-50 mx-auto">
                <div class="input-group mb-3">
                    <span class="input-group-text">First and last name:</span>
                    <input v-model="patient.fname" type="text" class="form-control" placeholder="First Name" required>
                    <input v-model="patient.lname" type="text" class="form-control" placeholder="Last Name" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Gender:</span>
                    <select v-model="patient.sex" class="form-select" required>
                        <option value="Male" selected>Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <span class="input-group-text">Date of Birth:</span>
                    <input v-model="patient.dateofbirth" type="date" class="form-control" required>
                    <span class="input-group-text">Phone:</span>
                    <input v-model="patient.phone" type="text" class="form-control" placeholder="xxx-xxx-xxxx" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Address:</span>
                    <input v-model="patient.address" type="text" class="form-control" placeholder="Address" required>
                    <span class="input-group-text">Zip Code:</span>
                    <input v-model="patient.zipcode" type="text" class="form-control" placeholder="xxxxxx" required>
                </div>
                <button @click="savePatient" class="btn btn-primary w-25">Submit</button>
            </form>
            <hr>
        </div>
    </div>
</template>