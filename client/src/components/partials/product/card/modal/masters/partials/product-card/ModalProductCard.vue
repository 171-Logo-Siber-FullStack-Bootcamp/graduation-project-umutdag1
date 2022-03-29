<template>
  <div class="col-md-5 text-center">
    <ModalProductCardSlider/>
    <AccordionVue class="my-4" :accordion="accordion.productPrice"/>
  </div>
  <div class="col-md-7">
    <AccordionVue class="my-2" :accordion="accordion.productDesc"/>
    <FormFloatingLabelFormSelect class="my-2" :floatingLabelFormSelect="floatingLabelFormSelect.sizes"/>
    <FormFloatingLabelFormSelect class="my-2" :floatingLabelFormSelect="floatingLabelFormSelect.colors"/>
    <ModalProductQuantityCard class="justify-content-center mt-5"/>
  </div>
</template>

<script>
import ModalProductCardSlider from "./slider/ModalProductCardSlider";
import AccordionVue from "@/components/commons/accordion/AccordionVue";
import FormFloatingLabelFormSelect from "@/components/commons/form/floating-labels/FormFloatingLabelFormSelect";
import ModalProductQuantityCard from "./ModalProductQuantityCard";

export default {
  name: "ModalProductCard",
  components: {
    ModalProductCardSlider,
    AccordionVue,
    FormFloatingLabelFormSelect,
    ModalProductQuantityCard,
  },
  data: () => ({
    floatingLabelFormSelect: {
      sizes: {
        name: "beden",
        desc: "beden"
      },
      colors: {
        name: "renk",
        desc: "renk"
      },
    },
    accordion: {
      productDesc: {
        name: "productDesc",
        header: {
          name: "productDescHeader",
          content: "ürün açıklama",
          targetMain: "productDescMain",
        },
        main: {
          name: "productDescMain",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, facere.",
          targetParent: "productDesc",
          targetHeader: "productDescHeader",
          isHTML: false
        },
        isOpen: true
      },
      productPrice: {
        name: "productPrice",
        header: {
          name: "productPriceHeader",
          content: "fiyat (TL)",
          targetMain: "productPriceMain",
        },
        main: {
          name: "productPriceMain",
          desc: `<h1 class="text-secondary">
                   <div class="h6 text-decoration-line-through ">34.99</div>
                   <div class="h5 text-dark">yerine</div>
                   <div class="h1" style="overflow-y : hidden;">29.99</div>
                 </h1>`,
          targetParent: "productPrice",
          targetHeader: "productPriceHeader",
          isHTML: true
        },
        isOpen: true
      },
    }
  })
}
</script>

<style scoped>

</style>