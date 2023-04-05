<template>
  <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
    <li
      class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
      <span
        class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
        <Icon name="ic:round-check-circle"
          class="w-4 h-4 mr-2 sm:w-5 sm:h-5"></Icon>
        Personal <span class="hidden sm:inline-flex sm:ml-2">Info</span>
      </span>
    </li>
    <li
      class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
      <span
        class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
        <span class="mr-2">2</span>
        Account <span class="hidden sm:inline-flex sm:ml-2">Info</span>
      </span>
    </li>
    <li class="flex items-center">
      <span class="mr-2">3</span>
      Confirmation
    </li>
  </ol>
</template>