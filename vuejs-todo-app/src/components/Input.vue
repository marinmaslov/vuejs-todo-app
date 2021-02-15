<template>
  <div>
    <h3>Vue.js ToDo App</h3>
    <input @change="itemTextChange" v-bind:value="input" type="text" />
    <button @click="addNewItem">Add new</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { v1 } from 'uuid'
export default {
  data() {
    return {
      input: ""
    }
  },
  methods: {
    ...mapActions(['addItem']),
    itemTextChange(e) {
      this.itemText = e.target.value;
    },
    addNewItem() {
      this.addItem({
        id: v1(),
        title: this.itemText
      });
      this.itemText = "";
    }
  },
};
</script>

<style>

</style>
