<template>
  <EntryRow class="gap-4 sm:gap-6 mt-4" v-for="(row, i) in finalSchema" :row="row"></EntryRow>
</template>

<script setup lang="ts">
import EntryRow from './dynentries/EntryRow.vue';

const props = defineProps<{ schema: Object | Object[], entry: Object, scope?: string }>()
const parsedSchema = parseFormSchema(props.schema);
const finalSchema = remapFormUuid(parsedSchema);

const { getErrors } = getFormEntryStatus(props.entry as Ref<Object>, props.scope);
provide(_DYN_ENTRY_KEY_GET_ERRORS, getErrors);
provide(_DYN_ENTRY_KEY_DATA, props.entry);
</script>

<style scoped>
.form-entry-row {
  display: flex;
}
</style>