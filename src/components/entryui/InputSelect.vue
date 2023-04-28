<template>
  <div class="w-full">
    <label :for="uuid"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      {{ label }}
    </label>
    <o-dropdown aria-role="list"
      :id="uuid"
      itemActiveClass="bg-red-500"
      v-model="dropDownValue">
      <template #trigger="{ active }">
        <button id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block px-4 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          type="button">
          <span>
            {{ dropDownText }}
          </span>
          <Icon name="ic:baseline-expand-more"
            class="-mr-1 ml-1.5 w-5 h-5"></Icon>
        </button>
      </template>

      <o-dropdown-item aria-role="listitem"
        v-for="(it, idx) in choices"
        :key="idx"
        @click="changeDropDownText(it.t)"
        itemActiveClass="!bg-blue-400"
        :value="it.v">{{ it.t }}</o-dropdown-item>
    </o-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core';
const props = defineProps<{ label: string, modelValue: string, uuid: string, placeholder?: string, choices: any[] }>();
const emits = defineEmits(['update:modelValue']);
const dropDownText = ref(props.placeholder);
const dropDownValue = useVModel(props, 'modelValue', emits);

const changeDropDownText = (text: string) => {
  dropDownText.value = text;
}
changeDropDownText(props.modelValue);
/*
class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
*/
</script>