<template>
  <div>
    <dl>
      <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Biography</dt>
      <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">UI/UX Designer, Creating things that stand
        out, Featured by Adobe, Figma, Webflow and others, Daily design tips & resources, Exploring Web3.
      </dd>
      <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Location</dt>
      <dd class="flex items-center mb-4 text-gray-900 sm:mb-5 dark:text-white">
        <svg class="w-4 h-4 mr-1.5 text-gray-400 dark:text-gray-500"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clip-rule="evenodd"></path>
        </svg>
        <span class="font-medium">California, United States of America</span>
      </dd>
    </dl>
    <div class="flex items-center space-x-4">
      <button type="button"
        @click="navigateTo('/EntSingle/id123/edit')"
        class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        <Icon name="ic:round-edit"
          class="mr-1.5 -ml-1 w-5 h-5"></Icon>
        Edit
      </button>
      <button type="button"
        @click="navigateTo('/EntSingle/id123/fullinfo')"
        class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        <Icon name="ic:outline-info"
          class="mr-1.5 -ml-1 w-5 h-5"></Icon>
        Information
      </button>
      <button type="button"
        class="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
        <Icon name="ic:baseline-delete"
          class="w-5 h-5 mr-1.5 -ml-1"></Icon>
        Delete
      </button>
    </div>
  </div>
</template>