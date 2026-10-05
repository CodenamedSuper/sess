<template>
  <Creation v-if="sessionStarted == false" />
  <Session v-else />
</template>

<script setup lang="ts">
import Creation from './components/Main.vue'
import Session from './components/Session.vue';

var isInSessionData: String = localStorage.getItem("isInSession")!;

var sessionStarted : boolean = false

if(isInSessionData == "true") {
  sessionStarted = true
}
else {
  sessionStarted = false
}

</script>

