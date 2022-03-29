<template>
  <div class="modal-body">
    <div class="row">
     <ModalProductCard/>
    </div>
  </div>
</template>

<script>
import ModalProductCard from "./partials/product-card/ModalProductCard";

export default {
  name: "TheProductCardModalMain",
  components: {
    ModalProductCard
  },
}
</script>

<style scoped>

</style>