<template>
  <main>
    <MainCategoryCard/>
    <CategoryContainer
        :doubleData="doubleCategory"
        v-for="(doubleCategory,doubleCategoryIndex) in this.doubleCategoryDataArr"
        :key="doubleCategoryIndex"
    />
  </main>
</template>

<script>
import MainCategoryCard from "./category-cards/main-card/MainCategoryCard.vue"
import CategoryContainer from "./category-cards/card/CategoryContainer.vue"

export default {
  name: "HomeVue",
  components: {
    MainCategoryCard,
    CategoryContainer,
  },
  inject: [
      "serverUrl"
  ],
  data: () => ({
    urls: {
      getAll: "categories/getAll"
    },
    response: {
      getAll: []
    }
  }),
  methods: {
    async requestCategoryDataArr() {
      const response = await this.axios.get(`${this.serverUrl}/${this.urls.getAll}`);
      this.response.getAll = response.data;
    }
  },
  computed: {
    doubleCategoryDataArr() {
      return this.response.getAll
          .reduce((doubleCategoryArr, category) => {
            const length = doubleCategoryArr.length;
            if (length === 0) {
              doubleCategoryArr.push({first: category});
              return doubleCategoryArr;
            }
            const lastElem = doubleCategoryArr[length - 1];
            if (!lastElem.first) {
              lastElem.first = category;
            } else if (!lastElem.second) {
              lastElem.second = category;
            } else {
              doubleCategoryArr.push({first: category});
            }
            return doubleCategoryArr;
          }, [])
    }
  },
  created() {
    console.log("aaa")
   // await this.requestCategoryDataArr();
  }
};
</script>

<style scoped>
@import url("@/assets/dist/css/category.css");
</style>