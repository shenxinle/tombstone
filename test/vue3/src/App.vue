<template>
  <div>
    <h1>Join</h1>
    <MarkDown />
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import MarkDown from "./components/MarkDown";

export default {
  name: "App",
  components: {
    // HelloWorld,
    MarkDown,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
