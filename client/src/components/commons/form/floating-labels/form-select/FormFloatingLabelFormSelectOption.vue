<template>
  <option selected v-if="option.key === 'selected'">{{ option.value }}</option>
  <option :value="option.key" v-else>{{ option.value }}</option>
</template>

<script>
export default {
  name: "FormFloatingLabelFormSelectOption",
  props: {
    option: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>