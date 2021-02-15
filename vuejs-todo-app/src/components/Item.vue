<template>
  <div>
    <h3>{{item.title}}</h3>
    <div>
        <font-awesome-icon icon="check" />
        <font-awesome-icon icon="edit" />
        <font-awesome-icon icon="trash-alt" />
    </div>
  </div>
</template>

<script>
export default {
    props: {
        item: {

        }
    }
};
</script>

<style>

</style>
