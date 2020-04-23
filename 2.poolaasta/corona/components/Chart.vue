<template>
  <canvas ref="myChart"></canvas>
</template>

<script>
  import Chart from "chart.js";
  export default {
    name: "Chart",
    props: ['labels', 'confirmed', 'deaths', 'recovered'],
    data() {
      return {
      }
    },
    mounted() {
      var myChart = new Chart(this.$refs['myChart'], {
        type: 'line',
        data: {
          labels: this.labels,
          datasets: [{
            label: 'Number of Confirmed Cases',
            //MORE HOMEWORK TO ADD FANCY COLORED GRAPH
            backgroundColor: "rgba(179,164,220,0.4)",
            borderColor: "rgba(38,0,76,0.8)",
            data: this.confirmed,
            borderWidth: 2
          }, {
            label: 'Number of Death Cases',
            backgroundColor: "rgba(255,124,148,0.4)",
            borderColor: "rgba(168,0,23,0.8)",
            data: this.deaths,
            borderWidth: 2
          }, {
            label: 'Number of Recovered Cases',
            backgroundColor: "rgba(0,192,9,0.4)",
            borderColor: "rgba(76,168,87,0.8)",
            data: this.recovered,
            borderWidth: 2
          },]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    }
  }
</script>

<style scoped>
</style>
