<template>
  <component :is="curComponent">
    <SignInVue/>
    <SignUpVue/>
  </component>
</template>

<script>
import SignInVue from "./sign/sign-in/SignInVue";
import SignUpVue from "./sign/sign-up/SignUpVue";

export default {
  name: "TheNonPartialLayout",
  components: {
    SignUpVue,
    SignInVue
  },
  provide(){
    return {

    }
  },
  data: () => ({
    curComponent: "SignInVue"
  })
}
</script>

<style scoped>

</style>