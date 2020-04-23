<template>
  <div class="section">
    <chart v-if="$store.getters.timelineConfirmed.length != 0 && $store.getters.timelineDeaths.length != 0 && $store.getters.timelineRecovered.length != 0"
           :labels="$store.getters.timelineLabels" :confirmed="$store.getters.timelineConfirmed"
           :deaths="$store.getters.timelineDeaths" :recovered="$store.getters.timelineRecovered"></chart>
  </div>
</template>

<script>
  import Chart from "../components/Chart";
  export default {
    components: {Chart},
    created() {
      //MORE HOMEWORK
      this.$store.dispatch('fetchConfirmedTimeline', this.$route.params.slug);
      this.$store.dispatch('fetchDeathsTimeline', this.$route.params.slug);
      this.$store.dispatch('fetchRecoveredTimeline', this.$route.params.slug);

      this.$forceUpdate();
    },
  }
</script>

<style scoped>
</style>
