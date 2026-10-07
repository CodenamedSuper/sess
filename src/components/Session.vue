
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
import { saveCompletedGoal, type GoalData } from '../util/GoalUtils'


var currentGoal : String = localStorage.getItem('current_goal')!


function cancelSession() {
  localStorage.setItem("isInSession", "false")

  localStorage.removeItem("current_goal")
  localStorage.removeItem("current_date")

  location.reload()
}

function completeSession() {
  localStorage.setItem("isInSession", "false")

  var goalData : GoalData = {name: localStorage.getItem("current_goal")!,
   time: new Date().getHours().toLocaleString()! + ":" + (new Date().getMinutes() > 9 ? new Date().getMinutes() : "0" + new Date().getMinutes()!) + " " + (new Date().getHours() >= 12 ? "PM" : "AM"!)  }

  saveCompletedGoal(goalData)

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
