<template>
  <aside aria-label="Related articles"
    class="py-8 lg:py-12 bg-white dark:bg-gray-900">
    <div class="px-4 mx-auto max-w-screen-xl">
      <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">What can I do for you?</h2>
      <article class="flex">
        <NuxtLink href="#"
          class="shrink-0">
          <img src="/imgs/search.jpg"
            class="mr-5 w-32 h-32 max-w-full align-middle rounded-full"
            alt="Image 3">
        </NuxtLink>
        <div class="flex flex-col justify-center">
          <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <NuxtLink href="#">Search</NuxtLink>
          </h2>
          <p class="mb-2 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many
            changes! After months of preparation.</p>
          <NuxtLink href="#"
            class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
            I want this
          </NuxtLink>
        </div>
      </article>
      <article class="flex mt-8">
        <NuxtLink to="EntSingle/list"
          class="shrink-0">
          <img src="/imgs/list.jpg"
            class="mr-5 w-32 h-32 max-w-full align-middle rounded-full"
            alt="Image 2">
        </NuxtLink>
        <div class="flex flex-col justify-center">
          <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <NuxtLink to="/EntSingle/list">List Data</NuxtLink>
          </h2>
          <p class="mb-2 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many
            changes! After months of preparation.</p>
          <NuxtLink to="EntSingle/list"
            class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
            I want this
          </NuxtLink>
        </div>
      </article>
      <article class="flex mt-8">
        <a href="#"
          class="shrink-0">
          <img src="/imgs/newone.jpg"
            class="mr-5 w-32 h-32 max-w-fullalign-middle rounded-full"
            alt="Image 1">
        </a>
        <div class="flex flex-col justify-center">
          <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="#">Create a New One</a>
          </h2>
          <p class="mb-2 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many
            changes! After months of preparation.</p>
          <a href="#"
            class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
            I want this
          </a>
        </div>
      </article>
    </div>
  </aside>
</template>