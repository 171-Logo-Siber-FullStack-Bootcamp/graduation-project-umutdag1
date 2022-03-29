<template>
  <div class="accordion" :id="accordion.name">
    <AccordionItem
        :header="{ isOpen : accordion.isOpen, ...accordion.header}"
        :main="{ isOpen: accordion.isOpen, ...accordion.main}"
    />
  </div>
</template>

<script>
import AccordionItem from "./item/AccordionItem";

export default {
  name: "AccordionVue",
  components: {
    AccordionItem,
  },
  props: {
    accordion: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>