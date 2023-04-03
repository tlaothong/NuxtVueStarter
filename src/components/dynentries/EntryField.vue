<template>
  <component :is="component"
    v-if="visibleWhen"
    :label="label"
    uuid="abcd"
    :modelValue="fieldValue"
    @update:modelValue="updateModel"
    :modelErrors="modelErrors" />
</template>

<script setup lang="ts">
import { ErrorObject } from '@vuelidate/core';

const props = defineProps<{ label?: String, component: any, model: any, visibleWhen?: any }>()
const getErrors = inject(_DYN_ENTRY_KEY_GET_ERRORS) as (callback: (m: any) => any) => ErrorObject[]
const entry: any = inject(_DYN_ENTRY_KEY_DATA);
const fieldValue = computed(() => {
  const mname = props.model;
  if (typeof mname === 'string') {
    return entry[mname].$model;
  } else if (typeof mname === 'function') {
    const fn: (v: any) => any = props.model;
    return fn(entry).$model;
  }
})
const updateModel = (value: any) => {
  const mname = props.model;
  if (typeof mname === 'string') {
    entry[mname].$model = value;
  } else if (typeof mname === 'function') {
    const fn: (v: any) => any = props.model;
    fn(entry).$model = value;
  }
}
const modelErrors = computed(() => {
  const mname = props.model;
  if (typeof mname === 'string') {
    return getErrors(_ => entry[mname]);
  } else if (typeof mname === 'function') {
    const fn: (v: any) => any = props.model;
    return getErrors(_ => fn(entry));
  }
})

const visibleWhen = computed(() => {
  const condition = props.visibleWhen
  if (!condition || typeof condition !== 'function') return true

  return condition(entry)
})
</script>