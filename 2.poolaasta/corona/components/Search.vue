<template>
  <div class="columns">
    <div class="column is-three-quarters">
      <input class="input" type="text" placeholder="Country" v-model="search" @input="valueChanged">
    </div>
    <div class="column is-one-quarter">

      <div class="select">
        <select @input="valueChanged" v-model="sort">
          <option v-for="stat in allStats" :value="stat">{{stat}}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Search",
        data() {
          return {
            stats: ['Confirmed', 'Deaths', 'Recovered']
          }
        },
        methods: {
          valueChanged(){
            setTimeout( () => {
              this.$emit('changed', {search:this.search, sort:this.sort});
            }, 0);
          }
        },
        computed: {
          search: {
            get(){
              return this.$store.state.filters.search;
            },

            set(value){
              this.$store.commit('SET_SEARCH_FILTER', value);
            }
          },

          sort: {
            get(){
              return this.$store.state.filters.sort;
            },

            set(value){
              this.$store.commit('SET_SORT_FILTER', value);
            }
          },

          totalStats(){
            return this.stats.map(stat => 'Total' + stat);
          },
          newStats(){
            return this.stats.map(stat => 'New' + stat);
          },
          allStats(){
            let all = [];
            all.push(...this.totalStats);
            all.push(...this.newStats);
            return all;
          }
        }
    }
</script>

<style scoped>

</style>
