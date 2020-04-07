<template>
  <form>
    <div>
      <label>Title</label>
      <input type="text" name="title" v-model="article.title">
    </div>
    <div>
      <label>Body</label>
      <textarea name="description" v-model="article.body"/>
    </div>
    <button @click.prevent="submit">Save</button>
  </form>
</template>

<script>
    export default {
        name: "_id",
        created() {
          this.$axios.$get('http://127.0.0.1:8000/api/articles/' + this.$route.params.id).then(response => {
            this.article = response;
          })
        },
        data(){
          return{
            article: {body: '', title: ''}
          }
        },
        methods: {
          submit(){
            this.$axios.$patch("http://127.0.0.1:8000/api/articles/" + this.$route.params.id, {
              title: this.article.title,
              body: this.article.body
            }).then(res => {
              this.$router.push({path: "/article/"});
            });

          }
        }
    }
</script>

<style scoped>

</style>
