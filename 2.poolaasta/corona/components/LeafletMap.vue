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
        },
        center(newCenter){
          this.map.flyTo(newCenter);
        },
        zoom(newZoom){
          this.map.setZoom(newZoom);
        },
        geoJSON(newGeoJSON){
          L.geoJSON(newGeoJSON, {style: this.style}).addTo(this.map);
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
            active: null
          }
      },
      methods: {
        getColor(d){
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
        style(feature){
          var color = "";
          if (this.active === 'confirmed'){
            color = this.getColor(feature.properties.confirmed);
          } else if (this.active === 'deaths'){
            color = this.getColor(feature.properties.deaths);
          }

          return {
            fillColor: color,
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
          };

        }
      }
    }
</script>

<style scoped>
  #mapid { height: 650px; }
</style>
