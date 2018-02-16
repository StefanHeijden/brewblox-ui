<template>
  <div class='gridDashboard' ref="dashboard">
    <process-value :tilesY=2 :tilesX=2 class='border' />
    <w-pid :tilesY=5 :tilesX=4 class='border' />
    <div class='width6 height2 border'> 2 </div>
    <w-pid :tilesY=12 :tilesX=12 class='border' />
    <div class='width1 height6 border'> 4 </div>
    <div class='width3 height3 border'> 5 </div>
    <div class='width2 height7 border'> 6 </div>
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
    props: {
    },
    created() {
    },
    methods: {
    },
  };
</script>

<style>
@import 'DashboardGrid.css';

.border {
  border: 2px solid black;
}

</style>