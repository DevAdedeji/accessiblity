<template>
  <div class="w-full h-screen flex items-center justify-center">
    <button
      @click="openModal = true"
      aria-haspopup="true"
      aria-controls="delete-modal-menu"
      class="bg-blue-500 text-white p-4 rounded-md"
    >
      Open Modal
    </button>
    <DeleteModal id="delete-modal-menu" v-model="openModal" @close="openModal = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DeleteModal from '../components/DeleteModal.vue'
const openModal = ref(false)
</script>
