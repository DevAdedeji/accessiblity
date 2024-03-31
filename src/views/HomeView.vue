<template>
  <main class="w-full min-h-screen flex items-center justify-center">
    <div class="flex flex-col items-center gap-4">
      <h1 class="text-xl text-center underline">Components</h1>
      <ul class="flex flex-col items-center gap-2 list-disc">
        <li><RouterLink to="/modal" class="hover:text-blue-500">Modal</RouterLink></li>
      </ul>
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
