<template>
  <button
      :class="`carousel-control-${control.name}`"
      type="button"
      data-bs-target="#modalProductCardSliderIndicators"
      :data-bs-slide="control.name"
  >
    <span :class="`carousel-control-${control.name}-icon bg-dark`" aria-hidden="true"></span>
    <span class="visually-hidden">{{control.content}}</span>
  </button>
</template>

<script>
export default {
  name: "ModalProductCardSliderControlButton",
  props: {
    control: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>