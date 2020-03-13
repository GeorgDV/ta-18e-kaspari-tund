<template>
  <div>
    <div v-for="page in pagesArray">
      <button class="button" style="float: left;" @click="pageBtnClick">{{page}}</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "pagination",
        props: ["pagination"],
        computed: {
          getPages() {
            //let pagesArray = [];

            /*
            this.$axios.$get('http://127.0.0.1:8000/api/articles').then(response => {
              this.articles = response.data;
              delete(response.data);
              this.pagination = response;
              //console.log(this.pagination);

              if (this.pagination.current_page != null) {
                for (let page = 1; page <= this.pagination.last_page; page++) {
                  pagesArray.push(page);
                }
              }
            })
            */

            console.log("Pages...");
            console.log(pagesArray);
            return pagesArray;
          }
        },
      mounted(){
        this.$axios.$get('http://127.0.0.1:8000/api/articles').then(response => {
          this.articles = response.data;
          delete(response.data);
          this.pagination = response;
          console.log(this.pagination);
          //console.log(this.getPages());


          if (this.pagination.current_page != null) {
            for (let page = 1; page <= this.pagination.last_page; page++) {
              this.pagesArray.push(page);
            }
          }
        })
      },
      methods: {
        next(){
          this.$axios.$get(this.pagination.next_page_url).then(response => {
            if (response.data != null) {
              console.log("Response:");
              console.log(response);
              this.articles = response.data;
              delete(response.data);
              this.pagination = response;
              //console.log(this.pagination);
            }
          })
        },
        back(){
          this.$axios.$get(this.pagination.prev_page_url).then(response => {
            if (response.data != null) {
              console.log("Response:");
              console.log(response);
              this.articles = response.data;
              delete(response.data);
              this.pagination = response;
              //console.log(this.pagination);
            }
          })
        },
        pageBtnClick(event) {

          this.$axios.$get('http://127.0.0.1:8000/api/articles').then(response => {
            if (response.data != null) {
              this.pagination = response;
              this.lastPageUrl = this.pagination.last_page_url;
              this.buttonNumber = event.target.innerHTML;
              console.log("Current page pagination:");
              console.log(this.pagination);
              this.subUrl = this.lastPageUrl.substring(0, this.pagination.last_page_url.length - 1);
              this.targetUrl = this.subUrl + this.buttonNumber;
              console.log(this.targetUrl);
              this.pagination.target_url = this.targetUrl;

              this.$axios.$get(this.pagination.target_url).then(response => {
                if (response.data != null) {
                  console.log("Target response:");
                  console.log(response);
                  console.log(this.pagination);
                  this.articles = null;
                  delete(response.data);
                  this.pagination = response;
                  console.log("Target pagination:");
                  console.log(this.pagination);
                }
              })
            }
          })

        }
      },
      data(){
        return {
          articles: [],
          pagination: {},
          pagesArray: []
        }
      }
    }
</script>

<style scoped>

</style>
