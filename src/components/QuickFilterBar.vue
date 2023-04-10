<template>
  <div class="mx-4 pb-3 flex flex-wrap">
    <div class="hidden md:flex items-center text-sm font-medium text-gray-900 dark:text-white mr-4 mt-3">Show only:
    </div>
    <div class="flex flex-wrap">
      <div class="flex items-center mt-3 mr-4">
        <input id="all-tasks"
          type="radio"
          value=""
          name="show-only"
          class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="all-tasks"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">All</label>
      </div>
      <div class="flex items-center mr-4 mt-3">
        <input id="completed"
          type="radio"
          value=""
          name="show-only"
          class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="completed"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Completed tasks</label>
      </div>
      <div class="flex items-center mr-4 mt-3">
        <input id="in-progress"
          type="radio"
          value=""
          name="show-only"
          class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="in-progress"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tasks in progress</label>
      </div>
      <div class="flex items-center mr-4 mt-3">
        <input id="in-review"
          type="radio"
          value=""
          name="show-only"
          class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="in-review"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tasks in review</label>
      </div>
    </div>
  </div>
</template>