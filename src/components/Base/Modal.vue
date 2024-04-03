<template>
  <div
    v-if="isVisible"
    class="modal-backdrop flex items-center justify-center"
    tabindex="-1"
    aria-modal="true"
    role="dialog"
    aria-labelledby="modalTitle"
    ref="modalRef"
  >
    <div class="inline-flex flex-col items-center justify-center" ref="modalContent">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, defineProps, defineEmits } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
    required: true
  }
})

const emits = defineEmits(['close'])

const focusableElementsString =
  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'
let focusableElements: Array<HTMLElement> = []
let firstFocusableElement: HTMLElement | null = null
let lastFocusableElement: HTMLElement | null = null
const modalRef = ref<HTMLElement | null>(null)
const modalContent = ref<HTMLDivElement | null>(null)

const trapFocus = (event: KeyboardEvent) => {
  if (event.key === 'Escape') closeModal()
  if (event.key !== 'Tab') return
  // If shift key pressed for shift + tab combination
  if (event.shiftKey) {
    if (document.activeElement === firstFocusableElement) {
      lastFocusableElement?.focus()
      event.preventDefault()
    }
  } else {
    // if tab key is pressed
    console.log(document.activeElement)
    if (document.activeElement === lastFocusableElement) {
      firstFocusableElement?.focus()
      event.preventDefault()
    }
  }
}

watch(
  () => props.isVisible,
  (newValue) => {
    if (newValue) {
      setTimeout(() => {
        focusableElements = Array.from(
          modalRef.value?.querySelectorAll(focusableElementsString) || []
        )
        firstFocusableElement = focusableElements[0]
        lastFocusableElement = focusableElements[focusableElements.length - 1]
      }, 100)
    }
  }
)

const closeModal = () => {
  emits('close')
}

onClickOutside(modalContent, () => closeModal())

onMounted(() => {
  document.addEventListener('keydown', trapFocus)
})

onUnmounted(() => {
  document.removeEventListener('keydown', trapFocus)
})
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  min-height: 100vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
}
</style>
