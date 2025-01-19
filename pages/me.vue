<script setup>

definePageMeta({
    middleware: ['auth'],
})

  import axios from 'axios';
  const {data: user} =  await axios.get("/user");
  
</script>
<template>
  <p><strong>User Name:</strong> Daniel</p>
  <p><strong>User Email:</strong> test@test.com</p>
</template>
