<script lang="ts" setup>
import {reactive} from 'vue'
import {Greet} from '../../wailsjs/go/main/App'

const data = reactive({
  name: "",
  password: "",
  resultText: "Please enter your name below 👇",
  errors: [""]
})

function greet() {
  Greet(data.name).then(result => {
    data.resultText = result
  })
}

function login() {
  if (!data.name) {
    data.errors.push("Entrez votre adresse email / Nom d'utilisateur")
  }
}
</script>

<template>
  <main>
    <div id="result">{{ data.resultText }}</div>
    <div>
      <div class="mb-3">
        <input id="email" v-model="data.name" autocomplete="off" class="text-black" type="text"/>
      </div>
      <div>
        <input id="password" v-model="data.password" autocomplete="off" class="text-black" type="password"/>
      </div>
      <button class="btn" @click="greet">Login</button>
    </div>
  </main>
</template>

<style scoped>

</style>
