<template>
  <div>
    <muuri-grid>
      <w-pid/>
      <widget-large>
        <p>Large widget.</p>
      </widget-large>
      <widget-large>
        <p>Large widget.</p>
      </widget-large>
      <widget-small>
        <p>Small widget</p>
      </widget-small>
      <widget-large>
        <p>Large widget.</p>
      </widget-large>
      <widget-small>
        <p>Small widget</p>
      </widget-small>
      <widget-small>
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
