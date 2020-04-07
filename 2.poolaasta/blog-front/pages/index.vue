<template>
  <div class="container">
    <nuxt-link class="button is-primary" to="/article/">Link to Articles</nuxt-link>
    <button class="button" @click="next">Next</button>
    <card v-for="article in articles" :content="article.excerpt"></card>
  </div>
</template>
<script>
  import Card from "../components/Card";
  export default {
    components: {Card},
    mounted(){
      this.$axios.$get('http://127.0.0.1:8000/api/articles').then(response => {
        this.articles = response.data;
        delete(response.data);
        this.pagination = response;
        console.log(this.pagination);
      })
    },
    data(){
      return {
        articles: [],
        pagination: {}
      }
    },
    methods: {
      next(){
        this.$axios.$get(this.pagination.next_page_url).then(response => {
          this.articles = response.data;
          delete(response.data);
          this.pagination = response;
          console.log(this.pagination);
        })
      }
    }
  }
</script>
<style>
  ul {
    list-style: disc;
  }
</style>
