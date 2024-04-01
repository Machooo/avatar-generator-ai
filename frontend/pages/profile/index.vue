<script setup>
definePageMeta({
  middleware: [
    function (to, from) {
      // Custom inline middleware
    },
    "auth",
  ],
});
</script>

<template>
    <div class="auth-page auth-page--user">
        USER
    </div>
</template>