<template>
  <div class="form-floating">
    <input
        :type="formControlInput.type"
        class="form-control"
        :id="formControlInput.name"
        :placeholder="formControlInput.desc"
    >
    <label :for="formControlInput.name">{{ formControlInput.name }}</label>
  </div>
</template>

<script>
export default {
  name: "FormFloatingLabelFormControl",
  props: {
    formControlInput: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>