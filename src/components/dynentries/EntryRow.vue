<template>
  <div class="form-entry-row" v-if="visibleRow">
    <EntryField v-for="(c, i) in row" :key="i" v-bind="c" class="form-entry-col"></EntryField>
  </div>
</template>

<script setup lang="ts">
import EntryField from './EntryField.vue';

const props = defineProps<{ row: any[] }>()
const entry: any = inject(_DYN_ENTRY_KEY_DATA);
const visibleRow = computed(() => {
  const row = props.row;
  for (const col of row) {
    const condition = col.visibleWhen
    if (!condition || typeof condition !== 'function')
      return true;

    if (condition(entry))
      return true;
  }

  return false;
})
</script>