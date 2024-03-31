<template>
  <BaseModal :is-visible="show" @close="$emit('close')">
    <div class="w-full bg-white rounded-lg p-10">
      <h1 id="modalTitle" class="pb-4 text-bold">Delete board modal</h1>
      <p>Are you sure you want to delete this board?</p>
      <div class="mt-6 flex items-center justify-between">
        <button class="bg-red-500 text-white focus:bg-red-900 py-2 px-8 rounded">Yes</button>
        <button class="bg-blue-500 text-white focus:bg-blue-900 py-2 px-8 rounded">No</button>
      </div>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import { defineModel, defineEmits } from 'vue'
import BaseModal from '../components/Base/Modal.vue'
defineEmits(['close'])
const show = defineModel({ type: Boolean, default: false })
</script>
