<template>
  <div
      :id="main.name"
      class="accordion-collapse collapse"
      :class="{show : main.isOpen}"
      :aria-labelledby="main.targetHeader"
      :data-bs-parent="`#${main.targetParent}`"
  >
    <div class="accordion-body" v-if="main.isHTML" v-html="main.desc"></div>
    <div class="accordion-body" v-else>{{ main.desc }}</div>
  </div>
</template>

<script>
export default {
  name: "TheAccordionMain",
  props: {
    main: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>