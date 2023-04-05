<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <div class="flex items-center space-x-4">
        <img class="mb-4 w-16 h-16 rounded-full sm:w-20 sm:h-20"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
          alt="Helene avatar">
        <div>
          <h2 class="flex items-center mb-2 text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">
            Helene Engels
            <span
              class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 uppercase ml-2.5">Pro</span>
          </h2>
          <span
            class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 mb-4 sm:mb-5">
            <svg class="mr-1 w-3 h-3"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
              <path fill-rule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clip-rule="evenodd"></path>
            </svg>
            Moderator
          </span>
        </div>
      </div>

      <NuxtPage></NuxtPage>

    </div>
  </section>
</template>