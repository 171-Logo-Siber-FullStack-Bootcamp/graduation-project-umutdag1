<template>
  <div class="container gap-5" id="dropdownFilter">
    <div class="dropdown-menu pt-0 mx-0 rounded-3 overflow-hidden">
      <form class="p-2 mb-2 bg-light border-bottom">
        <input type="search" class="form-control" autocomplete="false" placeholder="Kategori adı giriniz...">
      </form>
      <ProductCategoryFilterCheckbox/>
      <ProductCategoryFilterCheckbox/>
      <ProductCategoryFilterCheckbox/>
    </div>
  </div>
</template>

<script>
import ProductCategoryFilterCheckbox from "./ProductCategoryFilterCheckbox";
export default {
  name: "ProductCategoryFilter",
  components: {
    ProductCategoryFilterCheckbox
  }
}
</script>

<style scoped>
@import url("@/assets/dist/css/dropdowns.css");
</style>