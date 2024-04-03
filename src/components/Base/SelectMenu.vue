<template>
  <div class="relative min-w-[200px]">
    <button
      class="w-full h-8 rounded border border-gray-400 px-2 flex items-center justify-between text-sm cursor-pointer"
      @click="showOptions = !showOptions"
      aria-haspopup="true"
      :aria-expanded="showOptions"
      id="menu-trigger"
    >
      <p v-if="selected">{{ selected }}</p>
      <p v-else class="opacity-70">Select an option</p>
      <img src="../../assets/down.svg" />
    </button>
    <div
      v-if="showOptions"
      class="absolute left-0 right-0 top-10 bg-gray-200 rounded h-[400px] max-h-[200px] overflow-hidden shadow-lg"
      ref="optionsRef"
      aria-live="polite"
    >
      <ul class="flex flex-col overflow-y-auto h-full px-2" role="menu">
        <li v-for="option in options" :key="option" class="py-1">
          <button
            class="w-full text-sm hover:bg-gray-300 focus:bg-gray-300 py-1"
            @click="selectOption(option)"
            @keydown.enter="selectOption(option)"
            ref="optionRef"
            role="option"
          >
            {{ option }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
// import { onClickOutside } from '@vueuse/core'

const showOptions = ref(false)
const selected = ref('')
const focusedOptionIndex = ref(-1)
const options = ref([
  'aiLIwKZe',
  'QdYUi',
  'PnpAg',
  'gBkaMO',
  'WNxtPxAJi',
  'mZAvJJ',
  'yrAEIFKA',
  'GtfbG',
  'epyUom',
  'XAavdcLc',
  'PpLZHCM',
  'corwhZq',
  'LoHPbWW',
  'dkzigbOL',
  'vmEySgHQ',
  'ogvipoMtOy',
  'kRNmCYzKg',
  'qhSQXrX',
  'WqlzzAeRB',
  'HyfDau',
  'YNUQqOCyO',
  'lNnWHd',
  'YhvTUmptTz',
  'QElLir',
  'YewCEji',
  'EiWnQDXqdD',
  'qDZtwpIRmg',
  'kSnET',
  'jiAKqr',
  'pWJOeOWcf'
])
const selectOption = (option: any) => {
  selected.value = option
  showOptions.value = false
  focusedOptionIndex.value = -1
}

const optionsRef = ref<HTMLElement | null>(null)
// onClickOutside(optionsRef, () => (showOptions.value = false))

const optionRef = ref<HTMLElement[]>([])

const trapFocus = (event: KeyboardEvent) => {
  if (showOptions.value) {
    if (event.key === 'Escape') showOptions.value = false
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault()
      focusedOptionIndex.value = Math.max(focusedOptionIndex.value - 1, 0)
    }
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault()
      focusedOptionIndex.value = Math.min(focusedOptionIndex.value + 1, options.value.length - 1)
    }
  }
}

watch(focusedOptionIndex, (newIndex) => {
  if (newIndex === optionRef.value.length - 1) {
    focusedOptionIndex.value = 0
    optionRef.value[0].focus()
  }
  if (newIndex >= 0 && optionRef.value[newIndex]) {
    optionRef.value[newIndex].focus()
  }
})

onMounted(() => {
  window.addEventListener('keydown', trapFocus)
})
</script>
