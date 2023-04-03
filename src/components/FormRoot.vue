<template>
  <form @submit.prevent="handleFormRootSubmit">

    <slot></slot>

  </form>
</template>

<script setup lang="ts">
const emits = defineEmits(['submit']);
const props = defineProps<{ scope?: string }>();
const { validators, setHasSubmit } = _setupFormRoot({ scope: props.scope });

async function handleFormRootSubmit($event: any) {

  setHasSubmit();

  let valid = true;
  for (const vtor of validators!) {
    valid = await vtor.value.$validate() && valid;
  }
  // console.log('Submitted', valid);
  if (valid)
    emits('submit', $event);
}
</script>