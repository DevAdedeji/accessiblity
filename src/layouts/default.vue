<template>
  <main class="px-4 pt-4">
    <RouterLink to="/">Back to home</RouterLink>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>
