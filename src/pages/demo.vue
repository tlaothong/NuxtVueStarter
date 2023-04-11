<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">จัดคนเข้าที่พัก (ห้องละ 2 ท่าน)</h2>
        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">เลือกคนสำหรับ บ้านพักหญิงหลังที่ 1 ชั้น 2 พักห้อง {{ currentRoom }}</p>
      </div>
      <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div class="text-center text-gray-500 dark:text-gray-400"
          :class="{ 'border-solid border-2 border-green-700 rounded-md': g.room }"
          v-for="(g, idx) in guests"
          :key="idx"
          @click="clickGuest(g)">
          <img class="mx-auto mb-4 w-36 h-36 rounded-full"
            :src="g.img"
            alt="Bonnie Avatar">
          <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href="#">{{ g.name }}</a>
          </h3>
          <p>{{ g.room ?? 'ยังไม่มีห้องพัก' }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const guests = [
  { img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png', name: 'Bonnie Green', room: null },
  { img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png', name: 'Helene Engels', room: null },
  { img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png', name: 'Jese Leos', room: null },
  { img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png', name: 'Joseph Mcfall', room: null },
  { img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png', name: 'Lana Byrd', room: null },
  { img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png', name: 'Leslie Livingston', room: null },
  { img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png', name: 'Michael Gough', room: null },
  { img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png', name: 'Neil Sims', room: null },
]
const currentRoom = ref(201);

let toggle = false;
const clickGuest = (g: any) => {
  g.room = currentRoom.value;
  if (toggle) {
    currentRoom.value++;
  }
  toggle = !toggle;
}
</script>