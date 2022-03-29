<template>
  <div
      class="
      bg-white
      p-3
      p-md-5
      text-center 
      text-dark
    "
      style="cursor: pointer;"
      @click="goProductComponent"
  >
    <div class="my-3 py-3">
      <h2 class="display-6">{{ data.name }}</h2>
    </div>
    <div
        class="shadow-sm mx-auto w-100"
        style="max-width : 300px; height : 300px; border-radius: 21px 21px 21px 21px;"
    >
      <img
          :src="data.image_url"
          class="w-100 h-100"
          style="border-radius: 21px 21px 21px 21px;"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryContainerCard",
  inject: [
    "changeMainComponent",
  ],
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    goProductComponent() {
      this.changeMainComponent("ProductVue");
    }
  }
};
</script>

<style>
</style>