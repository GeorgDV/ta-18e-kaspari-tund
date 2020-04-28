<template>
  <div class="section">
    <button class="button is-info" @click="toggleActive('confirmed')">Confirmed</button>
    <button class="button is-danger" @click="toggleActive('deaths')">Deaths</button>
    <button class="button is-success" @click="toggleActive('recovered')">Recovered</button>
    <chart :labels="$store.getters.timelineLabels">
      <dataset v-if="active.includes('confirmed')" :data="$store.getters.timelineData['confirmed']" title="Number of Confirmed Cases"
               backgroundColor="rgba(179, 164, 220, .4)" borderColor="rgba(38,0,76,0.8)"></dataset>
      <dataset v-if="active.includes('deaths')" :data="$store.getters.timelineData['deaths']" title="Number of Death Cases"
               backgroundColor="rgba(255, 124, 148, 0.4)" borderColor="rgba(168,0,23,0.8)"></dataset>
      <dataset v-if="active.includes('recovered')" :data="$store.getters.timelineData['recovered']" title="Number of Recovered Cases"
               backgroundColor="rgba(0, 192, 9, 0.4)" borderColor="rgba(76,168,87,0.8)"></dataset>

    </chart>
  </div>
</template>

<script>
  import Chart from "../components/Chart";
  import Dataset from "../components/Dataset";
  export default {
    components: {Dataset, Chart},
    created() {
      this.$store.dispatch('fetchTimeline', {slug:this.$route.params.slug, type: 'confirmed'});
      this.$store.dispatch('fetchTimeline', {slug:this.$route.params.slug, type: 'deaths'});
      this.$store.dispatch('fetchTimeline', {slug:this.$route.params.slug, type: 'recovered'});

      //MORE HOMEWORK
      /*
      this.$store.dispatch('fetchConfirmedTimeline', this.$route.params.slug);
      this.$store.dispatch('fetchDeathsTimeline', this.$route.params.slug);
      this.$store.dispatch('fetchRecoveredTimeline', this.$route.params.slug);
      */


    },
    data(){
      return{
        active: [
          'confirmed'
        ]
      }
    },
    methods: {
      toggleActive(type){
        if(this.active.includes(type)){
          this.active = this.active.filter(el => el != type);
        }
        else {
          this.active.push(type);
        }
      }
    }
  }
</script>

<style scoped>
</style>
