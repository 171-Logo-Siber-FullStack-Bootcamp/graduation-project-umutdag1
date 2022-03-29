<template>
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <NavbarNavItem :item="item" v-for="(item, index) in items" :key="index" />
  </ul>
</template>

<script>
import NavbarNavItem from "./nav/NavbarNavItem.vue";
export default {
  name: "NavbarNav",
  components: {
    NavbarNavItem,
  },
  data: () => ({
    items: [
      {
        innerText: "Home",
        href: "#",
        isActive: true,
      },
      {
        innerText: "Features",
        href: "#",
        isActive: false,
      },
      {
        innerText: "Pricing",
        href: "#",
        isActive: false,
      },
      {
        innerText: "About",
        href: "#",
        isActive: false,
      },
    ],
  }),
};
</script>

<style scoped>
</style>