<template>
  <div class="input-group w-75 mx-auto mt-3" style="min-width: 320px;">
    <input
        type="text"
        class="form-control"
        placeholder="Kategori ya da ürün adı giriniz..."
        aria-label="Kategori ya da ürün adı giriniz..."
        aria-describedby="search-button"
    >
    <button class="btn btn-outline-secondary" type="button" id="search-button">Ara</button>
  </div>
</template>

<script>
export default {
  name: "ProductSearch"
};
</script>

<style scoped>
</style>