<template>
  <component :is="curComponent">
    <HomeVue/>
    <ProductVue/>
  </component>
</template>

<script>
import HomeVue from "../home/HomeVue";
import ProductVue from "../product/ProductVue";

export default {
  name: "TheMain",
  components: {
    HomeVue,
    ProductVue,
  },
  inject: [
      "changeLayoutComponent"
  ],
  provide() {
    return {
      changeMainComponent: this.changeMainComponent,
    };
  },
  data: () => ({
    curComponent: "HomeVue"
  }),
  methods: {
    changeMainComponent(component) {
      this.curComponent = component;
    },
  }
};
</script>

<style scoped>

</style>
