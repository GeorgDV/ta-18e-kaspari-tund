<template>
  <div class="card">

    <nuxt-link :to="data.Slug">
      <header class="card-header has-background-grey-lighter">
        <p class="card-header-title">
            {{data.Country}}
        </p>
        <img v-if="data.CountryCode" :src="flagUrl">
      </header>
    </nuxt-link>

    <div class="card-content has-background-light">
      <table>
        <tbody>
          <tr v-for="stat in allStats">
            <td >{{stat}}</td>
            <td class="has-text-right">{{data[stat]}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Stats",
        props: ['data'],
        data() {
          return {
            stats: ['Confirmed', 'Deaths', 'Recovered']
          }
        },
        computed: {
          flagUrl() {
            return `https://www.countryflags.io/${this.data.CountryCode.toLowerCase()}/flat/64.png`;
          },
          totalStats(){
            return this.stats.map(stat => 'Total' + stat);
          },
          newStats(){
            return this.stats.map(stat => 'New' + stat);
          },
          allStats(){
            let all = [];
            all.push(...this.totalStats);
            all.push(...this.newStats);
            return all;
          }
        }
    }
</script>

<style scoped>
  table {
    width: 100%;
  }

  .card-header {
    padding: 0.4em;
  }
</style>
