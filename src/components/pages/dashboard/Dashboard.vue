<template>
  <div class='grid' ref="dashboard">
    <div class='w2 h2'> 1 </div>
    <div class='w2 h2'> 2 </div>
   <w-pid class='w4 h4' tilesY='4'/>
  </div>
</template>

<script>
  import WPid from '../../widgets/WPid.vue';
  import ProcessValue from '../../widgets/ProcessValue.vue';

  export default {
    name: 'index',
    components: {
      WPid,
      ProcessValue,
    },
    data() {
    },
    props: {
    },
    created() {
    },
    methods: {
    },
  };
</script>

<style >
@import 'DashboardGrid.css';
</style>