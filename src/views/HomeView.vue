<template>
  <main class="w-full min-h-screen flex items-center justify-center">
    <div class="flex flex-col items-center gap-4">
      <h1 class="text-xl text-center underline">Components</h1>
      <ol class="flex flex-col gap-2 list-decimal">
        <li class="hover:text-blue-500"><RouterLink to="/modal">Modal</RouterLink></li>
        <li class="hover:text-blue-500"><RouterLink to="/select-menu">SelectMenu</RouterLink></li>
      </ol>
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
