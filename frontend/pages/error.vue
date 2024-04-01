<template>
    <div class="error-page">
      <h1>{{ statusCode === 404 ? 'Page not found' : 'Oops, something went wrong!' }}</h1>
      <p>{{ error.message }}</p>
    </div>
</template>

<script>
export default {
  props: {
    error: Object
  }
}
</script>

<style scoped>
.error-page {
  text-align: center;
  margin: 50px auto;
}
</style>