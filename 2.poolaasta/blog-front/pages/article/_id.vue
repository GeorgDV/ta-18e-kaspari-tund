<template>
  <div>
    <card :content="article.excerpt"> </card>
  </div>
</template>

<script>
    import Card from "../../components/Card"
    export default {
        components: {Card},
        name: "_id",
        created() {
          this.$axios.$get('http://127.0.0.1:8000/api/articles/' + this.$route.params.id).then(response => {
            this.article = response;
          })
        },
        data(){
            return {
              article: {excerpt: ''}
            }
        }
    }
</script>

<style scoped>

</style>
