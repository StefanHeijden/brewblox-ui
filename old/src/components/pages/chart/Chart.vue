<template>
<div>
  <h3>Chart page demo</h3>
  <LineChart slug="sample-beer"></LineChart> 
</div>
</template>

<script>
import {
} from 'quasar';
import LineChart from './LineChart.vue';

const Plotly = require('plotly.js/lib/core');

Plotly.register([
]);

export default {
  name: 'chartspage',
  components: {
    LineChart,
  },
  data: () => ({
  }),
  created() {
  },
  computed: {
  },
  mounted() {
  },
  updated() {
  },
  beforeDestroy() {
  },
};

</script>

<style lang="stylus">
</style>
