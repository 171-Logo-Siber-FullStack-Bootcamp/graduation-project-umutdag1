<template>
  <div class="form-floating">
    <select class="form-select" :id="floatingLabelFormSelect.name" :aria-label="floatingLabelFormSelect.desc">
      <FormFloatingFormSelectOption
          :option="{ key : 'selected', value: 'Seçiniz...'}"
      />
      <FormFloatingFormSelectOption
          :option="{key : optionFormKey, value : optionForm}"
          v-for="(optionForm, optionFormKey) in options[floatingLabelFormSelect.name]"
          :key="`${floatingLabelFormSelect.name}_${optionFormKey}`"
      />
    </select>
    <label
        class="text-capitalize"
        :for="floatingLabelFormSelect.name"
    >
      {{ floatingLabelFormSelect.name }}
    </label>
  </div>
</template>

<script>
import FormFloatingFormSelectOption from "./form-select/FormFloatingLabelFormSelectOption";

export default {
  name: "FormFloatingLabelFormSelect",
  components: {
    FormFloatingFormSelectOption
  },
  props: {
    floatingLabelFormSelect: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    options: {
      cinsiyet: {
        bay: "Bay",
        bayan: "Bayan"
      },
      renk: {
        kırmızı: "Kırmızı",
        beyaz: "Beyaz",
        siyah: "Siyah"
      }
    }
  })
}
</script>

<style scoped>

</style>