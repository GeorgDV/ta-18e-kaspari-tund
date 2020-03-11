<template>
  <div>
    <div v-for="page in getPages">
      <button class="button" style="float: left;">{{page}}</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "pagination",
        props: ["pagination"],
        computed: {
          getPages() {
            let pagesArray = [];

            if (this.articles.length > 10) {
              let counter = 0;
              let pageCounter = 1;
              for (let articlesCount = 0 ; articlesCount < this.articles.length; articlesCount++) {
                if ((articlesCount - 9) == counter) {
                  pagesArray.push(pageCounter);
                  pageCounter++;
                  counter += 10;
                }
              }
              pageCounter++;
            }

            return pagesArray;
          }
        },
      mounted(){
        this.$axios.$get('http://127.0.0.1:8000/api/articles').then(response => {
          this.articles = response.data;
          this.currentPage = 0;
        })
      },
      data(){
        return {
          articles: []
        }
      },
    }
</script>

<style scoped>

</style>
