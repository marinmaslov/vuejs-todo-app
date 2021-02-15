<template>
  <div>
    <div v-for="item in allItems" :key="item.id">
      <Item :item="item" />
    </div>
  </div>
</template>

<script>
import Item from "@/components/Item";
import { mapGetters } from "vuex";

export default {
  components: {
    Item
  },
  computed: {
    ...mapGetters(["allItems"])
  }
};
</script>

<style>

</style>