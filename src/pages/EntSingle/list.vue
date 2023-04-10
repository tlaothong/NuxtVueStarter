<template>
  <div>

    <ClientOnly>
      <Teleport to="#module-top-bar">
        <div class="flex flex-col-reverse md:flex-row items-center justify-between md:space-x-4 py-3">
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
              @click="navigateTo('/EntSingle/newone')"
              class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
              <Icon name="ic:baseline-add"
                class="h-5 w-5 mr-2"></Icon>
              Add new
            </button>
          </div>
        </div>
      </Teleport>
    </ClientOnly>

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

    <Suspense>

      <InfoList></InfoList>

      <template #fallback>
        Loading ...
      </template>
    </Suspense>

    <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
      aria-label="Table navigation">
      <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
        Showing
        <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
        of
        <span class="font-semibold text-gray-900 dark:text-white">1000</span>
      </span>
      <ul class="inline-flex items-stretch -space-x-px">
        <li>
          <a href="#"
            class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Previous</span>
            <svg class="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#"
            class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
        </li>
        <li>
          <a href="#"
            class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
        </li>
        <li>
          <a href="#"
            aria-current="page"
            class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
        </li>
        <li>
          <a href="#"
            class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
        </li>
        <li>
          <a href="#"
            class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
        </li>
        <li>
          <a href="#"
            class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Next</span>
            <svg class="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>

    <NuxtPage></NuxtPage>

  </div>
</template>

<script setup lang="ts">
import { InfoList } from '~/appModules/EntSingle';
</script>