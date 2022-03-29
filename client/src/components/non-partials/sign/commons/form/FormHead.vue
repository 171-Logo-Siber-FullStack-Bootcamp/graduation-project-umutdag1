<template>
  <h1 class="h3 mb-4 fw-normal">{{head.name}}</h1>
</template>

<script>
export default {
  name: "FormHead",
  props: {
    head: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>