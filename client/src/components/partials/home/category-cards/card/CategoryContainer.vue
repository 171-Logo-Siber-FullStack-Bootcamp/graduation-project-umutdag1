<template>
  <div class="d-md-flex flex-md-equal w-100">
    <CategoryContainerCard :data="doubleData.first"/>
    <CategoryContainerCard :data="doubleData.second"/>
  </div>
</template>

<script>
import CategoryContainerCard from "./CategoryContainerCard.vue";

export default {
  name: "CategoryContainer",
  components: {
    CategoryContainerCard
  },
  props: {
    doubleData : {
      type : Object,
      required : true
    }
  }
};
</script>

<style scoped>
</style>