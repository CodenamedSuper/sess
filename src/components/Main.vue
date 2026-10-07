
<template>
  <div class="mt-65 flex flex-col justify-center items-center">
    <h1 class="text-6xl font-bold italic text-indigo-600">SESS</h1>

    <h1 class="mt-6 text-xl font-semibold">Goal:</h1>

    <form>
      <input id="goalInput" type="text" class="m-2 outline-2 rounded-xs p-2" name="title"><br>
    </form>

    <button class="text-xl p-2 pr-3.5 pl-3.5 mt-6 text-white outline-2 bg-green-500 hover:bg-green-600 cursor-pointer rounded-xl font-medium" @click="startSession">START</button>



    <div class="flex flex-col justify-center items-center">

      <h1 class="mt-10 text-xl">Completed goals today: <span class="mt-6 text-xl font-bold">{{ getSavedCompletedGoals().length }}</span> </h1>


        <div v-for="goal in getSavedCompletedGoals().reverse()">
          <DisplayedGoal :name="goal.name" :time="goal.time"></DisplayedGoal>
        </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { getSavedCompletedGoals } from '../util/GoalUtils';
import DisplayedGoal from './DisplayedGoal.vue';

var currGoal : String

function startSession() {
  currGoal = (document.getElementById("goalInput") as HTMLInputElement).value;

  if(currGoal == null || currGoal.length == 0) return

  localStorage.setItem("current_goal", currGoal.toString())

  localStorage.setItem("isInSession", "true")
  location.reload()

}

var midnight = new Date();
midnight.setHours(24,0,0,0);

var now = new Date();

var msToMidnight = midnight.getTime() - now.getTime();

setTimeout(function(){
  localStorage.removeItem("completed_goals")
}, msToMidnight);


</script>
