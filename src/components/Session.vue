
<template>

  <div class="mt-80 flex flex-col justify-center items-center">

    <h1 class="mt-6 text-4xl font-semibold">{{ currentGoal }}</h1>

    <div class="flex flex-row mt-5">
      <button class="text-xl p-2 pr-3.5 pl-3.5 mr-3 mt-6 text-white outline-2 bg-green-500 hover:bg-green-600 cursor-pointer rounded-xl font-medium" @click="completeSession">DONE</button>
      <button class="text-xl p-2 pr-3.5 pl-3.5 ml-3 mt-6 text-white outline-2 bg-red-500 hover:bg-red-600 cursor-pointer rounded-xl font-medium" @click="cancelSession">CANCEL</button>
    </div>

  </div>

</template>

<script setup lang="ts">

var currentGoal : String = localStorage.getItem("goal")!


function cancelSession() {
  localStorage.setItem("isInSession", "false")
  location.reload()
}

function completeSession() {
  localStorage.setItem("isInSession", "false")


  location.reload()
}

</script>
