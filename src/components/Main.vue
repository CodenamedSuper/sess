
<template>
  <div class="mt-65 flex flex-col justify-center items-center">
    <h1 class="text-6xl font-bold italic text-indigo-600">SESS</h1>

    <h1 class="mt-6 text-xl font-semibold">Goal:</h1>

    <form>
      <input id="goalInput" type="text" class="m-2 outline-2 rounded-xs p-2" name="title"><br>
    </form>

    <button class="text-xl p-2 pr-3.5 pl-3.5 mt-6 text-white outline-2 bg-green-500 hover:bg-green-600 cursor-pointer rounded-xl font-medium" @click="startSession">START</button>



    <div class="flex flex-col justify-center items-center">

    </div>
  </div>
</template>

<script setup lang="ts">


var goal;

function startSession() {
  goal = (document.getElementById("goalInput") as HTMLInputElement).value;

  if(goal == null || goal.length == 0) return

  localStorage.setItem("goal", goal)
  localStorage.setItem("isInSession", "true")
  location.reload()

}


</script>
