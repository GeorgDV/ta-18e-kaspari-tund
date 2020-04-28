<template>
    <div id="mapid">
    </div>
</template>

<script>
  import * as L from "leaflet";
  import 'leaflet/dist/leaflet.css';
    export default {
        name: "LeafletMap",
      props: ['center', 'zoom', 'geoJSON'],
      watch: {
        center(newCenter){
          this.map.flyTo(newCenter);
        },
        zoom(newZoom){
          this.map.setZoom(newZoom);
        },
        geoJSON(newGeoJSON){
          L.geoJSON(newGeoJSON).addTo(this.map);
        }
      },
      mounted() {
        this.map = L.map('mapid').setView(this.center, this.zoom);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'pk.eyJ1IjoiZ2VvcmdkdiIsImEiOiJjazlqcGRlZnYwMHh3M2pxYWdrZ2ppbnF1In0.LFs-X6THU_2fVw3nSlhQTA'
        }).addTo(this.map);
      },
      data(){
          return {
            map: null
          }
      }
    }
</script>

<style scoped>
  #mapid { height: 700px; }
</style>
