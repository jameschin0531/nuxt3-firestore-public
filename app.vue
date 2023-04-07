<template>
  <div>
    <NuxtPage v-if="firebaseUser" />
    <Login v-else />
  </div>
</template>

<script setup>
const firebaseUser = useFirebaseUser();
</script>
