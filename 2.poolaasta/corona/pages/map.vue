<template>
  <div>
    <leaflet-map :center="[45, 45]" :zoom="4" :geoJSON="this.$store.getters.confirmedGeoJSON" :active="getActive"></leaflet-map>

    <div id="button-wrapper">
      <h3>Currently Showing {{this.active.toUpperCase()}}</h3>
      <button class="button is-info" @click="toggleActive">Toggle Confirmed/Deaths</button>
    </div>

  </div>
</template>

<script>
    import LeafletMap from "../components/LeafletMap";
    export default {
      components: {LeafletMap},
      created() {
        this.$store.dispatch('fetchStatistics');
        this.$store.dispatch('fetchGeoJSON');
      },
      data(){
        return{
          active: 'confirmed'
        }
      },
      methods:{
        toggleActive(){
          if (this.active === 'deaths'){
            this.active = 'confirmed';
          } else if (this.active === 'confirmed') {
            this.active = 'deaths';
          }
          this.$store.dispatch('fetchGeoJSON');
        }
      },
      computed: {
        getActive(){
          return this.active;
        }
      }
    }
</script>

<style scoped>
  #button-wrapper {
    position: absolute;
    width: 100%;
    padding: 0.2em;
    text-align: center;
  }
</style>
