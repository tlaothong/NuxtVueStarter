<template>
  <div class="overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col"
            class="p-4">
            <div class="flex items-center">
              <input id="checkbox-all"
                type="checkbox"
                class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="checkbox-all"
                class="sr-only">checkbox</label>
            </div>
          </th>
          <th scope="col"
            class="px-4 py-3">Task</th>
          <th scope="col"
            class="px-4 py-3">Status</th>
          <th scope="col"
            class="px-4 py-3 min-w-[14rem]">Progress</th>
          <th scope="col"
            class="px-4 py-3">Preview</th>
          <th scope="col"
            class="px-4 py-3">Time Tracking</th>
          <th scope="col"
            class="px-4 py-3">Due Date</th>
          <th scope="col"
            class="px-4 py-3">
            <span class="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
          @click="navigateTo('/EntSingle/list/id123')">
          <td class="px-4 py-2 w-4">
            <div class="flex items-center">
              <input id="checkbox-table-search-1"
                type="checkbox"
                onclick="event.stopPropagation()"
                class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="checkbox-table-search-1"
                class="sr-only">checkbox</label>
            </div>
          </td>
          <th scope="row"
            class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">Upload feed and Reels in
            Instagram</th>
          <td class="px-4 py-2 whitespace-nowrap">
            <span
              class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">In
              progress</span>
          </td>
          <td class="px-4 py-2 font-medium whitespace-nowrap">
            <div class="flex justify-end mb-1">
              <span class="text-xs font-medium text-gray-500 dark:text-gray-400">75%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
              <div class="bg-primary-600 h-1.5 rounded-full"
                style="width: 75%"></div>
            </div>
          </td>
          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <a href="#"
              class="font-medium text-primary-600 dark:text-primary-500 hover:underline inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-1"
                viewbox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true">
                <path
                  d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
              Website
            </a>
          </td>
          <td class="px-4 py-2 text-gray-900 whitespace-nowrap dark:text-white">
            <div
              class="px-2 py-1 border dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg text-xs font-medium inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-hidden="true"
                class="h-4 w-4 mr-1 text-gray-400"
                viewbox="0 0 20 20">
                <path fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
              </svg>
              <span class="text-green-500">6:47</span>
              /8:00
              <button class="bg-orange-500 hover:bg-orange-700 text-white p-1 rounded-md ml-3">
                <svg xmlns="http://www.w3.org/2000/svg"
                  viewbox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4"
                  aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </td>
          <td class="px-4 py-2 whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">23 Nov 2022</td>
          <td class="px-4 py-2">
            <button id="-dropdown-button"
              type="button"
              data-dropdown-toggle="-dropdown"
              class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
              <svg class="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </button>
            <div id="-dropdown"
              class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="-dropdown-button">
                <li>
                  <a href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                </li>
                <li>
                  <a href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                </li>
              </ul>
              <div class="py-1">
                <a href="#"
                  class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
              </div>
            </div>
          </td>
        </tr>
        <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
          @click="navigateTo('/EntSingle/list/id124')">
          <td class="px-4 py-2 w-4">
            <div class="flex items-center">
              <input id="checkbox-table-search-1"
                type="checkbox"
                onclick="event.stopPropagation()"
                class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="checkbox-table-search-1"
                class="sr-only">checkbox</label>
            </div>
          </td>
          <th scope="row"
            class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">Crossplatform analysis
          </th>
          <td class="px-4 py-2 whitespace-nowrap">
            <span
              class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Completed</span>
          </td>
          <td class="px-4 py-2 font-medium whitespace-nowrap">
            <div class="flex justify-end mb-1">
              <span class="text-xs font-medium text-gray-500 dark:text-gray-400">100%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
              <div class="bg-green-500 h-1.5 rounded-full"
                style="width: 100%"></div>
            </div>
          </td>
          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <a href="#"
              class="font-medium text-primary-600 dark:text-primary-500 hover:underline inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-1"
                viewbox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true">
                <path
                  d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
              Website
            </a>
          </td>
          <td class="px-4 py-2 text-gray-900 whitespace-nowrap dark:text-white">
            <div
              class="px-2 py-1 border dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg text-xs font-medium inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-hidden="true"
                class="h-4 w-4 mr-1 text-gray-400"
                viewbox="0 0 20 20">
                <path fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
              </svg>
              7:00
              <button class="bg-green-500 hover:bg-green-700 text-white p-1 rounded-md ml-3">
                <svg xmlns="http://www.w3.org/2000/svg"
                  viewbox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4"
                  aria-hidden="true">
                  <path fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" />
                </svg>
              </button>
            </div>
          </td>
          <td class="px-4 py-2 whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">03 Nov 2022</td>
          <td class="px-4 py-2">
            <button id="-dropdown-button"
              type="button"
              data-dropdown-toggle="-dropdown"
              class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
              <svg class="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </button>
            <div id="-dropdown"
              class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="-dropdown-button">
                <li>
                  <a href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                </li>
                <li>
                  <a href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                </li>
              </ul>
              <div class="py-1">
                <a href="#"
                  class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
              </div>
            </div>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useModuleStore } from './moduleStore';

const moduleStore = useModuleStore();
const { dataList } = storeToRefs(moduleStore);

await moduleStore.loadDataList();
</script>