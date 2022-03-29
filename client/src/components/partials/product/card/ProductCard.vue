<template>
  <div class="col-md-4">
    <img
        class="bd-placeholder-img rounded-circle"
        src="@/assets/visual/logo1.png"
        width="140"
        height="140"
    >
    <h4 class="my-3">Heading</h4>
    <ProductCardModal/> <!-- Consider Modal should be rendered one time -->
    <ProductCardModalToggleButton/> <!-- Consider Modal should be rendered one time -->
  </div>
</template>

<script>
import ProductCardModalToggleButton from "./modal/ProductCardModalToggleButton";
import ProductCardModal from "@/components/partials/product/card/modal/ProductCardModal";

export default {
  name: "ProductCard",
  components: {
    ProductCardModal,
    ProductCardModalToggleButton
  }
}
</script>

<style scoped>
@import url("@/assets/dist/css/carousel.css");
</style>