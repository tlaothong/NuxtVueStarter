<template>
  <div>
    <h2 class="py-4 lg:py-8 text-xl text-center font-bold text-gray-900 dark:text-white">Create an Entity</h2>

    <div class="px-4 w-full mx-auto max-w-3xl">
      <FlowStepper></FlowStepper>
    </div>

    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new user</h2>
        <FormRoot @submit="handleSubmit">
          <DynamicEntry :entry="entry"
            :schema="schema"></DynamicEntry>
          <button type="submit"
            class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            Add user
          </button>
        </FormRoot>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { entrySchema as schema, entryRules, entryInitial, useModuleStore } from '~/appModules/EntSingle';

const { data, entry } = useFormEntry(entryInitial, entryRules);

const moduleStore = useModuleStore();
const handleSubmit = async () => {
  const newid = await moduleStore.addOne(data.value);
  navigateTo(`/EntSingle/${newid}`);
}
</script>