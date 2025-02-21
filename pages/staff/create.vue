<script setup>

definePageMeta({
 
    middleware: ['auth'],
 
  });

  import axios from "axios";


  const form = ref({
    membership_number: "",
    payroll_number: "",
    first_name: "",
    last_name: "",
    gender: "",
    marital_status: "",
    location: "",
    date_of_birth: "",
    phone_number_1: "",
    phone_number_2: "",
    email: "",
    nationality: "",
    date_of_application: "",
  })
  
  const {user} = useAuth();

  const resp = await axios.get('/locations');
  const locations = resp.data
 
</script>
<template>
    


</template>