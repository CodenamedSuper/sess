
<template>

  <div class="flex flex-row mt-5 justify-center items-center">
    <label class="text-black font-semibold">{{ name }}</label>
    <span class="text-black"> &nbsp - &nbsp </span>
    <label class="text-black">{{ time }}</label>
  </div>

</template>

<script setup lang="ts">

const props = defineProps<{
  name: String
  time: String
}>()

</script>
