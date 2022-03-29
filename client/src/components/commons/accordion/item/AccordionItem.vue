<template>
  <div class="accordion-item">
    <TheAccordionHeader :header="header"/>
    <TheAccordionMain :main="main"/>
  </div>
</template>

<script>
import TheAccordionHeader from "./masters/TheAccordionHeader";
import TheAccordionMain from "./masters/TheAccordionMain";

export default {
  name: "AccordionItem",
  components: {
    TheAccordionHeader,
    TheAccordionMain,
  },
  props: {
    header: {
      type: Object,
      required: true
    },
    main: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>