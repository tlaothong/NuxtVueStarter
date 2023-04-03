<template>
  <div>
    <HeaderBand></HeaderBand>

    <main>
      <slot></slot>
    </main>

    <FooterBand></FooterBand>
  </div>
</template>

<script setup lang="ts">
import { HeaderBand, FooterBand } from '~/components/layouts/default';
import { initFlowbite } from 'flowbite/lib/esm/components';

onMounted(() => { initFlowbite() })
</script>