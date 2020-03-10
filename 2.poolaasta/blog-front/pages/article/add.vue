<template>
  <form>
    <div>
      <label>Title</label>
      <input type="text" name="title" v-model="title">
    </div>
    <div>
      <label>Body</label>
      <textarea name="description" v-model="body"/>
    </div>
    <button @click.prevent="submit">Save</button>
  </form>
</template>

<script>
    export default {
        name: "add",
      data() {
          return{
            title: "",
            body: ""
          }
      },
      methods: {
          submit(){
            this.$axios.$put("http://127.0.0.1:8000", {
              title: this.title,
              body: this.body
            }).then(res => {
                this.$router.push({path: "/article"});
            });

          }
      }
    }
</script>

<style scoped>

</style>
