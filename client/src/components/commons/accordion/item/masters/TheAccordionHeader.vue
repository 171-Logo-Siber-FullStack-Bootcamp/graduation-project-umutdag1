<template>
  <h2 class="accordion-header" :id="header.name">
    <button
        class="accordion-button text-capitalize"
        :class="{ collapsed : !header.isOpen}"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#${header.targetMain}`"
        aria-expanded="true"
    >
      {{header.content}}
    </button>
  </h2>
</template>

<script>
export default {
  name: "TheAccordionHeader",
  props: {
    header: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>