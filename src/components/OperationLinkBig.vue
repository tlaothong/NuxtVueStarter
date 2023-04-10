<template>
  <article class="flex">
    <NuxtLink to="EntSingle/list"
      class="shrink-0">
      <img :src="imgSrc"
        class="mr-5 w-32 h-32 max-w-full align-middle rounded-full"
        alt="Image 2">
    </NuxtLink>
    <div class="flex flex-col justify-center">
      <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
        <NuxtLink to="/EntSingle/list">{{ title }}</NuxtLink>
      </h2>
      <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
        <slot>Text description for the operation</slot>
      </p>
      <NuxtLink to="EntSingle/list"
        class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
        I want this
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{ imgSrc: string, title: string }>();
</script>