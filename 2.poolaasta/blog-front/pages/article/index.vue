<template>
  <div class="container">
    <button class="button" @click="back">Back</button>
    <button class="button" @click="next">Next</button>
    <nuxt-link class="button is-primary" to="add">Add Article</nuxt-link>
    <table>
      <tbody>
      <tr v-for="article in articles">
        <td>
          {{article.id}}
        </td>
        <td>
          {{article.title}}
        </td>
        <td>
          {{article.dateTime}}
        </td>

        <td>
          <button class="button is-danger" @click="deleteArticle(article.id)">Delete</button>
          <nuxt-link class="button is-secondary" :to="'edit/' + article.id.toString()">Edit</nuxt-link>
          <nuxt-link class="button is-secondary" :to="'' + article.id.toString()">Article</nuxt-link>
        </td>
      </tr>
      </tbody>
    </table>
    <pagination v-bind:pagination="this.pagination" @get-page="getPage"></pagination>
  </div>
</template>

<script>
  import Pagination from "../../components/pagination";
  export default {
    name: "index",
    components: {Pagination},
    mounted(){
      this.$axios.$get('http://127.0.0.1:8000/api/articles').then(response => {
        this.articles = response.data;
        delete(response.data);
        this.pagination = response;
      })
    },
    data(){
      return {
        articles: [],
        pagination: {}
      }
    },
    methods: {
      deleteArticle(id){
        this.$axios.$delete('http://127.0.0.1:8000/api/articles/' + id).then(response => {
          this.getPage(this.pagination.current_page);
        });
      },
      next(){
        this.$axios.$get(this.pagination.next_page_url).then(response => {
          if (response.data != null) {
            this.articles = response.data;
            delete(response.data);
            this.pagination = response;
          }
        })
      },
      back(){
        this.$axios.$get(this.pagination.prev_page_url).then(response => {
          if (response.data != null) {
            this.articles = response.data;
            delete(response.data);
            this.pagination = response;
          }
        })
      },
      getPage(page) {
        this.$axios.$get('http://127.0.0.1:8000/api/articles?page=' + page).then(response => {
          if (response.data != null) {
            this.articles = response.data;
            delete(response.data);
            this.pagination = response;
            console.log("These are the articles that should be shown..:");
            console.log(this.articles);
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
