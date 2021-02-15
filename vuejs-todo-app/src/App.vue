<template>
  <div id="app">
    <Input />
    <List />
  </div>
</template>

<script>
import Input from "@/components/Input";
import List from "@/components/List";

export default {
  name: 'App',
  components: {
    Input,
    List
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
