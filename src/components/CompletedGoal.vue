
<template>
  <h1 class="mt-6 text-4xl">{{ goal }}</h1>
  <h1 class="mt-6 text-3xl">{{ date }}</h1>

</template>

<script setup lang="ts">
import { ref } from 'vue'


const props = defineProps<{
  goal: string
  date : Date
}>()

 const creationRef = ref(String(
    new Date(props.date).toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      month: "numeric",
      day: "numeric",
      year: "numeric",
    }),
  ))

</script>
