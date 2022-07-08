<script>
export default {
    data() {
        return {
            doctor: {
                fname: '',
                lname: '',
                phone: '',
                specialty: ''
            }
        }
    },
    methods: {
        saveDoctor() {
            var genralVal = /^[A-Za-z]+$/;
            var phoneVal = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
            if (!this.doctor.fname || !this.doctor.lname || !this.doctor.phone || !this.doctor.specialty) {
                alert("All fields need to filled out");
                return;
            } else if (!genralVal.test(this.doctor.fname) || !genralVal.test(this.doctor.lname) || !genralVal.test(this.doctor.specialty) || !phoneVal.test(this.doctor.phone)) {
                alert("One or more fields are wrong");
                return;
            }
            this.$emit('saveDoctor', this.doctor);
        }
    }
}
</script>

<template>
    <div>
        <div class="mt-4">
            <h3>Add Doctors</h3>
            <form class="w-50 mx-auto">
                <div class="input-group mb-3">
                    <span class="input-group-text">First and last name:</span>
                    <input v-model="doctor.fname" type="text" class="form-control" placeholder="First Name" required>
                    <input v-model="doctor.lname" type="text" class="form-control" placeholder="Last Name" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Phone:</span>
                    <input v-model="doctor.phone" type="text" class="form-control" placeholder="xxx-xxx-xxxx" required>
                    <span class="input-group-text">Specialty:</span>
                    <input v-model="doctor.specialty" type="text" class="form-control" placeholder="Specialty" required>
                </div>
                <button @click="saveDoctor" class="btn btn-primary w-25">Submit</button>
            </form>
            <hr>
        </div>
    </div>
</template>