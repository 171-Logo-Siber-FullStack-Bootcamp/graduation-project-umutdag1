<template>
  <div
      id="modalProductCardSliderIndicators"
      class="carousel slide mb-0"
      :style="sliderStyle"
      data-bs-ride="carousel"
  >
    <div class="carousel-indicators bg-secondary mb-0">
      <ModalProductCardSliderIndicator class="active" aria-current="true" :slidePageNumTo="0"/>
      <ModalProductCardSliderIndicator :slidePageNumTo="1"/>
      <ModalProductCardSliderIndicator :slidePageNumTo="2"/>
    </div>
    <div class="carousel-inner" :style="sliderStyle">
      <ModalProductCardSliderItem class="active" :imgStyle="sliderStyle"/>
      <ModalProductCardSliderItem :imgStyle="sliderStyle"/>
      <ModalProductCardSliderItem :imgStyle="sliderStyle"/>
    </div>
    <ModalProductCardSliderControlButton :control="{name : 'prev', content : 'Önceki'}"/>
    <ModalProductCardSliderControlButton :control="{name : 'next', content : 'Sonraki'}"/>
  </div>
</template>

<script>
import ModalProductCardSliderIndicator from "./ModalProductCardSliderIndicator";
import ModalProductCardSliderItem from "./ModalProductCardSliderItem";
import ModalProductCardSliderControlButton from "./ModalProductCardSliderControlButton";

export default {
  name: "ModalProductCardSlider",
  components: {
    ModalProductCardSliderIndicator,
    ModalProductCardSliderItem,
    ModalProductCardSliderControlButton,
  },
  data: () => ({
    sliderStyle : {
      maxWidth : "200px",
      maxHeight : "200px",
      marginLeft : "auto",
      marginRight : "auto",
    }
  })
}
</script>

<style scoped>

</style>