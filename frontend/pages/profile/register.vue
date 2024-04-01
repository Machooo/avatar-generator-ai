<script setup>
const rawResponse = await fetch("/", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ a: 1, b: "Textual content" }),
});

const content = await rawResponse.json();
</script>

<template>
  <div class="auth-page auth-page--register">REGISTER</div>
</template>
