<template>
  <div class="section">
    <chart :labels="$store.getters.confirmedTimelineLabels" :data="$store.getters.confirmedTimelineData" v-if="$store.state.timeline.confirmed != []"></chart>
  </div>
</template>

<script>
  import Chart from "../components/Chart";
  export default {
    components: {Chart},
    created() {
      this.$store.dispatch('fetchConfirmedTimeline', this.$route.params.slug)
    },
  }
</script>

<style scoped>
</style>
