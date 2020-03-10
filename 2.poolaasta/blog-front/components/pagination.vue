<template>
  <button class="button">1</button>
</template>

<script>
    export default {
        name: "pagination",
        props: ["pagination"],
        computed: {
          pages() {

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
