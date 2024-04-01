<script setup>
const { data, pending, status } = await useLazyFetch("/api/users");
// fetch("/api/users")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     users.value = data;
//   });
</script>

<template>
  <div class="users-list">
    <template v-if="pending">users are loading</template>

    <template v-if="!pending && status === 'success'">
      <div v-for="user in data" :key="'user-' + user.id" class="user-item">
        <nuxt-link :to="`/users/${user.id}`">{{ user.name }}</nuxt-link>
      </div>
    </template>
  </div>
</template>
