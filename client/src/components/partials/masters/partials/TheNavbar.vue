<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-2">
    <div class="container-fluid">
      <NavbarBrand/>
      <NavbarTogglerButton/>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <NavbarNav/>
      </div>
    </div>
  </nav>
</template>

<script>
import NavbarBrand from "./navbar/NavbarBrand.vue";
import NavbarTogglerButton from "./navbar/NavbarTogglerButton.vue";
import NavbarNav from "./navbar/NavbarNav.vue";

export default {
  name: "TheNavbar",
  components: {
    NavbarBrand,
    NavbarTogglerButton,
    NavbarNav,
  },
};
</script>

<style scoped>
</style>