<script setup>
defineOptions({
  name: "DetailUser",
  inheritAttrs: false,
});
const route = useRoute();

const { data, pending, error, status } = await useFetch("/api/users/" + route.params.id);

// console.log(error.statusCode);
if (error?.value?.cause?.statusCode === 404) {
  throw createError({ statusCode: 404, statusMessage: "User not found" });
}
</script>

<template>
  <div class="detail-user">
    <template v-if="pending">user data is loading... </template>

    <template v-if="!pending && status === 'success'">
      <h1>{{ data.name }}</h1>

      <a :href="`mailto:${data.email}`">{{ data.email }}</a>
    </template>

    <template v-if="error">
      <h1>404 - User Not Found</h1>
      <p>The user you requested could not be found.</p>
      <a href="/">Go back home</a>
    </template>
  </div>
</template>
