<template>
  <div
    class="
      position-relative
      overflow-hidden
      p-3 
      p-md-5
      text-center
      bg-light
    "
  >
    <div class="row justify-content-center align-items-center flex-row">
      <MainCategoryCardContent />
      <MainCategoryCardImage />
    </div>
    <!-- <div class="product-device shadow-sm d-none d-md-block"></div>
    <div
      class="product-device product-device-2 shadow-sm d-none d-md-block"
    ></div> -->
  </div>
</template>

<script>
import MainCategoryCardContent from "./MainCategoryCardContent.vue";
import MainCategoryCardImage from "./MainCategoryCardImage.vue";
export default {
  name: "MainCategoryCard",
  components: {
    MainCategoryCardContent,
    MainCategoryCardImage,
  },
};
</script>

<style scoped>
</style>