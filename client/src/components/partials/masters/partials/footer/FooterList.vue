<template>
  <div class="col-6 col-md">
    <h5 class="text-capitalize">{{ getTitle }}</h5>
    <ul class="list-unstyled text-small">
      <FooterListItem
        :item="item"
        v-for="(item, index) in items[title]"
        :key="index"
      />
    </ul>
  </div>
</template>

<script>
import FooterListItem from "./list/FooterListItem.vue";
export default {
  props: ["title"],
  name: "FooterList",
  components: {
    FooterListItem,
  },
  data: () => ({
    items: {
      features: [
        {
          href: "#",
          innerText: "Cool stuff",
        },
        {
          href: "#",
          innerText: "Random feature",
        },
        {
          href: "#",
          innerText: "Team feature",
        },
        {
          href: "#",
          innerText: "Stuff for developers",
        },
        {
          href: "#",
          innerText: "Another one",
        },
        {
          href: "#",
          innerText: "Last time",
        },
      ],
      resources: [
        {
          href: "#",
          innerText: "Resource name",
        },
        {
          href: "#",
          innerText: "Resource",
        },
        {
          href: "#",
          innerText: "Another resource",
        },
        {
          href: "#",
          innerText: "Final resource",
        },
      ],
      resources1: [
        {
          href: "#",
          innerText: "Business",
        },
        {
          href: "#",
          innerText: "Education",
        },
        {
          href: "#",
          innerText: "Government",
        },
        {
          href: "#",
          innerText: "Gaming",
        },
      ],
      about: [
        {
          href: "#",
          innerText: "Team",
        },
        {
          href: "#",
          innerText: "Locations",
        },
        {
          href: "#",
          innerText: "Privacy",
        },
        {
          href: "#",
          innerText: "Terms",
        },
      ],
    },
  }),
  computed: {
    getTitle() {
      return this.title
        .split("")
        .filter((char) => isNaN(char))
        .join("");
    },
  },
};
</script>

<style>
</style>