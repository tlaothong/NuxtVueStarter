<template>
  <div>

    <ClientOnly>
      <Teleport to="#module-top-bar">
        <TopBar></TopBar>
      </Teleport>
    </ClientOnly>

    <QuickFilterBar></QuickFilterBar>

    <Suspense>
      <InfoList></InfoList>
      <template #fallback>
        Loading ...
      </template>
    </Suspense>

    <ListFooterPaging></ListFooterPaging>

    <NuxtPage></NuxtPage>

  </div>
</template>

<script setup lang="ts">
import { InfoList, TopBar } from '~/appModules/EntSingle';
</script>