<template>
  <dl>
    <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Biography</dt>
    <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">UI/UX Designer, Creating things that stand
      out, Featured by Adobe, Figma, Webflow and others, Daily design tips & resources, Exploring Web3.
    </dd>
    <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">First Name</dt>
    <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{{ data.fname }}</dd>
    <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Last Name</dt>
    <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{{ data.lname }}</dd>
  </dl>
</template>

<script setup lang="ts">
import { useModuleStore } from '~/appModules/EntSingle';
const route = useRoute();
const moduleStore = useModuleStore();
const data = await moduleStore.getEntity(route.params.id);
</script>