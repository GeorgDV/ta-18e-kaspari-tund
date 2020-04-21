<template>
  <div class="section">
    <search @changed="setSearch"></search>
    <stats-list :countries="$store.getters.sortedCountries" :world="$store.getters.globalAsCountry" v-if="$store.state.countries"></stats-list>
  </div>
</template>

<script>

import Stats from "../components/Stats";
import StatsList from "../components/StatsList";
import Search from "../components/Search";
export default {
  components: {Search, StatsList, Stats},
  created() {
    this.$store.dispatch('fetchStatistics');
  },

  data(){
    return {

    }
  },

  methods: {

  },

  computed: {

  }
}

</script>

<style>

</style>
