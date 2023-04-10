<template>
  <div class="w-full">
    <label :for="uuid"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      {{ label }}
    </label>
    <GrowTextarea
      :model-value="modelValue"
      @update:model-value="emits('update:modelValue', $event)"
      :id="uuid"
      rows="4"
      :placeholder="placeholder"></GrowTextarea>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ label: string, modelValue: string, uuid: string, placeholder?: string }>();
const emits = defineEmits(['update:modelValue']);

const handleInput = ($ev: any) => {
  emits('update:modelValue', $ev.target.value);
}
</script>

<style>
.grow-wrap {
  padding: 0px;
}
</style>