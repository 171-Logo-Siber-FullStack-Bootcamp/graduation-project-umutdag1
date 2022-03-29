<template>
  <div class="carousel-item">
    <img
        src="@/assets/visual/logo.png"
        class="d-block w-100"
        :style="imgStyle"
        alt="..."
    >
  </div>
</template>

<script>
export default {
  name: "ModalProductCardSliderItem",
  props: {
    imgStyle: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>