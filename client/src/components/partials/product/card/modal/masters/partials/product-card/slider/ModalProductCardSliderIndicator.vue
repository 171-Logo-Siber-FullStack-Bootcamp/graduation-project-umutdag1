<template>
  <button
      type="button"
      data-bs-target="#modalProductCardSliderIndicators"
      :data-bs-slide-to="slidePageNumTo"
      :aria-label="`Slide ${slidePageNumTo + 1}`"
  ></button>
</template>

<script>
export default {
  name: "ModalProductCardSliderIndicator",
  props: {
    slidePageNumTo: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>

</style>