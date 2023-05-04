<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-2xl pb-6 mx-auto lg:pb-8">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update user</h2>
      <FormRoot @submit="handleSubmit">
        <DynamicEntry :entry="entry"
          :schema="schema"></DynamicEntry>

        <div class="mt-4 sm:mt-6 flex items-center space-x-4">
          <button type="submit"
            class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Update
          </button>
          <button type="button"
            class="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
            <Icon name="ic:baseline-delete"
              class="w-5 h-5 mr-1.5 -ml-1"></Icon>
            Delete
          </button>
        </div>
      </FormRoot>

    </div>
  </section>
</template>

<script setup lang="ts">
import { entrySchema as schema, entryRules, useModuleStore } from '~/appModules/EntSingle';

const route = useRoute();
const router = useRouter();
const moduleStore = useModuleStore();
const savedEntry = await moduleStore.getOne(route.params.id as string);
const { data, entry } = useFormEntry(savedEntry, entryRules);
const handleSubmit = async () => {
  await moduleStore.putOne(data.value);
  router.go(-1);
}
</script>