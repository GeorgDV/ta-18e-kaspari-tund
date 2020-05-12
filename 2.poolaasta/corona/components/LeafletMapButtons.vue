<template>
  <div id="button-wrapper">
    <h3>Currently Showing {{this.active.toUpperCase()}}</h3>
    <button class="button button-action is-danger" v-on:click="toggleActive">Toggle Confirmed/Deaths</button>
  </div>
</template>

<script>
    export default {
        name: "LeafletMapButtons",
      props: ['active']
    }

</script>

<style scoped>

</style>
