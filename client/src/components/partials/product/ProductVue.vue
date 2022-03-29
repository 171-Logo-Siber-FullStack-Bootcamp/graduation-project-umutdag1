<template>
  <main>
    <div class="row mx-0 px-0">
      <div class="col-4 d-none d-lg-block">
        <ProductCategoryFilter/>
        <ProductCardCart/>
      </div>
      <div class="col-12 col-lg-8">
        <div class="container marketing">
          <ProductSearch/>
          <div class="row">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
          <ProductPagination/>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ProductCategoryFilter from "./category-filter/ProductCategoryFilter";
import ProductCardCart from "@/components/partials/product/card/cart/ProductCardCart";
import ProductSearch from "./ProductSearch";
import ProductCard from "./card/ProductCard";
import ProductPagination from "./ProductPagination";

export default {
  name: "ProductVue",
  components: {
    ProductCategoryFilter,
    ProductCardCart,
    ProductSearch,
    ProductCard,
    ProductPagination,
  },
  activated() {
    console.log("dasdasdas")
  },
  created() {
    console.log("çalışıyor")
    //await this.authenticate();
  },
}
</script>

<style scoped>

</style>