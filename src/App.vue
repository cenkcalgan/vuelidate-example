<template>
  <div id="app">
    <a href="https://vuejs.org/" target="_blank"
      ><img alt="Vue logo" src="./assets/logo.png"
    /></a>
    <ValidationForm />
  </div>
</template>

<script>
import ValidationForm from "./components/ValidationForm.vue";

export default {
  name: "app",
  components: {
    ValidationForm
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
