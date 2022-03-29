<template>
  <li class="nav-item mx-3">
    <a class="nav-link" :class="{ active: item.isActive }" :href="item.href">
      {{ item.innerText }}
    </a>
  </li>
</template>

<script>
export default {
  props: ["item"],
  name: "NavbarNavItem",
};
</script>

<style scoped>
</style>