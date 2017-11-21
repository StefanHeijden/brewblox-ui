<template>
  <div>
    <muuri-grid id="example-grid">
      <w-pid />
      <widget-large id="widget-large2">
        <p>Large widget.</p>
      </widget-large>
      <widget-large id="widget-large3">
        <p>Large widget.</p>
      </widget-large>
      <widget-small id="widget-small1">
        <p>Small widget</p>
      </widget-small>
      <widget-large id="widget-large4">
        <p>Large widget.</p>
      </widget-large>
      <widget-small id="widget-small2">
        <p>Small widget</p>
      </widget-small>
      <widget-small id="widget-small3">
        <p>Small widget</p>
      </widget-small>
    </muuri-grid>
  </div>
</template>

<script>
import {
} from 'quasar';
import WPid from '../../widgets/WPid.vue';
import MuuriGrid from '../../widgets/MuuriGrid.vue';
import WidgetLarge from '../../widgets/WidgetLarge.vue';
import WidgetSmall from '../../widgets/WidgetSmall.vue';

export default {
  name: 'index',
  components: {
    WPid,
    MuuriGrid,
    WidgetLarge,
    WidgetSmall,
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  },
  beforeDestroy() {
  },
};
</script>

<style lang="stylus">
</style>
