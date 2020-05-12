<template>
  <div id="mapid">
  </div>
</template>

<script>
  import * as L from "leaflet";
  import 'leaflet/dist/leaflet.css';
    export default {
        name: "LeafletMap",
      props: ['center', 'zoom', 'geoJSON', 'active'],
      watch: {
        active(newActive){
          this.active = newActive;
          L.geoJSON(this.newGeoJSON, {style: this.style}).addTo(this.map);
        },
        center(newCenter){
          this.map.flyTo(newCenter);
        },
        zoom(newZoom){
          this.map.setZoom(newZoom);
        },
        geoJSON(newGeoJSON){
          this.newGeoJSON = newGeoJSON;
          L.geoJSON(newGeoJSON, {style: this.style}).addTo(this.map);
          console.log(this.active);
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
            map: null,
            active: null,
            newGeoJSON: null
          }
      },
      methods: {
        getConfirmedColor(d){
          return d > 10000 ? '#0f2380' :
            d > 5000  ? '#0739bd' :
              d > 2000  ? '#1742e3' :
                d > 1000  ? '#2f6afc' :
                  d > 500   ? '#3985fd' :
                    d > 200   ? '#6496fe' :
                      d > 100   ? '#8ba9fe' :
                        d > 10   ? '#b9c5f9':
                          '#f1f6ff';
        },
        getDeathsColor(d){
          return d > 10000 ? '#80000a' :
            d > 5000  ? '#bd0014' :
              d > 2000  ? '#e31700' :
                d > 1000  ? '#fc2d0f' :
                  d > 500   ? '#fd2938' :
                    d > 200   ? '#fe5257' :
                      d > 100   ? '#fe7e88' :
                        d > 10   ? '#f9b6bc':
                          '#ffeef3';
        },
        style(feature){
          if (this.active === 'confirmed'){
            return {
              fillColor: this.getConfirmedColor(feature.properties.confirmed),
              weight: 2,
              opacity: 1,
              color: 'white',
              dashArray: '3',
              fillOpacity: 0.7
            };
          } else if (this.active === 'deaths'){
            return {
              fillColor: this.getDeathsColor(feature.properties.deaths),
              weight: 2,
              opacity: 1,
              color: 'red',
              dashArray: '3',
              fillOpacity: 0.7
            };
          }

        }
      }
    }
</script>

<style scoped>
  #mapid { height: 650px; }
</style>
