<template>
  <button class="w-100 btn btn-lg btn-primary" type="button">{{ button.name }}</button>
</template>

<script>
export default {
  name: "FormButton",
  props: {
    button: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>