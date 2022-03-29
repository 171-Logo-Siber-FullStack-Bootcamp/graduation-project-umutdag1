<template>
  <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <TheProductCardModalHeader/>
        <TheProductCardModalMain/>
        <TheProductCardModalFooter/>
      </div>
    </div>
  </div>
</template>

<script>
import TheProductCardModalHeader from "./masters/TheProductCardModalHeader";
import TheProductCardModalMain from "./masters/TheProductCardModalMain";
import TheProductCardModalFooter from "./masters/TheProductCardModalFooter";

export default {
  name: "ProductCardModal",
  components: {
    TheProductCardModalHeader,
    TheProductCardModalMain,
    TheProductCardModalFooter,
  },
}
</script>

<style scoped>

</style>