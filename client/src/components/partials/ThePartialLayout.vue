<template>
  <TheHeader/>
  <TheMain/>
  <TheFooter/>
</template>

<script>
import TheHeader from "./masters/TheHeader.vue";
import TheMain from "./masters/TheMain.vue";
import TheFooter from "./masters/TheFooter.vue";

export default {
  name: "TheLayout",
  components: {
    TheHeader,
    TheMain,
    TheFooter
  },
};
</script>

<style>
</style>
