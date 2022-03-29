<template>
  <li>
    <a class="link-secondary" :href="item.href">
      {{ item.innerText }}
    </a>
  </li>
</template>

<script>
export default {
  props: ["item"],
  name: "FooterListItem",
};
</script>

<style>
</style>