<template>
  <footer class="container-fluid py-5 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md">
          <RoundSvg class="d-block" title="Category" width="24" height="24"/>
          <small class="d-block mt-3 text-muted">Copyright &copy; 2022 </small>
          <small class="d-block mb-3 text-muted">All Rights Reserved.</small>
        </div>
        <FooterList title="features" />
        <FooterList title="resources" />
        <FooterList title="resources1" />
        <FooterList title="about" />
      </div>
    </div>
  </footer>
</template>

<script>
import RoundSvg from "@/components/commons/svgs/RoundSvg.vue";
import FooterList from "./partials/footer/FooterList.vue";

export default {
  name: "TheFooter",
  components: {
    RoundSvg,
    FooterList,
  },
};
</script>

<style scoped>
</style>