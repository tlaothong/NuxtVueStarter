<template>
  <section class="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
    <div class="mx-auto max-w-screen-2xl px-4 lg:px-12">
      <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <div class="border-b dark:border-gray-700 mx-4">
          <div class="flex items-center justify-between space-x-4 pt-3">
            <div class="flex-1 flex items-center space-x-3">
              <h5 class="dark:text-white font-semibold">Ent(ity) Single</h5>
            </div>
          </div>
          <div v-if="EnableSearch"
            class="flex flex-col-reverse md:flex-row items-center justify-between md:space-x-4 py-3">
            <div class="w-full lg:w-2/3 flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center">
              <form class="w-full md:max-w-sm flex-1 md:mr-4">
                <label for="default-search"
                  class="text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Icon name="ic:baseline-search"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"></Icon>
                  </div>
                  <input type="search"
                    id="default-search"
                    class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search..."
                    required="true">
                  <button type="submit"
                    class="text-white absolute right-0 bottom-0 top-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-r-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Search</button>
                </div>
              </form>
              <div class="flex items-center space-x-4">
                <div>
                  <button id="filterDropdownButton"
                    data-dropdown-toggle="filterDropdown"
                    type="button"
                    class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <Icon name="ic:baseline-filter-alt"
                      class="h-5 w-5 mr-2 text-gray-400"></Icon>
                    Filter
                    <Icon name="ic:baseline-expand-more"
                      class="-mr-1 ml-1.5 w-5 h-5"></Icon>
                  </button>
                  <div id="filterDropdown"
                    class="z-10 hidden p-3 bg-white rounded-lg shadow w-56 dark:bg-gray-700">
                    <h6 class="mb-2 text-sm font-medium text-gray-900 dark:text-white">By status</h6>
                    <ul class="space-y-2 text-sm"
                      aria-labelledby="filterDropdownButton">
                      <li>
                        <label
                          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
                          <input type="checkbox"
                            value=""
                            class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                          In progress
                        </label>
                      </li>
                      <li>
                        <label
                          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
                          <input type="checkbox"
                            value=""
                            class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                          In review
                        </label>
                      </li>
                      <li>
                        <label
                          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
                          <input type="checkbox"
                            value=""
                            class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                          Completed
                        </label>
                      </li>
                      <li>
                        <label
                          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
                          <input type="checkbox"
                            value=""
                            class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                          Canceled
                        </label>
                      </li>
                    </ul>
                    <h6 class="mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">By number of users</h6>
                    <ul class="space-y-2 text-sm"
                      aria-labelledby="dropdownDefault">
                      <li>
                        <label
                          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
                          <input type="checkbox"
                            value=""
                            class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                          5-10 peoples
                        </label>
                      </li>
                      <li>
                        <label
                          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
                          <input type="checkbox"
                            value=""
                            class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                          10+ peoples
                        </label>
                      </li>
                      <li>
                        <label
                          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
                          <input type="checkbox"
                            value=""
                            class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                          More than 10 peoples
                        </label>
                      </li>
                    </ul>
                    <a href="#"
                      class="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline mt-4 ml-1.5">Apply
                      to all projects</a>
                  </div>
                </div>
                <div>
                  <button id="configurationDropdownButton"
                    data-dropdown-toggle="configurationDropdown"
                    type="button"
                    class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <Icon name="ic:baseline-settings"
                      class="h-5 w-5 mr-2 text-gray-400"></Icon>
                    Configurations
                  </button>
                  <div id="configurationDropdown"
                    class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="configurationDropdownButton">
                      <li>
                        <a href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">By
                          Category</a>
                      </li>
                      <li>
                        <a href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">By
                          Brand</a>
                      </li>
                    </ul>
                    <div class="py-1">
                      <a href="#"
                        class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Reset</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="w-full md:w-auto flex flex-col md:flex-row mb-3 md:mb-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <button type="button"
                class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                <Icon name="ic:baseline-add"
                  class="h-5 w-5 mr-2"></Icon>
                Add new task
              </button>
            </div>
          </div>
        </div>
        <div v-if="EnableSearch"
          class="mx-4 pb-3 flex flex-wrap">
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

        <NuxtPage></NuxtPage>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const EnableSearch = ref(false);

provide('searchable', EnableSearch);
</script>