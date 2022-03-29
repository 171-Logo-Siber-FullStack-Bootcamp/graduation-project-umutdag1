<template>
  <header class="site-header sticky-top">
    <TheNavbar />
  </header>
</template>

<script>
import TheNavbar from "./partials/TheNavbar.vue";
export default {
  name: "TheHeader",
  components: {
    TheNavbar,
  },
};
</script>

<style scoped>
</style>