<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-2xl pb-8 mx-auto lg:pb-12">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update user</h2>
      <form action="#">
        <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-6">
          <div>
            <label for="first-name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
            <input type="text"
              name="first-name"
              id="first-name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              value="Helene"
              placeholder="Ex. John">
          </div>
          <div class="w-full">
            <label for="last-name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
            <input type="text"
              name="last-name"
              id="last-name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              value="Engels"
              placeholder="Ex. Doe">
          </div>
          <div>
            <label for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password"
              name="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              value=""
              placeholder="•••••••••">
          </div>
          <div>
            <label for="confirm-password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
            <input type="password"
              name="confirm-password"
              id="confirm-password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              value=""
              placeholder="•••••••••">
          </div>
          <div class="sm:col-span-2">
            <label for="biography"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Biography</label>
            <textarea id="biography"
              rows="8"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Write biography here...">Hello, I'm Helene Engels, USA Designer, Creating things that stand out, Featured by Adobe, Figma, Webflow and others, Daily design tips & resources, Exploring Web3.</textarea>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <button type="submit"
            class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Update
          </button>
          <button type="button"
            class="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
            <Icon name="ic:baseline-delete"
              class="w-5 h-5 mr-1.5 -ml-1"></Icon>
            Delete
          </button>
        </div>
      </form>
    </div>
  </section>
</template>