<template>
  <main class="sign text-center">
    <div class="form-sign">
      <FormBrand/>
      <FormHead :head="head"/>

      <FormFloatingLabelFormControl
          :formControlInput="input"
          v-for="(input, inputIndex) in floatingLabelFormControlInputs"
          :key="inputIndex"
      />

      <FormButton :button="button" class="mt-5"/>
      <FormFooter/>
    </div>
  </main>
</template>

<script>
import FormBrand from "../commons/form/FormBrand";
import FormHead from "../commons/form/FormHead";
import FormFloatingLabelFormControl from "../../../commons/form/floating-labels/FormFloatingLabelFormControl";
import FormButton from "../commons/form/FormButton";
import FormFooter from "../commons/form/FormFooter";

export default {
  name: "SignUpVue",
  components: {
    FormBrand,
    FormHead,
    FormFloatingLabelFormControl,
    FormButton,
    FormFooter,
  },
  data: () => ({
    head: {
      name: "Kayıt Ol"
    },
    floatingLabelFormControlInputs: [
      {
        type: "text",
        name: "Ad",
        desc: "Ad Giriniz"
      },
      {
        type: "text",
        name: "Soyad",
        desc: "Soyad Giriniz"
      },
      {
        type: "email",
        name: "Email Adres",
        desc: "Email Adres Giriniz"
      },
      {
        type: "text",
        name: "Adres",
        desc: "Adres Giriniz"
      },
      {
        type: "password",
        name: "Şifre",
        desc: "Şifre Giriniz"
      },
      {
        type: "password",
        name: "Şifre Tekrar",
        desc: "Tekrar Şifre Giriniz"
      },
    ],
    button: {
      name: "Kayıt Ol"
    }
  })
}
</script>

<style scoped>
@import url("@/assets/dist/css/sign.css");
</style>