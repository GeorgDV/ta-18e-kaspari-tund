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
        <nuxt-link class="button is-danger" to="">Delete</nuxt-link>
        <nuxt-link class="button is-danger" to="edit">Edit</nuxt-link>
        <nuxt-link class="button is-danger" :to="article.id">Article</nuxt-link>
      </td>
    </tr>
    </tbody>
  </table>
  <pagination></pagination>
</div>
</template>

<script>
    import Pagination from "../../components/pagination";
    import {empty} from "../../.nuxt/utils";
    export default {
        name: "index",
      components: {Pagination},
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
            if (response.data != null) {
              this.articles = response.data;
              delete(response.data);
              this.pagination = response;
              console.log(this.pagination);
            }
          })
        },
        back(){
          this.$axios.$get(this.pagination.prev_page_url).then(response => {
            if (response.data != null) {
              this.articles = response.data;
              delete(response.data);
              this.pagination = response;
              console.log(this.pagination);
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
