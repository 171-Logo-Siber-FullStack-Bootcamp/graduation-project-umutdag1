<template>
  <main class="sign text-center vh-100 vw-100">
    <div class="form-sign">
      <FormBrand/>
      <FormHead :head="head"/>

      <FormFloatingLabelFormControl
          :formControlInput="input"
          v-for="(input, inputIndex) in floatingLabelFormControlInputs"
          :key="inputIndex"
      />

      <SignInCheckBox/>
      <FormButton :button="button" class="mt-4"/>
      <FormFooter/>
    </div>
  </main>
</template>

<script>
import FormBrand from "../commons/form/FormBrand";
import FormHead from "../commons/form/FormHead";
import FormFloatingLabelFormControl from "../../../commons/form/floating-labels/FormFloatingLabelFormControl";
import SignInCheckBox from "./SignInCheckBox";
import FormButton from "../commons/form/FormButton";
import FormFooter from "../commons/form/FormFooter";

export default {
  name: "SignInVue",
  components: {
    FormBrand,
    FormHead,
    FormFloatingLabelFormControl,
    SignInCheckBox,
    FormButton,
    FormFooter,
  },
  data: () => ({
    head: {
      name: "Giriş Yap"
    },
    floatingLabelFormControlInputs: [
      {
        type: "email",
        name: "Email Adres",
        desc: "Email Adres Giriniz"
      },
      {
        type: "password",
        name: "Şifre",
        desc: "Şifre Giriniz"
      },
    ],
    button: {
      name: "Giriş Yap"
    }
  })
}
</script>

<style scoped>
@import url("@/assets/dist/css/sign.css");
</style>