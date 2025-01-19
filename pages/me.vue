<script setup>

definePageMeta({
    middleware: ['auth'],
})

  const {user} = useAuth();
  
</script>
<template>
  <p><strong>First Name:</strong> {{ user.first_name }}</p>
  <p><strong>Last Name:</strong> {{ user.last_name }}</p>
  <p><strong>Membership Number:</strong> {{ user.membership_number }}</p>
  <p><strong>email:</strong> {{ user.email }}</p>
</template>
