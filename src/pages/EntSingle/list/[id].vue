<template>
  <o-modal v-model:active="showModal"
    @close="closeModal">

    <!-- Modal content -->
    <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
      <!-- Modal header -->
      <div class="flex justify-between mb-4 rounded-t sm:mb-5">
        <div>
          <h3 class="text-lg font-bold text-gray-900 md:text-xl dark:text-white">
            Helene Engels
          </h3>
          <p class="text-base font-light text-gray-500 dark:text-gray-400">
            Moderator
          </p>
        </div>
        <div>
          <button type="button"
            @click="closeModal"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="readUserModal">
            <svg aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
      </div>

      <dl>
        <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Email</dt>
        <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">helene@company.com</dd>
        <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Biography</dt>
        <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">Hello, I'm Helene Engels, USA Designer,
          Creating things that stand out, Featured by Adobe, Figma, Webflow and others, Daily design tips & resources,
          Exploring Web3.</dd>
      </dl>

      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-3 sm:space-x-4">
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
            Information
          </button>
        </div>
        <button type="button"
          class="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
          <Icon name="ic:baseline-delete"
            class="w-5 h-5 mr-1.5 -ml-1"></Icon>
          Delete
        </button>
      </div>
    </div>

  </o-modal>
</template>

<script setup lang="ts">
const showModal = ref(true);
const _router = useRouter();

const closeModal = () => {
  showModal.value = false;
  _router.go(-1);
}
</script>