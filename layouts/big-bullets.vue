<script setup>
  import { defineProps } from 'vue'
  import _props from '../utils/props';
  
  const props = defineProps({
    heading: String,
    ..._props,
  })
</script>
<template>
  <div class="slidev-layout default">
    <h1 v-if="props.heading">{{ props.heading }}</h1>
    <div class="flex items-center justify-center h-full -m-12">
      <div class="text-2xl">
        <slot/>
      </div>
    </div>
  </div>
</template>