<template>
  <div>
    <HeaderBand></HeaderBand>

    <main>
      <slot></slot>
    </main>

  </div>
</template>

<script setup lang="ts">
import { HeaderBand } from '~/components/layouts/default';
import { initFlowbite } from 'flowbite/lib/esm/components';

onMounted(() => { initFlowbite() })
</script>