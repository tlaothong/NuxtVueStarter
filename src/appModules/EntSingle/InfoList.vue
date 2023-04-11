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
            v-for="(it, idx) in dataListSetup"
            :key="idx"
            class="px-4 py-3">{{ it.title }}</th>
          <th scope="col"
            class="px-4 py-3">
            <span class="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
          v-for="(row, rowIndex) in dataList"
          :key="rowIndex"
          @click="navigateTo(`/EntSingle/list/${row.id}`)">
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
          <td :key="idx"
            v-for="(it, idx) in dataListSetup"
            class="px-4 py-2 whitespace-nowrap">
            <span>
              {{ row[it.model] }}
            </span>
          </td>
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
import { dataListSetup } from '~/appModules/EntSingle';
import { storeToRefs } from 'pinia';
import { useModuleStore } from './moduleStore';

const moduleStore = useModuleStore();
const { dataList } = storeToRefs(moduleStore);

await moduleStore.loadDataList();
</script>