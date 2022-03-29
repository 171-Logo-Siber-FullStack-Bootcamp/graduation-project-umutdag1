<template>
  <component :is="curComponent">
    <ThePartialLayout/>
    <TheNonPartialLayout/>
  </component>
</template>

<script>
import ThePartialLayout from "./components/partials/ThePartialLayout"
import TheNonPartialLayout from "./components/non-partials/TheNonPartialLayout"

export default {
  name: "App",
  components: {
    TheNonPartialLayout,
    ThePartialLayout
  },
  provide() {
    return {
      serverUrl: this.server,
      changeLayoutComponent: this.changeLayoutComponent,
      authenticate: this.authenticate
    };
  },
  data: () => ({
    curComponent: "ThePartialLayout",
    server: "http://localhost:3000",
    urls: {
      login: "users/login",
      auth: "users/auth"
    }
  }),
  methods: {
    changeLayoutComponent(component) {
      this.curComponent = component;
    },
    async authenticate() {
      const userDataStr = localStorage.key("userData");
      if (userDataStr) {
       // const userDataJSON = JSON.parse(userDataStr);
        // const headers = {
        //   "Authorization": `Bearer ${userDataJSON.tokens.access_token}`,
        // };
        // await this.axios.post(`${this.server}/${this.urls.auth}`,
        //     {},
        //     {headers}
        // ).catch(() => {
        //   localStorage.clear();
        // });
      }
    }
  },
  created() {
    console.log("çalışıyor")
    //await this.authenticate();
  },
  mounted() {
    console.log("çalışıyor")
  },
  updated() {
    console.log("çalışıyor update")
  },
  activated() {
    console.log("dasdasdas")
  },
};
</script>

<style>
</style>
