<template>
  <div class="container">
    <h4 class="d-flex justify-content-between align-items-center mb-3">
      <span class="text-secondary">Sepetim</span>
      <span class="badge bg-secondary rounded-pill">3</span>
    </h4>
    <ul class="list-group mb-3">
      <ProductCardCartItem/>
      <ProductCardCartItem/>
      <ProductCardCartItem/>
      <ProductCardCartDiscountItem/>
      <ProductCardCartTotalPriceItem/>
    </ul>
  </div>
</template>

<script>
import ProductCardCartItem from "./items/ProductCardCartItem";
import ProductCardCartDiscountItem from "./items/ProductCardCartDiscountItem";
import ProductCardCartTotalPriceItem from "./items/ProductCardCartTotalPriceItem";

export default {
  name: "ProductCardCart",
  components: {
    ProductCardCartItem,
    ProductCardCartDiscountItem,
    ProductCardCartTotalPriceItem,
  }
}
</script>

<style scoped>

</style>