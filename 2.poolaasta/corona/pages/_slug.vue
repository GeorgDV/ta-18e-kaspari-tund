<template>
  <div class="section">
    <chart :labels="$store.getters.timelineLabels" :confirmed="$store.getters.timelineConfirmed"
           :deaths="$store.getters.timelineDeaths" :recovered="$store.getters.timelineRecovered"></chart>
  </div>
</template>

<script>
  import Chart from "../components/Chart";
  export default {
    components: {Chart},
    created() {
      this.$store.dispatch('fetchConfirmedTimeline', this.$route.params.slug);
      this.$store.dispatch('fetchDeathsTimeline', this.$route.params.slug);
      this.$store.dispatch('fetchRecoveredTimeline', this.$route.params.slug);
    },
  }
</script>

<style scoped>
</style>
