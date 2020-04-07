<template>
  <div>
    <div v-if="pagesArray.length < 9" v-for="page in getPages">
      <button class="button" style="float: left;" @click="$emit('get-page', page)">{{page}}</button>
    </div>
    <div v-if="pagesArray.length > 9">
      <div v-for="page in getFirstPages">
        <button class="button" style="float: left;" @click="$emit('get-page', page)">{{page}}</button>
      </div>
      <div style="float: left;">...</div>
      <div v-for="page in getMiddlePages">
        <button class="button" style="float: left;" @click="$emit('get-page', page)">{{page}}</button>
      </div>
      <div style="float: left;">...</div>
      <div v-for="page in getLastPages">
        <button class="button" style="float: left;" @click="$emit('get-page', page)">{{page}}</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "pagination",
        props: {
          pagination: {}
        },
        computed: {
          getPages() {
            if (this.pagination.current_page != null) {
              this.pagesArray = [];
              for (let page = 1; page <= this.pagination.last_page; page++) {
                this.pagesArray.push(page);
              }
            }
            return this.pagesArray;
          },

          getFirstPages() {
              //GET FIRST PAGES
              this.firstPages = [];
              for (let page = 1; page <= 3; page++) {
                this.firstPages.push(page);
              }

            return this.firstPages;
          },

          getMiddlePages() {
              //GET MIDDLE PAGES - 2 OUTCOMES - EITHER GET +-2 pages VIA CURRENTLY SELECTED PAGE, OR JUST GET +-2 pages VIA MIDDLE PAGE
              this.middlePages = [];
              this.currentPage = this.pagination.current_page;
              console.log("Current page:");
              console.log(this.currentPage);
              //OPTION 1
              for (let page = this.currentPage - 2; page <= this.currentPage + 2; page++) {
                if (page > 3 && page < this.pagination.last_page - 2) {
                  this.middlePages.push(page);
                }
              }

              //OPTION 2 (if no middlepages were added)
              if (this.middlePages.length == 0) {
                for (let page = Math.round(this.pagesArray.length / 2) - 2; page <= Math.round(this.pagesArray.length / 2) + 2; page++) {
                  this.middlePages.push(page);
                }
              }

            return this.middlePages;
          },

          getLastPages() {
              //GET LAST PAGES
              this.lastPages = [];
              for (let page = this.pagesArray.length - 2; page <= this.pagesArray.length; page++) {
                this.lastPages.push(page);
              }

            return this.lastPages;
          }

        },
      data(){
        return {
          articles: [],
          pagination: {},
          pagesArray: [],
          firstPages: [],
          middlePages: [],
          lastPages: []
        }
      },
      mounted(){
        this.$axios.$get('http://127.0.0.1:8000/api/articles').then(response => {
          this.articles = response.data;
          delete(response.data);
          this.pagination = response;
        })
      }
    }
</script>

<style scoped>

</style>
